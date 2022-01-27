import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import taskRoute from "./routes/task.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/task", taskRoute);

const CONNECTIONSTRING =
  "mongodb+srv://mernmastery:eVy7fvInPQq4VKgL@cluster0.jx3wt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log("App is listning on PORT", PORT);
    })
  )
  .catch((err) => {
    console.log(err);
  });
