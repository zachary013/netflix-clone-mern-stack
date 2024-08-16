import express from 'express';

import authRoutes from './routes/auth.route.js';

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';

const app = express();

const PORT = ENV_VARS.PORT

app.use(express.json());  // to use req.body in auth.controller.js signup

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
    connectDB();
});