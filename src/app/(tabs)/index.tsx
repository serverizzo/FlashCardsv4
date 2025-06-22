import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { auth } from "../../firestoreConfigurations/FirebaseConfig.jsx";

// export const CustomText = ({ children }: PropsWithChildren) => (
//   <Text>{children}</Text>
// );

export default function HomeScreen() {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)/cards");
    }
    catch (error) {
      console.error("Error signing in:", error);
    }
  }
  const signUp = async () =>  {
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
      console.error("Error signing in:", error);
    }
  }


  return (
    <View style={styles.container}>
      <Text>Login</Text>
        <TextInput placeholder="email" value={email} onChangeText={setEmail} style={{borderWidth: 1, width: 200, marginBottom: 10}} />
        <TextInput placeholder="password" value={password} onChangeText={setPassword} secureTextEntry style={{borderWidth: 1, width: 200, marginBottom: 10}} />
        <Button title="sign in" onPress={signIn}></Button>
        <Button title="sign up" onPress={signUp}></Button>
        <Link href="/(tabs)/explore">
          <Text>Go to Explore</Text>
        </Link>
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
