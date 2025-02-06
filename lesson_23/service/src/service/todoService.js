import { todoModel } from './src/schema/todoSchema.js';
import mongoose from "mongoose";

export class TodosService {
    async getTodos() {
        try {
            return await todoModel.find({});
        } catch (error) {
            console.log('Failed to retrieve todos -> "export class TodosService"');
            
            // Logger.error(
            //     "Error fetching todos:",
            //     JSON.stringify({
            //         message: error.message,
            //         stack: error.stack,
            //     }),
            // );
            // throw new Error("Failed to retrieve todos.");
        }
    }

    // async getTodo(id) {
    //     if (!mongoose.Types.ObjectId.isValid(id)) {
    //         Logger.warn(`Invalid ID format: ${id}`);
    //         throw new Error("Invalid todo ID.");
    //     }

    //     try {
    //         const todo = await todoModel.findById(id);
    //         if (!todo) {
    //             Logger.warn(`Todo not found: ${id}`);
    //             throw new Error("Todo not found.");
    //         }
    //         return todo;
    //     } catch (error) {
    //         Logger.error(
    //             "Error fetching todo:",
    //             JSON.stringify({
    //                 message: error.message,
    //                 stack: error.stack,
    //             }),
    //         );
    //         throw new Error("Failed to retrieve the todo.");
    //     }
    // }

    async createTodo(todoData) {
        try {
            const todo = new todoModel({
                _id: new mongoose.Types.ObjectId(),
                ...todoData,
            });
            return await todo.save();
        } catch (error) {
            console.log('Failed to create the todo - > "async createTodo(todoData)"');
            
            // Logger.error(
            //     "Error creating todo:",
            //     JSON.stringify({
            //         message: error.message,
            //         stack: error.stack,
            //     }),
            // );
            // throw new Error("Failed to create the todo.");
        }
    }

    async updateTodo(id, data) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log(`Invalid ID format: ${id}`);
            // Logger.warn(`Invalid ID format: ${id}`);
            // throw new Error("Invalid todo ID.");
        }

        try {
            const todo = await todoModel.findByIdAndUpdate(id, data, { new: true });
            if (!todo) {
                console.log(`Todo not found for update: ${id}`);
                // Logger.warn(`Todo not found for update: ${id}`);
                // throw new Error("Todo not found for update.");
            }
            return todo;
        } catch (error) {
            console.log('Failed to update the todo -> "async updateTodo(id, data)"');
            
            // Logger.error(
            //     "Error updating todo:",
            //     JSON.stringify({
            //         message: error.message,
            //         stack: error.stack,
            //     }),
            // );
            // throw new Error("Failed to update the todo.");
        }
    }

    async deleteTodo(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log(`Invalid ID format: ${id}`);
            // Logger.warn(`Invalid ID format: ${id}`);
            // throw new Error("Invalid todo ID.");
        }

        try {
            const todo = await todoModel.findByIdAndDelete(id);
            if (!todo) {
                console.log(`Todo not found for deletion: ${id}`);
                // Logger.warn(`Todo not found for deletion: ${id}`);
                // throw new Error("Todo not found for deletion.");
            }
            return todo;
        } catch (error) {
            console.log('Failed to delete the todo. -> " async deleteTodo(id)"');
            
            // Logger.error("Error deleting todo:", {
            //     message: error.message,
            //     stack: error.stack,
            // });
            // throw new Error("Failed to delete the todo.");
        }
    }
}

// Create a new blog post object
// const article = await todoModel.create({
//     // _id: Schema.Types.ObjectId,
//     title: 'Todo1',
//     description: 'buy water and milk',
//     completed: true,
// });

// // Find a single blog post
// const firstArticle = await todoModel.findOne({});
// console.log(firstArticle);

// const blog = await todoModel.deleteOne({ title: "Todo2" })
// console.log(blog)