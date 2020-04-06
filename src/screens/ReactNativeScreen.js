import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import Button from '../components/Button';

const ReactNativeScreen = ({ navigation }) => {
    return (
        <Spacer>
            <Text style={styles.title}>React Native Tutorial</Text>
            <Button text="Hello World" onSubmit={() => navigation.navigate('HelloWorld')} />
            <Button text="Greetings (props)" onSubmit={() => navigation.navigate('Greetings')} />
            <Button text="Counter (state)" onSubmit={() => navigation.navigate('Counter')} />
        </Spacer>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center'
    }
});

export default ReactNativeScreen;