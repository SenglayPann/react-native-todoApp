import React from 'react';
import {Box, FlatList, ScrollView, View} from '@gluestack-ui/themed';
import TodoCard from '../components/TodoCard';
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
