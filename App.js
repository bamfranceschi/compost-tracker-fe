import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CompostBinCard from "./components/CompostBinCard";
import WeatherWidget from "./components/WeatherWidget";
import axios from "axios";
import fakeBinData from "./data/fakeBinData.json";

export default function App() {
  const [bins, setBins] = useState(fakeBinData);

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?id=4671654&appid=61d53de0b74185b764cb1d30df6de7b0"
      )
      .then((res) => {
        console.log(res);
        setWeatherData(res);
        // console.log(weatherData)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {bins.map((bin) => {
          <CompostBinCard
            name={bin.name}
            temps={bin.temps}
            turnDates={bin.turnDates}
            schedule={bin.turnSchedule}
            materials={bin.materials}
          />;
        })}
      </View>
      <WeatherWidget weatherData={weatherData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
