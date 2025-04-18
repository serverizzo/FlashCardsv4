import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useRef } from "react";
import Swiper from "react-native-deck-swiper";
import ActionSheet from "react-native-actions-sheet";

export default function CardsHome() {
  const [isModalVisible, setModalVisible] = useState(false);
  const actionSheetRef = useRef(null);

  return (
    <View style={styles.container}>
      <Swiper
        cards={["DO", "MORE", "OF", "WHAT", "MAKES", "YOU", "HAPPY"]}
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
            actionSheetRef.current?.show();
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

      <View>
        <ActionSheet 
        drawUnderStatusBar
        ref={actionSheetRef}
        ><View style={{ backgroundColor: "white", height: '100%' }}>

          <Text>Hi, I am here.</Text>
          </View>
        </ActionSheet>
      </View>

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
