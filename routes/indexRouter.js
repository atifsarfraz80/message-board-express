import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Welcome to Mini Message Board" });
});

export default indexRouter;
