import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                longitude: -71.106637,
                latitude: 42.349285,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Marker
                title="Photonics"
                coordinate={{
                    longitude: -71.106637,
                    latitude: 42.349285,
                }}
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default MapScreen;