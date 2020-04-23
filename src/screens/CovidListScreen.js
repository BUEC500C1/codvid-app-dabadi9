import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import covidApi from '../api/covid';
import { NavigationEvents } from 'react-navigation';

const CovidListScreen = () => {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const getData = async () => {
        try {
            const response = await covidApi.get('/summary');
            setData(response.data);
            setErrorMessage('');
        }
        catch {
            setErrorMessage('Error retriving data. Please close app and try again!')
        }

    }

    if (errorMessage != '') {
        return (
            <>
                <Text style={styles.error}>{errorMessage}</Text>
            </>
        );
    }


    if (!data) {
        return (
            <>
                <NavigationEvents onWillFocus={getData} />
                <ActivityIndicator size="large" style={{ marginTop: 200 }} />
            </>
        );
    }


    return (
        <>
            <Text style={styles.title}>Covid-19 Data</Text>
            <View style={{ ...styles.itemContainer, marginHorizontal: 5 }}>
                <Text style={styles.itemTitle}>Global</Text>
                <Text style={styles.confirmed}>Total Confirmed: {data.Global.TotalConfirmed}</Text>
                <Text style={styles.deaths}>Total Deaths: {data.Global.TotalDeaths}</Text>
                <Text style={styles.recovered}>Total Confirmed: {data.Global.TotalRecovered}</Text>
            </View>
            <FlatList
                style={{ marginHorizontal: 5 }}
                data={data.Countries}
                keyExtractor={(country) => country.CountryCode}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemTitle}>{item.Country}</Text>
                            <Text style={styles.confirmed}>Total Confirmed: {item.TotalConfirmed}</Text>
                            <Text style={styles.deaths}>Total Deaths: {item.TotalDeaths}</Text>
                            <Text style={styles.recovered}>Total Confirmed: {item.TotalRecovered}</Text>
                        </View>
                    );
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    error: {
        fontSize: 20,
        color: 'red',
        margin: 5
    },
    title: {
        fontSize: 25,
        margin: 10,
        textAlign: 'center'
    },
    itemTitle: {
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
        color: 'black'
    },
    itemContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 5,
        backgroundColor: 'white'
    },
    confirmed: {
        marginLeft: 5,
        color: 'darkorange'
    },
    deaths: {
        marginLeft: 5,
        color: 'red'
    },
    recovered: {
        marginLeft: 5,
        color: 'green',
        marginBottom: 5
    }
});

export default CovidListScreen;