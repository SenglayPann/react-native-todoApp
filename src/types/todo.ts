export type Todo = {
  id: string | number,
  title: string,
  description: string,
  dueDate: string,
  isCompleted: boolean;
}

export type TodoError = {
  title: string;
  description: string;
  dueDate: string
}

export type TodoList = Todo[]
