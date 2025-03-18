import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LocationList from './screens/LocationList';
import AddLocationScreen from './screens/AddLocationScreen';
import MapViewScreen from './screens/MapView';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LocationList">
        <Stack.Screen
          name="LocationList"
          component={LocationList}
          options={{ title: 'Locations' }}
        />
        <Stack.Screen
          name="AddLocationScreen"
          component={AddLocationScreen}
          options={{ title: 'Add Location' }}
        />
        <Stack.Screen
          name="MapViewScreen"
          component={MapViewScreen}
          options={{ title: 'Map View' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
