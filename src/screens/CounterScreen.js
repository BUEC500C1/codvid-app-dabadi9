import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setCounter(counter + 1)}
            >
                <Text>Click me</Text>
            </TouchableOpacity>
            <View>
                <Text>
                    You clicked {counter} times
          </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10
    }
});

export default CounterScreen;
