import { Image, StyleSheet, SafeAreaView, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
   
      <Image
        source={require("@/assets/images/focus-spark-logo.png")}
        style={styles.reactLogo}
      />

      <Text style={styles.themeContainer}>
        <ThemedText type="title">Focus Music App</ThemedText>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  reactLogo: {
    width: 100, // Resmin genişliği
    height: 100, // Resmin yüksekliği
  },
  themeContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
  },
});
