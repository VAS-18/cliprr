import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import videoRouter from "./routes/video.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/video", videoRouter);

app.get("/", async (req, res) => {
  try {
    res.json({
      message: "hello",
    });
  } catch {
    console.error(err.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
