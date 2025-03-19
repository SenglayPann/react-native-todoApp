import {config} from '@gluestack-ui/config';
import {View, Text, GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <View alignItems="center" justifyContent="center" h={'$full'}>
        <Text>Hello world!!</Text>
      </View>
    </GluestackUIProvider>
  );
};

export default App;
