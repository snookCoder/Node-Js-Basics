import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("worked");
});

app.listen(process.env.PORT, () => {
  console.log(`server started at ${PORT}`);
});
