import { TaskUseCase } from "../../application/usecases/task-usecases";
import { Request, Response } from "express";
import { TaskEntity } from "../../domain/entities/task.entity";

export class TaskController {
  constructor(private readonly taskUseCases: TaskUseCase) {}

  async createTask(request: Request, response: Response) {
    try {
      const requestTask = new TaskEntity(request.body.id, request.body.title, request.body.description, false);

      const task = await this.taskUseCases.create(requestTask);
      
      this._toResponse(response, 201, task, "Tarea creada exitosamente", true);
    } catch (error) {
      this._toResponse(response, 500, null, "Error", false);
    }
  }

  async updateTask(request: Request, response: Response) {
    try {
      const requestTask = new TaskEntity(request.body.id, request.body.title, request.body.description, request.body.isDone);

      const task = await this.taskUseCases.update(requestTask);
      this._toResponse(response, 200, task, "Tarea actualizada", true);
    } catch (error) {
      this._toResponse(response, 500, null, "Error", false);
    }
  }
  
  async getTask(request: Request, response: Response) {
    try {
      this._toResponse(response, 200, request.body, "Tarea encontrada", true);
    } catch (error) {
      this._toResponse(response, 500, null, "Error", false);
    }
  }

  async deleteTask(request: Request, response: Response) {
    try {

      // LLAMAR AL METODO DELETE DEL USECASE

      this._toResponse(response, 200, null, "Tarea eliminada", true);
    } catch (error) {
      this._toResponse(response, 500, null, "Error", false);
    }
  }

  _toResponse(res: Response, code: number, data: TaskEntity | null, message: string, ok: boolean) {
    res.status(code).json({
      ok,
      data,
      message
    });
  }
}