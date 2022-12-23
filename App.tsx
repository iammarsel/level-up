import { NavigationContainer } from '@react-navigation/native';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Starter from './components/Starter';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator> 
      <Stack.Screen
        name = "Menu"
        component={Starter}
        options={{
          headerShown:false
         
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
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
