import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
    return (
        <Spacer>
            <Text style={styles.title}>Covid 19 Report App</Text>
            <Button text="React Native Tutorial" onSubmit={() => navigation.navigate('ReactNative')} />
            <Button text="Map" onSubmit={() => navigation.navigate('Map')} />
            <Button text="List view of Covid 19" onSubmit={() => navigation.navigate('CovidList')} />
            <Button text="Map view of Covid 19" onSubmit={() => navigation.navigate('CovidMap')} />
        </Spacer>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center'
    }
});

export default HomeScreen;