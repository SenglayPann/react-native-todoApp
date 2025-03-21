import React, {Fragment} from 'react';
import {FlatList, View, Text} from '@gluestack-ui/themed';
import TodoCard from '../components/TodoCard';
import {Todo, TodoList as TypeTodoList} from '../types/todo';

type Props = {
  todoList: TypeTodoList;
  context: string;
};

const TodoList = ({todoList, context}: Props) => {
  return (
    <Fragment>
      {!!todoList.length ? (
        <FlatList
          h={'$full'}
          data={todoList}
          renderItem={({item}) => <TodoCard todo={item} />}
          keyExtractor={(todo: Todo) => todo.id}
        />
      ) : (
        <View h={'$full'} alignItems="center" justifyContent="center">
          <Text>
            {`There is no ${context === 'All' ? '' : context} todo yet.`}
          </Text>
        </View>
      )}
    </Fragment>
  );
};

export default TodoList;
