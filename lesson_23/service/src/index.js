import express from "express";
import cors from "cors";
import { todoController } from "./controllers/todoController.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/", todoController);
app.use((req, res) => {
    res.status(404).json({ error: "Cannot find the page!" });
});