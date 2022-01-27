import express from "express";
import {
  getAllTasks,
  postTask,
  deleteTask,
  putTask,
} from "../controllers/task.js";

const router = express.Router();

router.get("/getAll", getAllTasks);

router.post("/createTask", postTask);

router.put("/updateTask", putTask);

router.delete("/deleteTask/:Id", deleteTask);

export default router;
