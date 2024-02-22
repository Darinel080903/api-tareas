import express from "express";
import { taskController } from "../dependencias/dependencies";

export const router = express.Router();

router.post("/", taskController.createTask.bind(taskController));
router.get("/", taskController.getTask.bind(taskController));
router.put("/", taskController.updateTask.bind(taskController));
router.delete("/", taskController.deleteTask.bind(taskController));
