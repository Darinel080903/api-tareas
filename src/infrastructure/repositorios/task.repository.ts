import { TaskEntity } from "../../domain/entities/task.entity";

export interface TaskRepository {
  createTask(task: TaskEntity): Promise<TaskEntity>;
  getTask(id: string): Promise<TaskEntity>;
  getTasks(): Promise<TaskEntity[]>;
  updateTask(task: TaskEntity): Promise<TaskEntity>;
  deleteTask(id: string): Promise<boolean>;
}
