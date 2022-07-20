import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const submit = () => {
    if ((name === "abc") & (password === "abc"))
      Alert.alert(`Thank you ${name}`);
    else Alert.alert("Username and password are incorrect!");
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Login Form</Text>
      <Text style={styles.description}>
        You can reach us anytime via xyz@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name :</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(val) => {
            setName(val);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password :</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(val) => {
            setPassword(val);
          }}
        />
      </View>
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => {
            setAgree(!agree);
          }}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: agree ? "#4630EB" : "gray" }]}
        disabled={!agree}
        onPress={() => submit()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    marginHorizontal: 2,
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 20,
  },
  inputStyle: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
  },
  wrapper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  wrapperText: {
    fontSize: 18,
    marginLeft: 10,
  },
  button: {
    padding: 5,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
