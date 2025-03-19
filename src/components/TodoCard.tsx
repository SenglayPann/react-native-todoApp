import React from 'react';
import {Card, HStack} from '@gluestack-ui/themed';
import Icon from './Icon';

const TodoCard = () => {
  return (
    <Card>
      <HStack>
        <Icon name="Tick" fill="green" />
      </HStack>
    </Card>
  );
};

export default TodoCard;
