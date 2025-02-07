// import mongoose from 'mongoose';
// import { TodosService } from './src/service/todoService.js';
// import { todoModel } from './src/schema/todoSchema.js';
// import express from 'express';
// import cors from 'cors';

// const app = express()
// const port = 3000;
// app.use(cors());

// const urlMongo = "mongodb+srv://user:Osi0AraDRpZj4HxL@usernikita.r7ea6.mongodb.net/?retryWrites=true&w=majority&appName=UserNikita";
// mongoose.connect(urlMongo);

// async function createTodo(todoData) {
//     try {
//         const todo = new todoModel({
//             _id: new mongoose.Types.ObjectId(),
//             ...todoData,
//         });
//         return await todo.save();
//     } catch (error) {
//         console.log('Failed to create the todo - > "async createTodo(todoData)"');
//     }
// }

// async function getTodos() {
//     try {
//         return await todoModel.find({});
//     } catch (error) {
//         console.log('Failed to retrieve todos -> "export class TodosService"');
//     }
// }

// createTodo({
//     title: 'todos',
//     description: 'buy some milk',
//     completed: true,
// });
// Find a single blog post
// const findModel = await todoModel.find({});

// app.get('/todos', (req, res) => {
//     res.send(findModel)
// });

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`)
// });

import mongoose from "mongoose";
import { Logger } from "./libs/logger.js";
import { app } from "./src/index.js";

const port = 3000;
const connectionString = "mongodb+srv://user:Osi0AraDRpZj4HxL@usernikita.r7ea6.mongodb.net/?retryWrites=true&w=majority&appName=UserNikita";

mongoose.connect(connectionString);

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