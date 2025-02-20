import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://userDB:passwordDB@cluster0.7lpxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

async function sendData() {
    let MonsterMovies = [{
        movie1: "Nosfaratu",
        movie2: "Dracula",
        movie3: "Wolfman",
    }]

    let MonsterMovies2 = [{
        movie1: "shin godzilla",
        movie2: "godzilla vs kong",
        movie3: "godzilla 0", 
    }]
    try {
        // Connect to MongoDB
        await client.connect();

        //********SENDING DATA********/
        // const insertSingleData = await client.db("data").collection("changestream").insertOne({ movie: "yousuf" })
        // const insertMultipleData = await client.db("data").collection("changestream").insertMany(MonsterMovies)

        //********RETRIEVE DATA********/
        // const retrieveSingleData = await client.db("data").collection("changestream").findOne({ movie: "Nossssfaratu" })
        // const retrieveALLData = await client.db("data").collection("changestream").find({}).toArray()

        //********UPDATE DATA********/
        // const updateSingleData = await client.db("data").collection("changestream").updateOne({ name: "yousuf" }, { $set: { name: "goku" } })
        // const updateALLData = await client.db("data").collection("changestream").updateMany({ movie: "yousuf" }, { $set: { movie: "dragon ball z" } });
        // const replaceOneData = await client.db("data").collection("changestream").replaceOne({ movie: "yousuf" }, { movie: "nosfaratu", genre: "gothic horror", year: 2025 })

        //********DELETE DATA********/
        // const deleteSingleData = await client.db("data").collection("changestream").deleteOne({ movie: "dragon ball z" })
        // const deleteAllData = await client.db("data").collection("changestream").deleteMany({ movie: "yousuf" })
        // const dropCollectionData = await client.db("data").collection("changestream").drop()

        console.log(updateALLData)

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

sendData();


// "scripts": {
//     "start": "node server.js",
//     "dev": "nodemon server.js"
//   }