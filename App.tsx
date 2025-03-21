import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import Routes from './src/navigation/Routes';
import {LogBox} from 'react-native';

import {Provider} from 'react-redux';
import store, {rootPersistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs([
  'Warning: Invalid prop `fill` supplied to `React.Fragment`.',
]);

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <PersistGate loading={null} persistor={rootPersistor}>
        <Provider store={store}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </Provider>
      </PersistGate>
    </GluestackUIProvider>
  );
};

export default App;
