// // import express from 'express';
// // import mongoose from 'mongoose';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import taskRoutes from './routes/tasks.js';
// // import userRoutes from './routes/users.js'; // Import the user routes

// // dotenv.config();

// // const app = express();
// // const port = process.env.PORT || 5000;

// // // CORS options
// // const corsOptions = {
// //     origin: true
// // };

// // // Middleware
// // app.use(express.json());
// // app.use(cors(corsOptions));
// // app.use('/uploads', express.static('uploads')); // Serve uploaded images

// // // DB connection
// // const connectDB = async () => {
// //     try {
// //         await mongoose.connect(process.env.MONGODB_URI, {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         });
// //         console.log('MongoDB database is connected');
// //     } catch (error) {
// //         console.error('MongoDB database connection failed', error);
// //     }
// // };

// // // Routes
// // app.use('/api/v1/users', userRoutes); // Use user routes
// // app.use('/api/v1/tasks', taskRoutes);

// // // Start server
// // app.listen(port, () => {
// //     connectDB();
// //     console.log(`Server running on port ${port}`);
// // });

// // Import packages using ES Module syntax
// // import express from 'express';
// // import mongoose from 'mongoose';
// // import cors from 'cors';
// // import dotenv from 'dotenv';

// // // Import routes using ES Module syntax
// // import taskRoutes from './routes/tasks.js';
// // import userRoutes from './routes/users.js'; // Import the user routes

// // dotenv.config();

// // const app = express();
// // const port = process.env.PORT || 5000;

// // // CORS options
// // const corsOptions = {
// //     origin: true,
// //     credentials: true
// // };

// // // Middleware
// // app.use(express.json());
// // app.use(cors(corsOptions));
// // app.use('/uploads', express.static('uploads')); // Serve uploaded images

// // // DB connection
// // const connectDB = async () => {
// //     try {
// //         await mongoose.connect(process.env.MONGODB_URI, {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         });
// //         console.log('MongoDB database is connected');
// //     } catch (error) {
// //         console.error('MongoDB database connection failed', error);
// //     }
// // };

// // // Routes
// // app.use('/api/v1/auth', userRoutes); // Use user routes
// // app.use('/api/v1/tasks', taskRoutes); // Use task routes

// // // Start server
// // app.listen(port, () => {
// //     connectDB();
// //     console.log(`Server running on port ${port}`);
// // });

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';

// import taskRoutes from './routes/taskRoutes.js';
// import userRoutes from './routes/userRoutes.js';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// // CORS options
// const corsOptions = {
//   origin: true,
//   credentials: true,
// };

// app.use(express.json());
// app.use(cors(corsOptions));
// app.use('/uploads', express.static('uploads'));

// // DB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed', error);
//   }
// };

// // Routes
// app.use('/api/v1/auth', userRoutes);
// app.use('/api/v1/tasks', taskRoutes);

// // Start server
// app.listen(port, () => {
//   connectDB();
//   console.log(`Server running on port ${port}`);
// });

import express from 'express';
import connectDB from './config.js';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import cors from 'cors';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Status route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working on port 5000' });
});

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
