import mongoose from "mongoose";
import { Logger } from "./libs/logger.js";
import { app } from "./src/index.js";

const port = 3000;

mongoose.connect("mongodb+srv://user:Osi0AraDRpZj4HxL@usernikita.r7ea6.mongodb.net/?retryWrites=true&w=majority&appName=UserNikita");

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