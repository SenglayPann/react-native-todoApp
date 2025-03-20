import React from 'react';
import {
  Card,
  Heading,
  HStack,
  Text,
  useToken,
  VStack,
} from '@gluestack-ui/themed';
import Icon from './Icon';
import {TouchableOpacity} from 'react-native';
import {Todo} from '../types/todo';

interface Props {
  todo: Todo;
}

const TodoCard = ({todo}: Props) => {
  const gray500 = useToken('colors', 'coolGray500');
  const green500 = useToken('colors', 'green500');
  return (
    <Card my={'$1'}>
      <HStack>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name="Tick" fill={todo.isCompleted ? green500 : gray500} />
        </TouchableOpacity>
        <VStack flex={1} ml={'$4'}>
          <HStack alignItems="center">
            <Heading
              flex={1}
              fontSize="$lg"
              w={'$full'}
              fontWeight={'$semibold'}
              color="$coolGray700">
              {todo.title}
            </Heading>
            <Text fontSize={'$sm'}>{todo.dueDate}</Text>
          </HStack>
          <Text w={'$full'} fontSize={'$sm'} mt={'$2'} lineHeight={'$md'}>
            {todo.description}
          </Text>
        </VStack>
      </HStack>
    </Card>
  );
};

export default TodoCard;
