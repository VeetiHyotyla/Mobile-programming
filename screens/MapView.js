import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getGeocodeLocation } from '../api/GeocodeAPI';

const MapViewScreen = ({ route }) => {
  const { locationName } = route.params;
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getGeocodeLocation(locationName);
        if (location) {
          setRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          });
        } else {
          console.log('Location not found');
        }
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    fetchLocation();
  }, [locationName]);

  if (!region) {
    return (
      <View>
        <Text>Loading map...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} title={locationName} />
    </MapView>
  );
};

export default MapView;
