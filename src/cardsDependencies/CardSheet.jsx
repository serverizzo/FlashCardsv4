import ActionSheet from 'react-native-actions-sheet';
import { StyleSheet, Text, View, Button } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function CardSheet(props) {
  const insets = useSafeAreaInsets();
    return (
      <ActionSheet
      indicatorStyle={{
        width: 150,
      }}
      gestureEnabled
      safeAreaInsets={insets}
      // drawUnderStatusBar
      containerStyle={{
        height: '100%',
      }}>
        <View>
          <Text>Hello World</Text>
          <Text>{props.payload.title}</Text>
          <Button
            title="Change Title"
            onPress={() => {
              props.payload.setCards(["added", "new", "card", "to", "the", "deck"]);
            }}
          />
        </View>
      </ActionSheet>
    );
  }
   
  export default CardSheet;