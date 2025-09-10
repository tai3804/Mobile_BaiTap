import { Text, SafeAreaView, StyleSheet, View, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Screen1a() {
  return (
      <LinearGradient
        colors={['#d2f4f9', '#d2f4f9', '#d2f4f9', '#fff', '#d2f4f9', '#00ccf9']}
        start={{ x: 0.5, y: 0 }}      
        end={{ x: 0.5, y: 1 }}          
        style={styles.container}
      >
      <View style = {{flex: 4, justifyContent: 'center'}}> 
        <Image 
        source={require('../assets/ellipse.png')}
        ></Image>
      </View>
      
      <View  style = {{flex: 1}}> 
        <Text style = {styles.title}>GROW </Text>
        <Text style = {styles.title}> YOUR BUSINESS</Text>
      </View>
      
      <View style = {{flex: 2}}> 
        <Text style = {styles.content}>We will help you to grow your business using online serverr</Text>
      </View>
      
      <View style = {{flex: 3, justifyContent: 'center', alignItems: 'center', width: "80%"}}>
        <View style = {styles.buttons}> 
          <Pressable style = {styles.button}>LOGIN</Pressable>
          <Pressable style = {styles.button}>SIGN UP</Pressable>
        </View>
        <Text style = {{fontWeight: '600', fontSize: '20px'}}> HOW WE WORK?</Text>
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
  },
  buttons: {
    flexDirection: 'row',    
    justifyContent: 'space-around', 
    alignItems: 'center',   
    width: '100%',
    marginBlockEnd: '16px',
  },
  button: {
    backgroundColor: 'yellow',
    fontWeight: '600',
    fontSize: 18,
    borderRadius: '8px',
    padding: '12px 16px',
  }
});
