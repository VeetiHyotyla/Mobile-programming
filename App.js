import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LocationsList from './screens/LocationsList';
import AddLocationScreen from './screens/AddLocationScreen';
import MapView from './screens/MapView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import firebase from './firebaseConfig';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return <AppNavigator />;
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Locations" component={LocationsList} />
          <Tab.Screen name="Add Location" component={AddLocation} />
          <Tab.Screen name="Map" component={MapViewScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
export default App;