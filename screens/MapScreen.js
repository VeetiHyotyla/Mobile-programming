import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fetchCoordinates } from '../api/GeocodeAPI';

const MapScreen = ({ route }) => {
  const { locationName } = route.params;
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const getCoordinates = async () => {
      const location = await fetchCoordinates(locationName);
      if (location) {
        setCoordinates(location);
      }
    };

    getCoordinates();
  }, [locationName]);

  return (
    <View style={{ flex: 1 }}>
      {coordinates ? (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: coordinates.lat,
            longitude: coordinates.lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker coordinate={coordinates} title={locationName} />
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};

export default MapScreen;
