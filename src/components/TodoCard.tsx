import React from 'react';
import {Card, Heading, HStack, Text, VStack} from '@gluestack-ui/themed';
import Icon from './Icon';
import {TouchableOpacity} from 'react-native';

const TodoCard = () => {
  return (
    <Card>
      <HStack>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name="Tick" fill="gray" />
        </TouchableOpacity>
        <VStack flex={1} ml={'$4'}>
          <HStack alignItems="center">
            <Heading
              flex={1}
              fontSize="$lg"
              w={'$full'}
              fontWeight={'$semibold'}
              color="$coolGray700">
              Title
            </Heading>
            <Text fontSize={'$sm'}>27-03</Text>
          </HStack>
          <Text w={'$full'} fontSize={'$sm'} mt={'$2'} lineHeight={'$md'}>
            description description description description description
            description
          </Text>
        </VStack>
      </HStack>
    </Card>
  );
};

export default TodoCard;
