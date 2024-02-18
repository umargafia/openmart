import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import Home from './src/screens/Home';

export type navigationProps = {
  ['welcome page']: undefined;
  ['home page']: { screen: 'search' | 'login' };
};

const stack = createNativeStackNavigator<navigationProps>();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
        initialRouteName="welcome page"
      >
        <stack.Screen name="welcome page" component={WelcomeScreen} />
        <stack.Screen name="home page" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
