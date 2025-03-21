import React from 'react';
import {Button, HStack} from '@gluestack-ui/themed';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Text,
} from '@gluestack-ui/themed';
import {Todo} from '../types/Todo';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store/store';
import {deleteTodo} from '../redux/slices/todoSlices';

type Props = {
  isOpen: boolean;
  setIsOpen: Function;
  todo: Todo;
};

const CustomeModal = ({isOpen, setIsOpen, todo}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    setIsOpen(false);
    dispatch(deleteTodo(todo.id));
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text size="lg" bold>
              Warning
            </Text>
            <ModalCloseButton onPress={() => setIsOpen(false)} />
          </ModalHeader>

          <ModalBody>
            <Text>
              Are you sure want to delete "
              <Text fontWeight={'$semibold'} color={'$black'}>
                {todo.title}
              </Text>
              "
            </Text>
          </ModalBody>

          <ModalFooter>
            <HStack justifyContent={'space-around'} w={'$full'}>
              <Button onPress={() => setIsOpen(false)} bgColor={'$error500'}>
                <Text color={'$white'}>Cancel</Text>
              </Button>
              <Button onPress={handleDelete} bgColor={'$blue500'}>
                <Text color={'$white'}>Proceed</Text>
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomeModal;
