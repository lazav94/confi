import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();

import logger from "./services/logger";
import connectDB from "./services/db";
import swaggerRoutes from "./swagger";
import routes from "./routes";

const port: number = parseInt(process.env.PORT || "8080", 10);

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

routes(app);

app.use("/", swaggerRoutes);

app.listen(port, (error: any) => {
  if (error) {
    process.exit(-1);
  }
  logger.info(`Server is running on port ${port}`);
});
