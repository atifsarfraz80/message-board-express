import { Router } from "express";
import express from "express";
const messagesRouter = Router();
messagesRouter.use(express.urlencoded({ extended: true }));

export const messages = [
  {
    text: "Keseo bhai!",
    user: "Atif",
    added: new Date(),
  },
  {
    text: "Bakchodi mat kar loray!",
    user: "Usman",
    added: new Date(),
  },
  {
    text: "Mar mar ky kutta bana don ga",
    user: "Hammad",
    added: new Date(),
  },
];

messagesRouter.get("/", (req, res) => {
  res.render("messages/allMessages", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

export default messagesRouter;
