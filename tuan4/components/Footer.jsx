// Footer.jsx
import {Image, StyleSheet} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"

export default function Footer() {
  return (
    <SafeAreaView style={styles.footer}>
      <Image source={require("../assets/Group 10.png")} style={styles.icon}/>
      <Image source={require("../assets/Vector.png")} style={styles.icon}/>
      <Image source={require("../assets/Vector 1 (Stroke).png")} style={styles.icon}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: "#1ba9ff",
    paddingVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "white",
  }
})
