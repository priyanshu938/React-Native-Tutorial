import React from "react";
import { Text, View, StyleSheet, Image, Button, Linking } from "react-native";

const NetflixCard = ({ imageSource, text, description }) => {
  return (
    <View style={styles.listStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: "https://imgs.search.brave.com/_B3-nk2Vxz--c2m6kH3XEYQS9FQqZsM4OEoyX5ctPXU/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9vY2Mt/MC0yNDMwLTI0MzMu/MS5uZmx4c28ubmV0/L2RubS9hcGkvdjYv/WDE5NGVKc2dXQkRF/MmFRYmFOZG1DWEdV/UC1ZL0FBQUFCUmx1/S3Q3dV9mQUtkeGlN/TXNuSHJpY1MwUUJy/d19HNnVCeEF1Z0ll/djlXUzRncWIxOEp5/bmw5VmVuSlZxOVha/dHFibmM4d015WGhr/UFlpRXkwcV9qN1Vk/TzgtNy5qcGc_cj01/YzE",
        }} // for passing image url use this way
      />
      <Text style={styles.textStyle}>{text}</Text>
      <Text style={styles.descStyle}>{description}</Text>
      <Button
        title="Watch now"
        onPress={() => {
          Linking.openURL("https://www.netflix.com"); //for opening external link on button click use this way
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    height: 500,
    width: 250,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue",
  },

  imageStyle: {
    //for full image 
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  descStyle: {
    fontSize: 18,
    marginVertical: 10,
  },
});
export default NetflixCard;
