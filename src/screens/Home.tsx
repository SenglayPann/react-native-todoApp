import React from 'react';
import {View} from '@gluestack-ui/themed';
import TodoList from './TodoList';
const safeM = '$5';

const Home = () => {
  return (
    <View mx={safeM}>
      <TodoList />
    </View>
  );
};

export default Home;
