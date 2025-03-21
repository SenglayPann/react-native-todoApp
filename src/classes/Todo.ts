import moment from 'moment';
import shortid from 'shortid';

export type errValue = string | null;

export class TodoError {
  title: errValue;
  description: errValue;
  dueDate: errValue;

  constructor(title?: errValue, description?: errValue, dueDate?: errValue) {
    this.title = title ?? null;
    this.description = description ?? null;
    this.dueDate = dueDate ?? null;
  }

  public checkErrors() {
    return !!this.title || !!this.description || !!this.dueDate;
  }
}

export class Todo {
  private id: string;
  private isCompleted: boolean = false;
  private title: string;
  private description: string;
  private dueDate: string;

  constructor(title: string, description: string, dueDate: string) {
    this.id = shortid.generate();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  public setTodoId(id: string) {
    this.id = id;
  }

  private validateLength(name: string, str: string, min: number = 2, max: number = 100): errValue {
    if (str.length === 0) {
      return name + ' cannot be empty';
    } else if (str.length < min) {
      return name + ' must be at least ' + min + ' characters';
    } else if (str.length > max) {
      return name + ' cannot be exceed ' + max + ' characters';
    }
    else {
      return null;
    }
  }

  private validateDueDate(strDate: string): errValue {
    if (!moment(strDate).isValid()) {
      return 'Invalid date and time';
    }
    else {
      return null;
    }
  }

  public validate(): TodoError {
    const todoError = new TodoError();
    todoError.description = this.validateLength('Description', this.description, 2, 100);
    todoError.title = this.validateLength('Title', this.title, 2, 50);
    todoError.dueDate = this.validateDueDate(this.dueDate);
    return todoError;
  }
}

export default Todo;
