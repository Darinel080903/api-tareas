import express from "express";
import { router as taskRouter } from "./infrastructure/routes/task.routes";

const app = express();

app.use(express.json());

app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


