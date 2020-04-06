import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, onSubmit }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        borderRadius: 2,
        height: 40,
        backgroundColor: 'royalblue',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',

    }
});

export default Button;