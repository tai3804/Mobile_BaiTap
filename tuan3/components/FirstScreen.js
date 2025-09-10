import { Text, SafeAreaView, StyleSheet, View, Pressable, Image } from 'react-native';


export default function FirstScreen() {
  return (
    <SafeAreaView style={styles.container}>
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
      
      <View style = {styles.buttons}> 
        <Pressable style = {styles.button}>LOGIN</Pressable>
        <Pressable style = {styles.button}>SIGN UP</Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ccf9',
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
    flex: 2,
    flexDirection: 'row',    
    justifyContent: 'space-around', 
    alignItems: 'center',   
    width: '100%',
  },
  button: {
    backgroundColor: 'yellow',
    fontWeight: '1000',
    borderRadius: '8px',
    padding: '12px 16px',
  }
});
