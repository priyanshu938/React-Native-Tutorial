//import libraries to create components
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";

//create a component that returns some jsx
export default function App() {
  return (
    <View style={styles.container}>
      <CustomComponent />
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
