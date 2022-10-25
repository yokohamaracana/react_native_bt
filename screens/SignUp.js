import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function SignUp() {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.card}>
                <Text style={styles.text} >Adress</Text>
                <TextInput style={styles.input} placeholder="123 Street Rd"></TextInput>
                <Text style={styles.text}>State</Text>
                <TextInput style={styles.input} placeholder="Victoria"></TextInput>
                <Text style={styles.text} >Your phone number</Text>
                <TextInput style={styles.input} placeholder="0957659884"></TextInput>
                <View style={styles.btn}>
                    <Button title='Register' color="#1E90FF"></Button>
                </View>
            </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    input:{
        width: "100%",
        fontSize: 18,
        paddingLeft: 10,
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderColor: "#FF4500",
        borderWidth: 1,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 5
    },
    btn: {
        width: 150,
        textAlign: 'center'
    }
})
