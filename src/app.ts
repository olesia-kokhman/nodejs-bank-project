import * as http from "http";
import express from 'express';
import router from './routes/transactions';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://olesia:somepassword@bank-project.r6mfekg.mongodb.net/?retryWrites=true&w=majority&appName=bank-project";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

const app = express();
app.use('/api', router);

const server = http.createServer(app);

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
