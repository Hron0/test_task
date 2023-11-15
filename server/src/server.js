import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from "dotenv"
import UserModel from './../models/user.js';

config()
const PORT = 5000
const app = express();

app.use(cors({
    origin: "*",
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("It works wow");
    console.log(process.env.MONGO_URL)
})

app.post("/api/register", async (req, res) => {
    try {
        await UserModel.create({
            name: req.body.name,
            password: req.body.password
        })
        res.json({ status: "norm" })
    } catch (err) {
        res.json({ status: "dog" })
    }
})
app.post("/api/login", async (req, res) => {
    const user = await UserModel.findOne({
        name: req.body.name,
        password: req.body.password
    })

    if (user) {
        return res.json({ status: "ok", user: true })
    } else {
        return res.json({ status: "dog", user: false })
    }
})

mongoose.connect(
    `${process.env.MONGO_URL}`
).then(() => {
    console.log(`Listening on ${PORT}`)
    app.listen(PORT);
})
