import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import { connectDb } from "./db.js";
//import router from "./router/loginrouter.js";
import router from "./router/index.js";
import cookieParser from "cookie-parser";
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
const Port = process.env.Port || 3000;
connectDb();
app.listen(Port, () => {
  console.log(`server is running on port ${Port}`);
});
