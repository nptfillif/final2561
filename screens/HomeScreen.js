import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const HomeScreen = ({ navigation }) => {
return (
<View style={styles.container}>
<Text style={styles.text}>Home Screen</Text>
<Text></Text>
<Button
title="Go to Profile Screen"
onPress={() => navigation.navigate("Profile")}
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
export default HomeScreen;