import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

const Buttons = () => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>Button</Text>
      <Button //Button in react-native is a self closing tag
        title="Join now" //two mandatory props of button are title and OnPress
        onPress={() => {
          // console.log("pressed");
          Alert.alert("Pressed");
        }}
      />

      {/* For complex operations ,we use TouchableOpacity instead of Button */}
      <TouchableOpacity
        onPress={() => {
          // console.log("pressed");
          Alert.alert("Pressed");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../../assets/1.jpg")}
        />

        <Text>Press me</Text>
      </TouchableOpacity>
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
  imageStyle: {
    width: 150,
    margin: 5,
    height: 150,
  },
});
export default Buttons;
