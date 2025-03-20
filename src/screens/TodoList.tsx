import React from 'react';
import {ScrollView} from '@gluestack-ui/themed';
import TodoCard from '../components/TodoCard';
const TodoList = () => {
  return (
    <ScrollView height={'$full'}>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </ScrollView>
  );
};

export default TodoList;
