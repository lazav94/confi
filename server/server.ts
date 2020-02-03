import express, { Application } from "express";
import dotenv from "dotenv";
import cookieSession from "cookie-session";
dotenv.config({});

import logger from "./services/logger";
import connectDB from "./services/db";
import swaggerRoutes from "./swagger";
import routes from "./routes";

const port: number = parseInt(process.env.PORT || "8080", 10);

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["mnm_confi:159"],
    // Cookie Options
    maxAge: 60 * 60 * 1000 // 1 hour
  })
);

connectDB();

routes(app);
app.use("/", swaggerRoutes);

app.listen(port, (error: any) => {
  if (error) {
    logger.error("FATAL ERROR:", error);
    process.exit(-1);
  }
  logger.info(`Server is running on port ${port}`);
});
