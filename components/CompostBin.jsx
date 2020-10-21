import React from "react"
import { Text, View } from 'react-native';
import BinTemp from "./binWidgets/BinTemp"
import BinTurn from "./binWidgets/BinTurn"
import BinMaterial from "./binWidgets/BinMaterial"

function CompostBin(){
    return(
        <View>
            <Text>Here's a full view of all the bin data</Text>
            <BinTemp/>
            <BinTurn/>
            <BinMaterial/>
        </View>
    )
}

export default CompostBin
