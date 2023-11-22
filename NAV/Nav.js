// NAV/Nav.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../components/Search.js';
import DetailImage from '../components/DetailImage.js';
import Favoris from '../components/Favoris.js';
const Stack = createStackNavigator();
export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Rechercher des images" component={Search} />
        <Stack.Screen name="Détail" component={DetailImage} />
        <Stack.Screen name="Favoris" component={Favoris} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
