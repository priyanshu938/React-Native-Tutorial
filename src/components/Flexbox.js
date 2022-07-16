import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box1, styles.common]}>
        <Text>Box1</Text>
      </View>
      <View style={[styles.box2, styles.common]}>
        <Text>Box2</Text>
      </View>
      <View style={[styles.box3, styles.common]}>
        <Text>Box3</Text>
      </View>
      <View style={[styles.box4, styles.common]}>
        <Text>Box4</Text>
      </View>
      <View style={[styles.box5, styles.common]}>
        <Text>Box5</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 400,
    width: "90%",
    marginTop: 100,
    marginHorizontal: 2,
    borderWidth: 1,
    //below flex properties applicable only on parent element
    flexDirection: "row",
    //flexDirection has - row ,column(default), row-reverse,column-reverse
    justifyContent: "space-evenly", // for vertical centering  if flex-direction is column and vice versa
    //justifyContent has - flex-start, flex-end,space-between, space-around,space-evenly
    alignItems: "center", //for horizontal centering if flex-direction is column and vice versa
    //alignItems has - stretch(default),flex-start, flex-end,center,baseline
  },
  common: {
    height: 50,
    width: 60,
    borderWidth: 2,
  },
  box1: {
    backgroundColor: "red",
    flex: 1, //this box will use the left space
  },
  box2: {
    backgroundColor: "yellow",
  },
  box3: {
    backgroundColor: "green",
    alignSelf: "flex-end", //alignSelf works on child, for targeting specific child components
  },
  box4: {
    backgroundColor: "blue",
  },
  box5: {
    backgroundColor: "gray",
  },
});
export default Flexbox;
