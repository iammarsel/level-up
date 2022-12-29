import { NavigationContainer } from '@react-navigation/native';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Starter from './components/Starter';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator> 
      <Stack.Screen
        name = "Menu"
        component={Starter}
        options={{
          headerShown:false,
          gestureEnabled:false
        }}
      />

      <Stack.Screen
        name = "Home"
        component={Home}
        options={{
          headerShown:false,
          gestureEnabled:false
        }}
      />

      <Stack.Screen
        name = "SignIn"
        component={SignIn}
        options={{
          title: 'Sign In',
          headerStyle: {
            backgroundColor: '#03c2fc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          gestureEnabled:false
        }}
      />
      <Stack.Screen
        name = "SignUp"
        component={SignUp}
        options={{
          title: 'New Account Creation',
          headerStyle: {
            backgroundColor: '#03c2fc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          gestureEnabled:false
        }}
      />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
