import connection from "./database/sql_connection.js";
import express from "express";
import authRoutes from "./routes/auth.js"

const app = express();

//ROUTES
app.use("/auth",authRoutes);

