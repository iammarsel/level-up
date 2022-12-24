import React from 'react'
import {StyleSheet, Text, View, Button, TextInput,Pressable,Dimensions } from 'react-native';

export default function SignUp({ navigation }) {
  const [text, onChangeText] = React.useState("");
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>New Account</Text>
      <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="enter your name"
        value={text}
      />
      <Pressable onPress={() => {
        navigation.navigate("SignIn")
      }} style={styles.button}>
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
