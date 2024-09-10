import express from 'express';
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import router from "./router.js";
import 'dotenv/config'


const PORT = process.env.PORT || 5300;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

console.log("ServerWorking21")

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}
startApp();
