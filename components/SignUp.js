import * as React from 'react';
import {StyleSheet, Text, View, Button, TextInput,Pressable,Dimensions } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth,db } from '../firebaseConfig';
//import { addDoc, collection } from 'firebase/firestore';
//import { firebase } from '@react-native-firebase/firestore';
//import { app } from '@react-native-firebase/app'
//import firestore from '@react-native-firebase/firestore'

export default function SignUp({ navigation }) {
  const [user, onChangeUser] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePass] = React.useState("");
 //firebase.firestore().collection('users')
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(userCredential => {
      //db.collection("users").doc
      //addDoc(collection(db,"users",email),{
      //  "username": user
      //})
      console.log('...')
    }).then(() => {
      console.log("Signed up with",user);
      navigation.navigate("Home")
    }).catch(error => alert(error.message));
    
  }
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>New Account</Text>
      <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUser}
        placeholder="Enter your name"
        value={user}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="Enter your Email"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        placeholder="Enter a Password"
        secureTextEntry
        value={password}
      />
      <Pressable onPress={handleSignUp} style={styles.button}>
        <Text style={styles.button_text}>Next</Text>
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
    paddingTop: 100,
    paddingHorizontal: 40
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#03c2fc',
  },
  input_container: {
    marginTop: 100
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
  input:{
    backgroundColor: 'white',
    borderColor: '#494a4d',
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  }
});
