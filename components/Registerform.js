import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component } from 'react'

export default class Registerform extends Component {
    
    render() {
    return (
      <View style={styles.card}>
        <View style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.lable} >Adress</Text>
                <TextInput style={styles.input} placeholder="123 Street Rd"></TextInput>
            </View>
            <View style={styles.formControl}>
                <Text style={styles.lable}>State</Text>
                <TextInput style={styles.input} placeholder="Victoria"></TextInput>
            </View>
            <View style={styles.formControl}>
                <Text style={styles.lable} >Your phone number</Text>
                <TextInput style={styles.input} placeholder="0957659884"></TextInput>
            </View>
            <View>
                <Button title='Register' color="#1E90FF"></Button>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    card:{
        
        padding: 20,
        borderRadius: 10,
        // elevation: 5,
    },
    form:{},
    formControl:{
        width: "100%"
    },
    lable:{
        marginTop: 10,
        marginBottom: 10,
        alignItems: "flex-start"
    },
    input:{
        width: "100%",
        paddingLeft: 10,
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderColor: "#FF4500",
        borderWidth: 1,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 5
    },
});