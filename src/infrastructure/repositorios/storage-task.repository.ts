import { TaskInterface } from '../../domain/entities/task.interface';
import {TaskEntity} from '../../domain/entities/task.entity';
import {TaskRepository} from './task.repository';

export class StorageTaskRepository implements TaskRepository {
  createTask(task: TaskEntity): Promise<TaskEntity> {
    const taskEntity = new TaskEntity(task.id, task.title, task.description, task.isDone);

    return Promise.resolve(taskEntity);
  }
  getTask(id: string): Promise<TaskEntity> {
    const taskEntity = new TaskEntity(id, 'title', 'description', false);

    return Promise.resolve(taskEntity);
  }
  getTasks(): Promise<TaskEntity[]> {
    const taskEntity = new TaskEntity('id', 'title', 'description', false);

    return Promise.resolve([taskEntity]);
  }
  updateTask(task: TaskEntity): Promise<TaskEntity> {
    const taskEntity = new TaskEntity(task.id, task.title, task.description, task.isDone);

    return Promise.resolve(taskEntity);
  }
  deleteTask(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
  
}