//import libraries to create components
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//create a component that returns some jsx
export default function CustomComponent() {
  const name = "Priyanshu Tiwari";
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle1}>Welcome to Priyanshu's Channel.</Text>
      <Text style={styles.textStyle2}>I love React Native.</Text>
      <Text style={styles.textStyle3}>My name is {name}</Text>
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
  textStyle1: {
    color: "blue",
    fontSize: 20,
  },
  textStyle2: {
    color: "red",
    fontSize: 20,
  },
  textStyle3: {
    color: "green",
    fontSize: 20,
  },
});
