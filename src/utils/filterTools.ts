import { TodoList } from '../types/todo';

export const filterOnlyCompleted = (todoList: TodoList): TodoList => {
  return todoList.filter((todo) => todo.isCompleted);
};

export const filterOnlyIncompleted = (todoList: TodoList): TodoList => {
  return todoList.filter((todo) => !todo.isCompleted);
};

export const conditionTodoList = (todoList: TodoList, context: string): TodoList => {
  if (context === 'Completed') {
    return filterOnlyCompleted(todoList);
  } else if (context === 'Incompleted') {
    return filterOnlyIncompleted(todoList);
  }
  return todoList;
};
