import express from 'express';
import mongoose from "mongoose";
import router from "./router.js";

const PORT = process.env.PORT || 5000;
const DB_Password = process.env.DB_PASSWORD || 'oDCZ61CX30tmvkTv';
const DB_URL = `mongodb://sadboykas:${DB_Password}@cluster0-shard-00-00.11vyn.mongodb.net:27017,cluster0-shard-00-01.11vyn.mongodb.net:27017,cluster0-shard-00-02.11vyn.mongodb.net:27017/?ssl=true&replicaSet=atlas-44585b-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`


const app = express();

app.use(express.json());
app.use('/api', router)

console.log("ServerWorking")

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}
startApp();
