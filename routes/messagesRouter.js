import { Router } from "express";
import { getAllMessages, getMessageById } from "../db/queries.js";

const messagesRouter = Router();

messagesRouter.get("/messages", async (req, res, next) => {
  try {
    const messages = await getAllMessages();
    res.render("messages/allMessages", {
      title: "Mini Messageboard",
      messages,
    });
  } catch (err) {
    next(err);
  }
});

messagesRouter.get("/messages/:id", async (req, res, next) => {
  try {
    const message = await getMessageById(req.params.id);
    if (!message) {
      return res.status(404).send("Message not found");
    }
    res.render("messages/messageDetail", { message });
  } catch (err) {
    next(err);
  }
});

export default messagesRouter;
