import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import covidApi from '../api/covid';
import { NavigationEvents } from 'react-navigation';
import Geocoder from 'react-native-geocoding';


const CovidMapScreen = () => {

    useEffect(() => {
        Geocoder.init("AIzaSyBz-G5iN0xOzfxSdBbJHXpWRXlnr8a8hK0", { language: "en" })
    }, [])

    const [markers, setMarkers] = useState([]);
    // const [countries, setCountries] = useState(null);
    // let before_data = [];
    // const [data, setData] = useState(null);
    // const [errorMessage, setErrorMessage] = useState('');


    // const getContries = async () => {
    //     try {
    //         const response = await covidApi.get('/countries');
    //         countries = response.data;
    //         // var bar = new Promise((resolve, reject) => {
    //         //     countries.forEach(async (country, index, array) => {
    //         //         getData(country.Slug);
    //         //         if(index === array.length - 1){
    //         //             resolve();
    //         //         }
    //         //     });
    //         // });
    //         // bar.then(() => {
    //         //     setData(before_data);
    //         // })

    //         var bar = new Promise((resolve, reject) => {
    //             for (let i = 0; i < countries.length; i++) {
    //                 getData(countries[i].Slug);
    //                 if (before_data.length === 183) {
    //                     console.log("Entered");
    //                     resolve();
    //                 }
    //             }
    //         });
    //         bar.then(() => {
    //             setData(before_data);
    //         })
    //         // setData(before_data);
    //     }
    //     catch {

    //     }
    // }

    // const getData = async (slug) => {
    //     const response = await covidApi.get(`/total/country/${slug}`);
    //     console.log(slug);
    //     if (response.data.length > 0) {
    //         // setData([...data, response.data[response.data.length - 1]])
    //         before_data.push(response.data[response.data.length - 1]);
    //     }
    // }

    // if (errorMessage != '') {
    //     return (
    //         <>
    //             <Text style={styles.error}>{errorMessage}</Text>
    //         </>
    //     );
    // }


    // if (!countries) {
    //     return (
    //         <>
    //             <NavigationEvents onWillFocus={getContries} />
    //             <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    //         </>
    //     );
    // }

    // console.log(data.length);
    // if (data.length == 0) {
    //     return (
    //         <>

    //             <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    //         </>
    //     );
    // }
    const prepare_Name = (country) => {
        return country.toLowerCase().replace(' ', '-');
    };

    const getData = async (country, coordinate) => {
        const response = await covidApi.get(`/total/country/${country}`);
        // console.log(response.data[response.data.length - 1]);
        let data = response.data[response.data.length - 1];
        data.Lat = coordinate.latitude;
        data.Lon = coordinate.longitude;
        data.key = markers.length;
        setMarkers([...markers, data]);
    }

    const getCountry = (coordinate) => {
        // console.log(coordinate);
        Geocoder.from(coordinate).then(json => {
            let country = json.results[0].address_components[json.results[0].address_components.length - 1].long_name;
            if (json.results[0].address_components[json.results[0].address_components.length - 1].types.includes("postal_code")) {
                country = json.results[0].address_components[json.results[0].address_components.length - 2].long_name;
            }
            else if (json.results[0].address_components[json.results[0].address_components.length - 1].types.includes("postal_code_suffix")) {
                country = json.results[0].address_components[json.results[0].address_components.length - 3].long_name;
            }
            getData(prepare_Name(country), coordinate);

        }).catch(() => { });
    };

    return (
        <MapView
            style={styles.map}
            onPress={(e) => getCountry(e.nativeEvent.coordinate)}
        >
            {markers.map(marker => (
                <Marker
                    key={marker.key.toString()}
                    coordinate={{
                        longitude: marker.Lon,
                        latitude: marker.Lat,
                    }}
                    title={marker.Country}
                    description={`Confirmed: ${marker.Confirmed} Deaths: ${marker.Deaths} Recovered: ${marker.Recovered}`}
                />
            ))}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default CovidMapScreen;
