import express from "express";
import viewEngine from "./config/viewEngine";
import initWrbrouter from "./routers/web";
import bodyParser from "body-parser";
require("dotenv").config();

let app = express();


viewEngine(app);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


initWrbrouter(app)
let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Bot is running on port : ", port);
});














