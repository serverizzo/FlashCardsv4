import { StyleSheet, Text, View, Button, Animated } from "react-native";
import React, { useState, useRef } from "react";
import Swiper from "react-native-deck-swiper";
import { SheetManager } from "react-native-actions-sheet";

export default function CardDeck({ cards, setCards }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const flipToFrontSytle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipToBackStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const flipCard = () => {
    if (isFlipped) {
      // animate back to the front side
      Animated.spring(flipAnimation, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      // animate to the back side
      Animated.spring(flipAnimation, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => {
          return (
            <View style={styles.container}>
              <Animated.View style={[styles.card, flipToFrontSytle]}>
                <Text style={styles.text}>Front</Text>
              </Animated.View>
              <Animated.View style={[styles.card, flipToBackStyle]}>
                <Text style={styles.text}>Back</Text>
                <Button
                title="Open Sheet"
                  onPress={() => {
                    SheetManager.show("CardSheet", {
                      payload: {
                        setCards: setCards,
                        title: "Card Actions",
                        description: "Choose an action for this card",
                      },
                    });
                  }}
                ></Button>
              </Animated.View>
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
          flipCard();
          // SheetManager.show("CardSheet", {
          //   payload: {
          //     setCards: setCards,
          //     title: "Card Actions",
          //     description: "Choose an action for this card",
          //   },
          // });
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
    // backgroundColor: "#F5FCFF",
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
});
