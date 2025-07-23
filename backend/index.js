import express from "express"
const app = express();

import dotenv from "dotenv"
dotenv.config();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("This is the backend home page");
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("The localhost is running on the port " + port)
    }
})