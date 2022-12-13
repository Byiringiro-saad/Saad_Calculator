import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

//routes
import mathRoutes from "./routes/math.routes.js";

const app = express();

//config
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/math", mathRoutes);

export default app;
