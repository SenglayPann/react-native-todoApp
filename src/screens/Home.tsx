import React from 'react';
import {FlatList, ScrollView} from '@gluestack-ui/themed';
import TodoCard from '../components/TodoCard';

const safeM = '$5';

const Home = () => {
  return (
    <ScrollView m={safeM}>
      <TodoCard />
    </ScrollView>
  );
};

export default Home;
