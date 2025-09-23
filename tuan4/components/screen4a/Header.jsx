// Header.jsx
import {Image, Text, StyleSheet,View} from 'react-native'
import ArrowLeft from "../../assets/ant-design_arrow-left-outlined.png";

export default function Header() {
  return (
    <View style={styles.header}>
    
      <Image source={ArrowLeft}  />
      <Image source={require("../../assets/ant-design_arrow-left-outlined.png")} style={styles.icon} />
      <Text style= {styles.title}>Chat</Text>
      <Image source={require("../../assets/Vector.png")} style ={[ {tintColor: 'white'}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1ba9ff",
    paddingHorizontal: 16,
    flex: 1
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  // icon: {
  // }
})
