import { Text, TextInput, StyleSheet, View, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Screen1a() {
  return (
      <LinearGradient
        colors={['#d2f4f9', '#d2f4f9', '#d2f4f9', '#fff', '#d2f4f9', '#00ccf9']}
        start={{ x: 0.5, y: 0 }}      
        end={{ x: 0.5, y: 1 }}          
        style={styles.container}
      >
      <View style = {{flex: 3, justifyContent: 'center'}}> 
        <Text style = {styles.title}>CODE</Text>
      </View>
      
      <View  style = {{flex: 1}}> 
        <Text style = {styles.title}>VERIFICATION</Text>
      </View>
      
      <View style = {{flex: 3, justifyContent: 'center'}}> 
        <Text style = {styles.content}>Enter ontime password sent on ++849092605798</Text>
      </View>
      
      <View style={{ marginBottom: '64px'}}>
        <View style = {{flex: 1, flexDirection: 'row', padding: 0, justifyContent: 'center', alignItems: "center"}}> 
          <Image source={require("../assets/rec.png")}/> 
          <Image source={require("../assets/rec.png")}/> 
          <Image source={require("../assets/rec.png")}/> 
          <Image source={require("../assets/rec.png")}/> 
          <Image source={require("../assets/rec.png")}/> 
        </View>
        <Pressable style = {styles.button}>VERIFY CODE</Pressable>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0 auto',
  },
  content: {
    fontWeight: 700,
    margin: 'auto',
    textAlign: 'center',
    width: '88%',
  },
 button: {
    backgroundColor: 'yellow',
    padding: '12px',
    marginTop: '16px',
    textAlign: 'center',
    fontWeight: 600,
  }
});
