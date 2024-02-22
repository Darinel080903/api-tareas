import { TaskController } from "../controllers/task.controller";
import { TaskUseCase } from "../../application/usecases/task-usecases";
import { StorageTaskRepository } from "../repositorios/storage-task.repository";

const mySqlTaskRepository = new StorageTaskRepository();

const createTaskUseCase = new TaskUseCase(mySqlTaskRepository);
export const taskController = new TaskController(createTaskUseCase);