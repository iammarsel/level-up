import { NavigationContainer } from '@react-navigation/native';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Starter from './components/Starter';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}> 
      <Stack.Screen
        name = "Starter"
        component={Starter}
      />
      <Stack.Screen
        name = "SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name = "SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
