// Importing necessary modules and packages
const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const courseRoutes = require("./routes/Course");
const paymentRoutes = require("./routes/Payments");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
database.connect();
 
// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
app.use((req, res, next) => {
    const origin = req.headers.origin;
    
    // Allow both localhost and production frontend
    const allowedOrigins = ['http://localhost:3000', 'https://smashicse-edtech-platform-1.onrender.com'];
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    // Essential CORS headers
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token');
    res.header('Access-Control-Expose-Headers', 'Content-Length, X-CSRF-Token');
    res.header('Cache-Control', 'no-store, no-cache, must-revalidate');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.status(204).send();
        return;
    }
    next();
});

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

// Security Headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Connecting to cloudinary
cloudinaryConnect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', {
        message: err.message,
        origin: req.headers.origin,
        path: req.path,
        method: req.method
    });
    
    if (err.message.includes('CORS')) {
        return res.status(403).json({
            success: false,
            message: 'CORS error - Origin not allowed',
            error: err.message
        });
    }
    
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});

// End of code.