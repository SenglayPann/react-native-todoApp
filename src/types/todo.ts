export type Todo = {
  id?: string,
  title: string,
  description: string,
  dueDate: string,
  isCompleted: boolean;
}

export type TodoError = {
  title: string | null;
  description: string | null;
  dueDate: string | null
}

export type TodoList = Todo[]
