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

const PORT = process.env.PORT || 3000;  // Use Render's port or default to 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
