
import { StyleSheet, Text, View, Button,Pressable,Dimensions } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Starter({ navigation }) {
  const { height } = Dimensions.get('window');

  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LevelUp Fitness</Text>
      <View style={styles.button_container}>
      <Pressable onPress={() => {
        navigation.navigate("SignIn")
      }} style={styles.button}>
        <Text style={styles.button_text}>Sign In</Text>
      </Pressable>
      <Button onPress={() => { navigation.navigate("SignUp") }}title='Create new Account'/>
      </View>
    </View>
  );
}
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    paddingTop: height*0.1,
    paddingHorizontal: "5%"
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#03c2fc',
  },
  button_container: {
    marginTop: height*0.6
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#03c2fc'
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
