import React, {Fragment, useState} from 'react';
import {
  Card,
  Heading,
  HStack,
  Text,
  useToken,
  VStack,
} from '@gluestack-ui/themed';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AnDesignIcon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {Todo} from '../types/todo';
import CustomeModal from './CustomeModal';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store/store';
import {toggleCompletion} from '../redux/slices/todoSlices';

interface Props {
  todo: Todo;
}

const TodoCard = ({todo}: Props) => {
  const gray500 = useToken('colors', 'coolGray500');
  const green500 = useToken('colors', 'green500');
  const red500 = useToken('colors', 'red500');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleOpenConfirmModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleToggleCompletion = () => {
    dispatch(toggleCompletion(todo.id));
  };

  return (
    <Fragment>
      <Card my={'$1'}>
        <HStack>
          <VStack gap={20}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={handleToggleCompletion}>
              <AnDesignIcon
                name="checkcircle"
                color={todo.isCompleted ? green500 : gray500}
                size={20}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={handleOpenConfirmModal}>
              <FontAwesomeIcon
                name="trash"
                fill={red500}
                size={20}
                color={red500}
              />
            </TouchableOpacity>
          </VStack>

          <VStack flex={1} ml={'$4'}>
            <HStack alignItems="center">
              <Heading
                flex={1}
                fontSize="$lg"
                w={'$full'}
                fontWeight={'$semibold'}
                color="$coolGray700"
                numberOfLines={1}>
                {todo.title}
              </Heading>
              <Text fontSize={'$sm'}>{todo.dueDate}</Text>
            </HStack>
            <Text
              w={'$full'}
              fontSize={'$sm'}
              mt={'$2'}
              lineHeight={'$md'}
              numberOfLines={3}>
              {todo.description}
            </Text>
          </VStack>
        </HStack>
      </Card>
      <CustomeModal isOpen={isOpen} setIsOpen={setIsOpen} todo={todo} />
    </Fragment>
  );
};

export default TodoCard;
