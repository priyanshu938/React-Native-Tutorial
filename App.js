//import libraries to create components
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//create a component that returns some jsx
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello World!</Text>
    </View>
  );
}

//Create a StyleSheet to style the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "red",
  },
});
