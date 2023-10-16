import express from "express";
import { PORT } from "./config.js";
import { mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';

import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json())
app.use(cors());

app.get('/',  (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN')
});

app.use('/books', booksRoute)

mongoose
    .connect(mongoDB_URL)
    .then(() => {
        console.log(`App connected to DB`);
        app.listen (PORT, () => {
            console.log(`App listening on port ${PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    });