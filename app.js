import "dotenv/config";
import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";
import messagesRouter from "./routes/messagesRouter.js";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "public")));
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
app.use("/", newMessageRouter);
app.use("/", messagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`App running on port ${PORT}`);
});
