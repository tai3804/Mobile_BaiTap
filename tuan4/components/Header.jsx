// Header.jsx
import {Image, Text, StyleSheet} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context"

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Image source={require("../assets/ant-design_arrow-left-outlined.png")} style={styles.icon} />
      <Text style= {styles.title}>Chat</Text>
      <Image source={require("../assets/Vector.png")} style ={[styles.icon, {tintColor: 'white'}]}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "100%",
    backgroundColor: "#1ba9ff",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  }
})
