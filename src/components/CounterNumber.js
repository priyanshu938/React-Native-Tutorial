import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

const CounterNumber = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{number}</Text>
      <TouchableOpacity
        onPress={() => {
          setNumber(number + 10);
        }}
      >
        <Text style={styles.common}>+10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setNumber(0);
        }}
      >
        <Text style={styles.common}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
         number!==0 && setNumber(number - 10);
        }}
      >
        <Text style={styles.common}>-10</Text>
      </TouchableOpacity>
    </View>
  );
  Text;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 100,
  },
  common: {
    fontSize: 30,
    borderWidth: 4,
    padding: 20,
    width: 300,
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    marginVertical: 20,
  },
});
export default CounterNumber;
