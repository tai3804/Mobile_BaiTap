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
      <View style = {{flex: 6, justifyContent: 'center'}}> 
        <Image 
        source={require('../assets/lock.png')}
        ></Image>
      </View>
      
      <View  style = {{flex: 3}}> 
        <Text style = {styles.title}>FORGET</Text>
        <Text style = {styles.title}>PASSWORD</Text>
      </View>
      
      <View style = {{flex: 1, justifyContent: 'center'}}> 
        <Text style = {styles.content}>Provide your accoun's email for which you wan to reset your password</Text>
      </View>
      
      <View style={{ flex: 8, justifyContent: 'center', width: '90%' }}>
      <View> 
            <Image style = {{position: 'absolute'}} source = {require('../assets/mail.png')}/> 
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
      </View>
        <Pressable style = {styles.button}> NEXT </Pressable>
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
  input: {
    backgroundColor: '#c4c4c4',
    padding: '14px 14px 14px 52px',
  }, button: {
    backgroundColor: 'yellow',
    padding: '12px',
    marginTop: '16px',
    textAlign: 'center',
    fontWeight: 600,
  }
});
