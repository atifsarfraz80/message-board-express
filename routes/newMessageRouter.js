import { Router } from "express";
import { body, validationResult } from "express-validator";
import { insertMessage } from "../db/queries.js";

const newMessageRouter = Router();

const validateMessage = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters."),
  body("newmessage")
    .trim()
    .notEmpty()
    .withMessage("Message text cannot be empty.")
    .isLength({ min: 1, max: 500 })
    .withMessage("Message must be under 500 characters."),
];

newMessageRouter.get("/new", (req, res) => {
  res.render("form", { errors: [], formData: {} });
});

newMessageRouter.post("/new", validateMessage, async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      errors: errors.array(),
      formData: { name: req.body.name, newmessage: req.body.newmessage },
    });
  }

  try {
    await insertMessage(req.body.newmessage, req.body.name);
    res.redirect("/messages");
  } catch (err) {
    next(err);
  }
});

export default newMessageRouter;
