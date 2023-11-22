import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { listeFav } from './components/AppContext';
import Nav from './NAV/Nav.js';
export default function App() {
  const [myFav, setmyFav] = useState([]);
  return (
    <listeFav.Provider value={[myFav, setmyFav]}>
      <Nav />
    </listeFav.Provider>
  );
}
