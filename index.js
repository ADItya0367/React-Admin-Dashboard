// importing the required modules or we can say packages 

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import clientRoutes from "./routes/clientRoutes.js";
import salesRoutes from "./routes/clientRoutes.js";
import generalRoutes from "./routes/clientRoutes.js";
import managementRoutes from "./routes/clientRoutes.js";
// configuration of the dotenv package
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// setting routes 
app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/sales",salesRoutes);
app.use("/management",managementRoutes);

