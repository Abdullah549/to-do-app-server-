import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Task", taskSchema);
