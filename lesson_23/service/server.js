import mongoose from "mongoose";
import { Logger } from "./libs/logger.js";
import { app } from "./src/index.js";
import 'dotenv/config'

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_DB_STRING);

const db = mongoose.connection;

db.on("error", (error) => {
    Logger.error(`Connection error: ${JSON.stringify(error)}`);
});
db.on("open", () => {
    Logger.info("Connected to MongoDB is opened 🐾🐾🐾 ");
});

app.listen(port, () => {
    Logger.info(`Server is serving on http://hostname:${port}`);
});