import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useRef } from "react";
import Swiper from "react-native-deck-swiper";
import ActionSheet from "react-native-actions-sheet";
import CardDeck from "../../cardsDependencies/CardDeck.jsx";
import "../../cardsDependencies/sheets.tsx";
import { SheetProvider } from "react-native-actions-sheet";

export default function CardsHome() {

  const [ cards, setCards ]= useState(["DO", "MORE", "OF", "WHAT", "MAKES", "YOU", "HAPPY"])

  return (
    <SheetProvider>
      <View style={styles.container}>
        <CardDeck cards={cards} setCards={setCards} />
      </View>
    </SheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  }
});
