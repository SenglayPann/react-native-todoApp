import moment from 'moment';

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
}

export class Todo {
  private isCompleted: boolean = false;
  private title: string;
  private description: string;
  private dueDate: string;

  constructor(title: string, description: string, dueDate: string) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  private validateLength(name: string, str: string, min: number = 0, max: number = 100): errValue {
    if (str.length === min) {
      return name + ' cannot be empty';
    } else if (str.length > max) {
      return name + ' cannot be longer than ' + max;
    }
    else {
      return null;
    }
  }

  private validateDueDate(strDate: string) {
    if (!moment(strDate).isValid()) {
      return 'Invalid date and time';
    }
    else {
      return null;
    }
  }

  public validate() {
    const todoError = new TodoError();
    todoError.description = this.validateLength('Description', this.description);
    todoError.title = this.validateLength('Title', this.title, 0, 50);
    todoError.dueDate = this.validateDueDate(this.dueDate);
    return todoError;
  }
}

export default Todo;
