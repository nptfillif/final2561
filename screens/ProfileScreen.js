import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const ProfileScreen = ({ navigation }) => {
return (
<View style={styles.container}>
<Text style={styles.text}>Profile Screen</Text>
<Text></Text>
<Button
title="Go to About Screen"
onPress={() => navigation.navigate("About")}
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
export default ProfileScreen;