import { Router } from "express";
const newMessageRouter = Router();
import { messages } from "./messagesRouter.js";

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.post("/", (req, res) => {
  const { newmessage: text, name: user } = req.body;

  messages.push({
    text: text,
    user: user,
    added: new Date(),
  });

  res.redirect("/messages");
});

export default newMessageRouter;
