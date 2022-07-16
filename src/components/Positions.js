import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Positions = () => {
  /*In react native there are only two types of positions - absolute and relative.
    You can only use top,right,left and bottom only if the parent is set to any of these two positions.
    */
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
      <View style={styles.subparent}>
        <View style={[styles.box5, styles.common]}>
          <Text>Box5</Text>
        </View>
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
    position: "relative", //make parent relative
  },
  subparent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  common: {
    height: 50,
    width: 60,
    borderWidth: 2,
    position: "absolute", //make child absolute to tell the parent that this box is his child.
  },
  box1: {
    right: 0,
    backgroundColor: "red",
  },
  box2: {
    backgroundColor: "yellow",
  },
  box3: {
    backgroundColor: "green",
    bottom: 0,
    right: 0,
  },
  box4: {
    bottom: 0,
    backgroundColor: "blue",
  },
  box5: {
    backgroundColor: "gray",
    alignSelf: "center",
  },
});
export default Positions;
