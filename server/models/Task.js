import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  points: { type: Number, required: true },
  taskLink: { type: String },  // Optional field for task link
  submissions: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    proof: { type: String },  // Optional field for proof link
    status: { type: String, default: 'pending' },  // Default status for submissions
  }],
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
