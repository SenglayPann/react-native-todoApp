import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import Routes from './src/navigation/Routes';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Warning: Invalid prop `fill` supplied to `React.Fragment`.',
]);

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
