import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Platform } from 'react-native';

import { Link } from '@react-navigation/native';


export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <Text style={styles.text}>Your email</Text>
        <TextInput style={styles.input} placeholder="Email"/>
        <Text style={styles.text}>Your password</Text>
        <TextInput style={styles.input} placeholder="********" secureTextEntry={true}/>
        <View style={styles.buttonContainer}>
          <Button style={styles.button}title="Sign in" onPress={() => {
                            navigation.navigate('SignUp');
            }}/>
        </View>
        <Link to={{ screen: 'SignUp', params: {} }} style={{textDecorationLine: 'underline',}}>
          Forgot your password?
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: '#FFB6C1'
      },
      android: {
        backgroundColor: '#E6E6FA'
      },
      default: {
        backgroundColor: '#FFCC99'
      }
    })
  },

  text: {
    fontSize: 14,
    opacity: 0.5,
    alignSelf: 'flex-start',
    marginBottom: '5%',
  },

  input: {
    fontSize: 18,
    width: '100%',
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#FF4500',
  },

  button: {
  },

  buttonContainer: {
    width: 120,
    height: 40,
    marginBottom: "10%"
  }

});
