import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function SignUp() {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.container}>
                <Text style={styles.text}>Adress</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                />
                <Text style={styles.text}>State</Text>
                <TextInput
                    style={styles.input}
                    placeholder="State"
                />
                <Text style={styles.text} >Your Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0957659884"
                    keyboardType="numeric"
                />

                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        title="Register" />
                </View>
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
    },

    text: {
        fontSize: 12,
        opacity: 0.5,
        alignSelf: 'flex-start',
        marginBottom: 10,
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
        height: 40
    }

});
