import "dotenv/config";

import morganBody from "morgan-body";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
morganBody(app);

// Routes
app.use(express.static("public"));
app.use("/api", router);

export default app;
