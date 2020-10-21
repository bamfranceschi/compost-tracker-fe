import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CompostBinCard from './components/CompostBinCard'
import WeatherWidget from "./components/WeatherWidget"

export default function App() {

  const [bins, setBins] = useState([])

  return (
    <View style={styles.container}>
      <View>
        <Text>Map function here to iterate over available bins</Text>
      </View>
      <WeatherWidget/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
