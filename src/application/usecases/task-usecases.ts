import { TaskEntity } from "../../domain/entities/task.entity";
import { TaskRepository } from "../../infrastructure/repositorios/task.repository";
import {v4 as uuidv4} from 'uuid';

export class TaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(request: TaskEntity) : Promise<TaskEntity> {
    const id = uuidv4();

    const task = new TaskEntity(id, request.title, request.description, false);

    const entity = await this.taskRepository.createTask(task);

    return entity;
  }

  async update(request: TaskEntity) : Promise<TaskEntity> {
    const task = new TaskEntity(request.id || uuidv4(), request.title, request.description, request.isDone || false);

    const entity = await this.taskRepository.createTask(task);

    return entity;
  }

  async delete(id: string) {
    await this.taskRepository.deleteTask(id);
  }
}