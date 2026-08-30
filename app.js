import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";
import messagesRouter from "./routes/messagesRouter.js";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.links = [
    { href: "/", text: "Home" },
    { href: "/messages", text: "All Messages" },
    { href: "/new", text: "Compose New Message" },
  ];
  next();
});

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/messages", messagesRouter);

app.use(express.static("public"));

app.listen(3000, (error) => {
  if (error) throw error;
  console.log("app running on port 3000");
});
