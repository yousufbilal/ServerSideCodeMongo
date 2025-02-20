import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';  // Import dotenv package
import UserRoutes from './routes/UserRoutes.js';

dotenv.config();  // Load environment variables from .env file

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

app.use('/api', UserRoutes);

const PORT = process.env.PORT || 3000;  // Use Render's dynamic port or fallback to 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
