import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const AboutScreen = ({ navigation }) => {
return (
<View style={styles.container}>
<Text style={styles.text}>About Screen</Text>
<Text></Text>
<Button
title="Go to Home Screen"
onPress={() => navigation.navigate("Home")}
/>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
},
text: {
fontSize: 18,
fontWeight: "bold",
},
});
export default AboutScreen;