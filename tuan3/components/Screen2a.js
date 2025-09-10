import {View, Text, StyleSheet, TextInput, Image , Pressable, Linking } from 'react-native'

export default function Screen1d() {
  return (
    <View style ={{backgroundColor: '#f2c300', width: '100%', height: '100%'}}>
    
    <View style={{flex: 1,justifyContent: 'center',alignItems:"center", padding: '32px'}}>
      <Text style= {styles.title}>LOGIN</Text>
    </View>
    
    
    <View style={{flex: 2,justifyContent: 'space-evenly',alignItems:"center", width: '92%', margin: 'auto'}}>

      <View style = {{width: '100%', position: "relative"}}> 
        <Image style = {{position: "absolute", left: '6px', top: '6px'}} source = {require('../assets/userIcon.png')}/>
        <TextInput style= {styles.input} placeholder = "Name"/>
      </View>

      <View style = {{width: '100%', position: "relative"}}>
              <Image style = {{position: "absolute", left: '6px', top: '6px'}} source = {require('../assets/lockIcon.png')}/>
        <TextInput style= {styles.input} placeholder = "Password"/>
        <Image style = {{position: "absolute", right: '10px'}} source={require("../assets/eyeIcon.png")}/>
      </View>
    </View>
    
    
    <View style={{flex: 1,justifyContent: 'space-evenly',alignItems:"center", width: '92%', margin: 'auto'}}>
      <Pressable style = {{backgroundColor: "#060000", width: '100%', padding: '12px', color: 'white', textAlign: "center"}}>LOGIN</Pressable>
    </View>
    

    <View style= {{flex: 3}}>
      <Text style = {{textAlign: 'center', fontWeight: 800, fontSize: '20px'}}>CREATE ACCOUNT</Text> 
    </View>
    
    
    </View>
  )

}


  const styles = StyleSheet.create({
    title: {
      fontSize: "20px",
      fontWeight: "800",
      width: '100%',
    }, input: {
      width: '100%',
      padding: '12px',
      borderColor: "black",
      backgroundColor: '#d7b93b',
      borderWidth: "1px",
      borderColor: "white",
      paddingLeft: '44px',
    }
  })