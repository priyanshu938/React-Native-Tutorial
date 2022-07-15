import React from "react";
import { Text, View, StyleSheet, Image, Button, Linking } from "react-native";
//for fonts go to directory.vercel.app ,search, import in yor code,useFont, app loading then font-family.
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const NetflixCard = ({ imageSource, text, description }) => {
  let [fontsLoad] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });
  if (!fontsLoad) return <AppLoading />;
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
    marginTop: 10,
    fontSize: 25,
    fontFamily: "JosefinSans_700Bold_Italic",
    fontVariant: ["small-caps"],
    letterSpacing: 5,
    lineHeight: 25,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textTransform: "uppercase",
  },
  descStyle: {
    textAlign: "justify",
    margin: 8,
    fontSize: 15,
    fontFamily: "JosefinSans_100Thin",
    letterSpacing: 3,
  },
});
export default NetflixCard;
