import React from 'react';
import {FlatList} from '@gluestack-ui/themed';
import TodoCard from '../components/TodoCard';
import {Todo, TodoList as TypeTodoList} from '../types/todo';
import todoMockData from '../mockup/todo';

type Props = {
  todoList: TypeTodoList;
};

const TodoList = ({todoList}: Props) => {
  return (
    <FlatList
      h={'$full'}
      data={todoList}
      renderItem={({item}) => <TodoCard todo={item} />}
      keyExtractor={(todo: Todo) => todo.id}
    />
  );
};

export default TodoList;
