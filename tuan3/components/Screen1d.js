import {View, Text, StyleSheet, TextInput, Image , Pressable, Linking } from 'react-native'

export default function Screen1d() {
  return (
    <View style ={{backgroundColor: '#d8efde', width: '100%', height: '100%'}}>
    
    <View style={{flex: 2,justifyContent: 'center',alignItems:"center",}}>
      <Text style= {styles.title}>LOGIN</Text>
    </View>
    
    
    <View style={{flex: 2,justifyContent: 'space-evenly',alignItems:"center", width: '92%', margin: 'auto'}}>
      <TextInput style= {styles.input} placeholder = "email"/>
      <View style = {{width: '100%', position: "relative"}}>
        <TextInput style= {styles.input} placeholder = "password"/>
        <Image style = {{position: "absolute", right: '10px'}} source={require("../assets/eyeIcon.png")}/>
      </View>
    </View>
    
    
    <View style={{flex: 2,justifyContent: 'space-evenly',alignItems:"center", width: '92%', margin: 'auto'}}>
      <Pressable style = {{backgroundColor: "#c34e3b", width: '100%', padding: '12px', color: 'white', textAlign: "center"}}>LOGIN</Pressable>
      <Text>When you agree to terms and conditions</Text>
      <Text         
        style = {{color: '#8b70ef', fontWeight: 600}}
        onPress= {(() => {Linking.openURL("#")})}
      >
        For got your password?
      </Text >
      <Text>Or login with</Text>
    </View>
    
    
    <View style={{flex: 2, flexDirection: 'row',justifyContent: 'center',alignItems:"center",}}>
    <Pressable style = {{backgroundColor: '#275a8d',          paddingHorizontal: '24px', paddingVertical: '2px',}}>
      <Image 
        source= {require('../assets/fb.png')}
      />
    </Pressable>

        <Pressable style = {{backgroundColor: '#1593c5', paddingHorizontal: '24px', paddingVertical: '2px',}}>
      <Image 
        style= {{width: '30px', height: '30px'}}
        source= {require('../assets/zalo.png')}
      />
    </Pressable>

        <Pressable style = {{borderWidth: '1px', borderColor: '#275a8d', paddingHorizontal: '24px', paddingVertical: '2px',}}>
      <Image
        style= {{width: '28px', height: '28px'}}
        source= {require('../assets/gg.png')}
      />
    </Pressable>
    </View>
    
    
    
    </View>
  )

}


  const styles = StyleSheet.create({
    title: {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: 'center',
      width: '100%',
    }, input: {
      width: '100%',
      padding: '8px',
      borderColor: "black",
      backgroundColor: '#c9e0d0',
    }
  })