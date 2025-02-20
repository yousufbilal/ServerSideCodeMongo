import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoutes from './routes/UserRoutes.js';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());  // This allows all origins to access the API

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://userDB:passwordDB@cluster0.7lpxr.mongodb.net/myDatabase?retryWrites=true&w=majority');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

app.use('/api', UserRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
    connectDB();
});
