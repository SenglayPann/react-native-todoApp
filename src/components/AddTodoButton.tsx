import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from './Icon';
import {Box, useToken} from '@gluestack-ui/themed';

const AddTodoButton = () => {
  const blue500 = useToken('colors', 'blue500');
  return (
    <Box position="absolute" bottom={40} right={15} padding={10}>
      <TouchableOpacity activeOpacity={0.6}>
        <Icon width={48} height={48} name="Add" fill={blue500} />
      </TouchableOpacity>
    </Box>
  );
};

export default AddTodoButton;
