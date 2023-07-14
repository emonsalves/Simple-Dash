import dotenv from "dotenv";
import morganBody from "morgan-body";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";

const app = express();
dotenv.config();

// Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("dev"));
morganBody(app);

// Routes
app.use(express.static("public"));
app.use("/api/v1", router);

export default app;
