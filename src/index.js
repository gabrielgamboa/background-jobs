import "dotenv/config";
import express from "express";

import UserController from "./controllers/UserController.js";

const app = express();

app.use(express.json());

app.post("/users", UserController.store);

app.get("/", (req, res) => {
    return res.send('oi');
});

app.listen(3333, () => console.log('Server is running...'));