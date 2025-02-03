const { MongoClient } = require("mongodb");
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://user:Osi0AraDRpZj4HxL@usernikita.r7ea6.mongodb.net/?retryWrites=true&w=majority&appName=UserNikita";

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

        const db = client.db("TODO");
        const col = db.collection("TODOs");

        const todosDocument = [
            {
                "name": { "first": "Alan", "last": "Turing" },
                "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
                "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
                "contribs": ["Turing machine", "Turing test", "Turingery"],
                "views": 1250000
            }
        ]
        // Insert the documents into the specified collection        
        const p = await col.insertMany(todosDocument);
        // Find the document
        const filter = { "name.last": "Turing" };
        const document = await col.findOne(filter);
        // Print results
        console.log("Document found:\n" + JSON.stringify(document));
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);