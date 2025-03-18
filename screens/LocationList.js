import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocationList = ({ locations }) => {
  const navigation = useNavigation();

  const handleLocationPress = (locationName) => {
    navigation.navigate('MapViewScreen', { locationName });
  };

  return (
    <View>
      {locations.map((location, index) => (
        <TouchableOpacity key={index} onPress={() => handleLocationPress(location.name)}>
          <View style={{ padding: 10, marginBottom: 10, backgroundColor: '#ececec' }}>
            <Text>{location.name}</Text>
            <Text>{location.description}</Text>
            <Text>Rating: {location.rating}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <Button title="Add New Location" onPress={() => navigation.navigate('AddLocationScreen')} />
    </View>
  );
};

export default LocationList;
