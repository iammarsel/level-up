import React from 'react'
import {StyleSheet, Text, View, Button, TextInput,Pressable,Dimensions, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../firebaseConfig';
//import firestore from "@react-native-firebase/firestore";

//const userDocument = firestore().collection('Users').doc('ABC').get();
export default function Survey({ navigation }) {
  const [age, onChangeAge] = React.useState(0);
  const [weight, onChangeWeight] = React.useState(0);
  const [height, onChangeHeight] = React.useState(0);
  const [path, onChangePath] = React.useState(0);
  return (
    
    <ScrollView automaticallyAdjustKeyboardInsets contentContainerStyle={styles.container}> 
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
      <Text style={styles.title}>Complete This Survey To Start Your Fitness Level-Up Journey</Text>
      <View style={styles.input_container}>
      <Text style={styles.help_text}>Enter Your height</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        placeholder="Enter your age"
        keyboardType='numeric'
        keyboardAppearance='dark'
        enablesReturnKeyAutomatically 
        textAlign='center'
        value={age}
      />
      <Text style={styles.help_text}>Enter Your height</Text>
      <View style={styles.input_container2}>
      <TextInput
        style={styles.input_small}
        onChangeText={onChangeHeight}
        placeholder="ft"
        keyboardType='numeric'
        keyboardAppearance='dark'
        enablesReturnKeyAutomatically 
        textAlign='center'
        value={height}
      />
      <TextInput
        style={styles.input_small}
        onChangeText={onChangeHeight}
        placeholder="in"
        keyboardType='numeric'
        keyboardAppearance='dark'
        value={height}
      />
      </View>
      <Text style={styles.help_text}>Enter Your weight</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeWeight}
        placeholder="enter your weight in lbs"
        keyboardType='numeric'
        keyboardAppearance='dark'
        value={weight}
      />
      <Pressable onPress={console.log("submitted")} style={styles.button}>
        <Text style={styles.button_text}>Submit</Text>
      </Pressable>
      </View>
      </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    paddingTop: height * 0.15, 
    paddingHorizontal: 30
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#03c2fc',
  },
  input_container: {
    marginTop: height * 0.05
  },
  input_container2: {
    marginVertical:10,
    flex:1,
    flexDirection: "row",
    paddingVertical: 30,
    width: "100%",
    height: "10%",
    alignItems: 'center'
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

  help_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    paddingLeft: 20
  },

  input:{
    backgroundColor: 'white',
    borderColor: '#494a4d',
    borderRadius: 5,
    height: 40,
    marginVertical: 20,
    marginHorizontal:20,
    borderWidth: 2,
    padding: 20,
  },
  input_small:{
    backgroundColor: 'white',
    borderColor: '#494a4d',
    borderRadius: 5,
    height: "100%",
    marginVertical: 0,
    marginHorizontal:20,
    borderWidth: 2,
    padding: 20,
  }
});
