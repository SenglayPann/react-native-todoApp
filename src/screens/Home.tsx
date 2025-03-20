import React from 'react';
import {View} from '@gluestack-ui/themed';
import TodoList from './TodoList';
import todoMockData from '../mockup/todo';
import {SharedTabRouteProp} from '../navigation/topTabsNavigation';
import {conditionTodoList} from '../utils/filterTools';
const safeM = '$5';

const Home = ({route}: {route: SharedTabRouteProp}) => {
  const context = route.name;
  const todoData = conditionTodoList(todoMockData, context);
  return (
    <View mx={safeM}>
      <TodoList todoList={todoData} />
    </View>
  );
};

export default Home;
