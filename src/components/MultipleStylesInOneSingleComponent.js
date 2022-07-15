import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MultipleStylesInOneSingleComponent = () => {
  return (
    //   for adding multiple styles use array
    <View style={styles.container}>
      <View style={[styles.box1, styles.allBox]}>
        <Text style={styles.allBoxText}>Box1</Text>
      </View>
      <View style={[styles.box2, styles.allBox]}>
        <Text style={styles.allBoxText}>Box2</Text>
      </View>
      <View style={[styles.box3, styles.allBox]}>
        <Text style={styles.allBoxText}>Box3</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    borderWidth: 2,
    marginHorizontal: 5,
    backgroundColor: "green",
  },
  allBox: {
    borderWidth: 2,
    height: 100,
    width: 100,
    marginVertical: 50,
    textAlign: "justify",
  },
  allBoxText: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 25,
  },
  box1: {
    backgroundColor: "red",
  },
  box2: {
    backgroundColor: "purple",
  },
  box3: {
    backgroundColor: "yellow",
  },
});
export default MultipleStylesInOneSingleComponent;
