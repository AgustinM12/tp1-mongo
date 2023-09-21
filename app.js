import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import "dotenv/config" 
import {createLogs} from "./helpers/logs.js"
import {connectDB} from "./config/db.js"

const app = express();
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(morgan("combined", {
    stream: {
      write: (message) => {
        const currentFilePath = new URL(import.meta.url).pathname;
        console.log(currentFilePath);
        const currentDirectory = path.dirname(currentFilePath);
        createLogs(message, currentDirectory, "logs");
      }
    }
  }));


app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`SERVER ON localhost:/${process.env.PORT}`);
});