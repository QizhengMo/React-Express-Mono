import cors from "cors";
import express from "express";
import type { HelloResponse } from "contract";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get<void, HelloResponse>("/api/hello", (_req, res) => {
  const randomNum = Math.random() * 200;
  setTimeout(() => {
    res.status(200).json({
      message: `World from the server in ${randomNum.toFixed(2)} ms`,
    });
  }, randomNum);
});

app.use(express.static(__dirname + "/frontDist"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
