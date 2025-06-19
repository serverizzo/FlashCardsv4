import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useRef } from "react";
import Swiper from "react-native-deck-swiper";
import { SheetManager } from "react-native-actions-sheet";

export default function CardDeck({cards, setCards}) {

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        onTapCard={() => {
            SheetManager.show('CardSheet', {
              payload: {
                setCards: setCards,
                title: "Card Actions",
                description: "Choose an action for this card",
              },
            });
        }}
        cardIndex={0}
        backgroundColor={"#4FD0E9"}
        stackSize={3}
      >
        <Button
          onPress={() => {
            console.log("oulala");
          }}
          title="Press me"
        >
          You can press me
        </Button>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
});
