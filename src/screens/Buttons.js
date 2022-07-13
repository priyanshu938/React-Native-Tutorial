import React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

const Buttons = () => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>Button</Text>
      <Button
        title="Join now"
        onPress={() => {
          // console.log("pressed");
          Alert.alert("Pressed");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    margin: 100,
  },
  textStyle: {
    marginVertical: 100,
    fontSize: 50,
  },
});
export default Buttons;
