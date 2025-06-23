import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SheetProvider } from "react-native-actions-sheet";
import CardDeck from "../../cardsDependencies/CardDeck.jsx";
import "../../cardsDependencies/sheets.tsx";
import { useUser } from "../../context/userContext.jsx";
import { db } from "../../firestoreConfigurations/FirebaseConfig.jsx"; // Adjust the path as necessary


export default function CardsHome() {
  
  const [data, setData] = useState([]);
  const { user, setUser } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Starting to fetch data...');
        
        console.log("current user: " +  user.uid)

        const querySnapshot = await getDocs(collection(db, "users"));
        // const querySnapshot = await doc(db, "users", "HvZeEAaeHybRZh43a7IKVz0Kw2e2");
        console.log('Query completed, snapshot size:', querySnapshot.size);
        
        const documents = [];
        querySnapshot.forEach((doc) => {
          console.log('Document ID:', doc.id);
          console.log('Document data:', doc.data());
          documents.push({ id: doc.id, ...doc.data() });
        });
        
        console.log('All documents:', documents);
        setData(documents);
      } catch (e) {
        console.error("Error fetching documents: ", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

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
