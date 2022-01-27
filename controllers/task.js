import mongoose from "mongoose";
import TaskModel from "../models/task.js";

export const getAllTasks = async (req, res) => {
  console.log("in get all task route");
  try {
    const task = await TaskModel.find();
    console.log(task);
    res.json(task);
  } catch (err) {
    console.log(err);
  }
};

export const postTask = async (req, res) => {
  const { name } = req.body;

  const newTask = new TaskModel({
    name,
  });
  console.log("in post task newTAsk is ", newTask);
  try {
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = async (req, res) => {
  console.log(req.params);
  const { Id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(Id)) {
    res.json("task not fount");
  }

  await TaskModel.findByIdAndDelete(Id);
  res.json(Id);
};

export const putTask = async (req, res) => {
  const { _id, name } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.json("task not found");
  }
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      _id,
      {
        name,
      },
      {
        new: true,
      }
    );
    res.json(updatedTask);
  } catch (err) {
    console.log(err);
  }
};
