import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getStudios } from "./routes/maps.route";
import { getNearestPlaces } from './services/maps.service'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/studios", getStudios(getNearestPlaces));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});