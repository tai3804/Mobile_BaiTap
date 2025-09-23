// Footer.jsx
import {Image, StyleSheet, View} from "react-native"

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Image style={styles.icon} source={require("../../assets/Group 10.png")} />
      <Image style={styles.icon} source={require("../../assets/Vector 1 (Stroke).png")} />
      <Image style={styles.icon} source={require("../../assets/Vector.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: "#1ba9ff",
    flex: 1
  },
  icon: {
    tintColor: "white",
  }
})
