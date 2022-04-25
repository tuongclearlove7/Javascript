import express from "express";
import chatbotcontroller from "../controller/chatbotcontroller"

let router = express.Router();

let initWrbrouter = (app) => {

    router.get("/",chatbotcontroller.getHomePage);

    router.get("/webhook", chatbotcontroller.getWebhook);
    router.post("/webhook", chatbotcontroller.postWebhook);
    
    return app.use("/",router);
}

module.exports = initWrbrouter;














