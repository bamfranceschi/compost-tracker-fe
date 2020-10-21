import React, { useEffect, useState } from "react"
import { Text, View } from 'react-native';


function WeatherWidget({weatherData}){
    

    return(
        <View>
            <Text>Weather widget here</Text>
            {/* <Text>{weatherData.data.name}</Text> */}
        </View>
    )
}

export default WeatherWidget;
