import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable, Dimensions } from 'react-native';
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';


export default function SignIn({ navigation }) {
  const [email, onChangeUser] = React.useState("");
  const [password, onChangePass] = React.useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        console.log("Signed in with", user.email);
        navigation.replace("Home")
      })
      .catch(error => alert(error.message))
  }
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Sign In Here </Text>
      <View style={styles.button_container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          placeholder="Username/Email"
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePass}
          placeholder="Password"
          secureTextEntry
          value={password}
        />
        <Pressable onPress={handleSignIn} style={styles.button}>
          <Text style={styles.button_text}>Sign In</Text>
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
    paddingTop: height * 0.15,
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
    marginTop: 50
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
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#494a4d',
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  }
});
