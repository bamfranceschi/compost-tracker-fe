import React from "react";
import { Text, View } from "react-native";
import lastTemp from "../helpers/lastTemp";
import lastTurn from "../helpers/lastTurn";

function CompostBinCard({ name, temps, turnDates }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{lastTemp(temps)}</Text>
      <Text>{lastTurn(turnDates)}</Text>
    </View>
  );
}

export default CompostBinCard;
