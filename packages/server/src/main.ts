import cors from "cors";
import express from "express";
import crypto from "crypto";
import type { HelloResponse } from "contract";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

function generateRandomString(length: number) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}

app.get("/api/hello", (_req, res) => {
  const jsonRes: HelloResponse = {
    message: "World " + generateRandomString(10),
  };
  res.status(200).json(jsonRes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
