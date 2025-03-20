export type Todo = {
  id: string | number,
  title: string,
  description: string,
  dueDate: string | Date,
  isCompleted: boolean;
}

export type TodoList = Todo[]
