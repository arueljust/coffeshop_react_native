import { StyleSheet, Text } from "react-native";
export default function TabTwoScreen() {
  return <Text style={styles.profileText}>Profile view</Text>;
}

const styles = StyleSheet.create({
  profileText: {
    color: "#ffff",
    position: "absolute",
    bottom: 50,
  },
});
