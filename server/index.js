import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectionRouter from "./routes/connections.js";
import cors from "cors";
const app = express();

dotenv.config();

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route

const connect = () => {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(express.json());
app.use(cors());

app.use("/api/connection", connectionRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}.`);
});
