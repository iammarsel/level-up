
import { StyleSheet, Text, View, Button,Pressable,Dimensions } from 'react-native';
import { auth } from '../firebaseConfig';

export default function Home({ navigation }) {
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Menu")
    })
    .catch(error => alert(error.message))
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {auth.currentUser?.email}</Text>

      <Pressable onPress={() => {
        navigation.replace("Survey")
      }} style={styles.button}>
        <Text style={styles.button_text}>Start Your Survey</Text>
      </Pressable>
      <View style={styles.button_container}>

      <Pressable onPress={handleSignOut} style={styles.button}>
        <Text style={styles.button_text}>Sign Out</Text>
      </Pressable>
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
    paddingHorizontal: 40
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
