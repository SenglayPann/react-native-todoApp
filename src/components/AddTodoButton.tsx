import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from './Icon';
import {Box, useToken} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationListProps} from '../navigation/stackNavigation';

const AddTodoButton = () => {
  const navigation = useNavigation<RootStackNavigationListProps>();

  const handleGoToAddTodo = () => {
    navigation.navigate('AddTodo');
  };

  const blue500 = useToken('colors', 'blue500');
  return (
    <Box
      position="absolute"
      bottom={40}
      right={15}
      padding={10}
      shadowOpacity={0.8}
      shadowColor={'$coolGray900'}
      shadowOffset={{width: 0, height: 2}}
      shadowRadius={3}>
      <TouchableOpacity activeOpacity={0.6} onPress={handleGoToAddTodo}>
        <Icon dimension={50} name="Add" fill={blue500} />
      </TouchableOpacity>
    </Box>
  );
};

export default AddTodoButton;
