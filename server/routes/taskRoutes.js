import express from 'express';
import Task from '../models/Task.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });  // for file upload

// Get tasks by platform
router.get('/platform/:platform', async (req, res) => {
  const tasks = await Task.find({ platform: req.params.platform });
  res.json(tasks);
});

// Submit task proof
router.post('/submit/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const { userId, proofLink } = req.body;  // Expect Cloudinary link as 'proofLink'

    // Find the task by ID
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Add the proof submission to the task
    task.submissions.push({
      userId,
      proof: proofLink,  // Store the Cloudinary link as 'proof'
    });

    // Save the updated task
    await task.save();

    res.status(200).json({ message: 'Proof submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;


// Get task by ID
router.get('/:taskId', async (req, res) => {
  try {
      const task = await Task.findById(req.params.taskId);
      if (task) {
          res.status(200).json(task);
      } else {
          res.status(404).json({ message: 'Task not found' });
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
