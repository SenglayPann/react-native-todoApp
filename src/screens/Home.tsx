import React from 'react';
import {View} from '@gluestack-ui/themed';
import TodoList from './TodoList';
import {SharedTabRouteProp} from '../navigation/topTabsNavigation';
import {conditionTodoList} from '../utils/filterTools';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
const safeM = '$5';

const Home = ({route}: {route: SharedTabRouteProp}) => {
  const todoData = useSelector((state: RootState) => state.todoList);
  const context = route.name;
  const filteredTodoData = conditionTodoList(todoData, context);
  return (
    <View mx={safeM}>
      <TodoList todoList={filteredTodoData} context={context} />
    </View>
  );
};

export default Home;
