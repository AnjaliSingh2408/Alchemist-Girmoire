const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware

// Enable CORS for your frontend URL
app.use(cors({
    origin: 'http://localhost:3000', // replace with your frontend URL if different
    credentials: true, // allows sending cookies or auth headers
}));

// Parse JSON bodies
app.use(express.json());

// API Routes
//const authRoutes = require('./routes/auth');
app.use('/api/auth', require('./routes/auth'));
app.use('/api/medications', require('./routes/medications'));
app.use('/api/doses', require('./routes/doses'));
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
