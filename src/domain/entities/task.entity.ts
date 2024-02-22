import { TaskInterface } from "./task.interface";

export class TaskEntity implements TaskInterface {
  _id: string;
  _title: string;
  _description: string;
  _isDone: boolean;

  constructor(id: string, title: string, description: string, isDone: boolean) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._isDone = isDone;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set id(id: string) {
    this._id = id;
  }

  set title(title: string) {
    this._title = title;
  }

  set description(description: string) {
    this._description = description;
  }

  set isDone(isDone: boolean) {
    this._isDone = isDone;
  }
}