import {View, Text, StyleSheet, TextInput, Image , Pressable, Label } from 'react-native'

import {RadioButton} from 'react-native-paper'

export default function Screen1d() {
  return (
    <View style ={{backgroundColor: '#d8efde', width: '100%', height: '100%'}}>
    
    <View style={{flex: 1,justifyContent: 'center',alignItems:"center",}}>
      <Text style= {styles.title}>REGISTER</Text>
    </View>
    
    
    <View style={{flex: 5,justifyContent: 'space-evenly',alignItems:"center", width: '92%', margin: 'auto'}}>

      <TextInput style= {styles.input} placeholder = "Name"/>
      <TextInput style= {styles.input} placeholder = "Phone"/>
      <TextInput style= {styles.input} placeholder = "Email"/>
      
      <View style = {{width: '100%', position: "relative"}}>
        <TextInput style= {styles.input} placeholder = "Password"/>
        <Image style = {{position: "absolute", right: '10px'}} source={require("../assets/eyeIcon.png")}/>
      </View>
      <TextInput style= {styles.input} placeholder = "Birthday"/>

      <View style = {{ flexDirection:'row',width:'100%', height: "24px"}}> 
      <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton name= "gender"/>
        <Text>Male</Text>
      </Pressable>
      <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton name= "gender"/>
        <Text>Female</Text>
      </Pressable>
      </View>


    </View>
      <View style={{flex: 1,justifyContent: 'space-evenly',alignItems:"center", width: '92%', margin: 'auto', marginBottom: '64px'}}>

        <Pressable style = {{backgroundColor: "#c34e3b", width: '100%', padding: '12px', color: 'white', textAlign: "center"}}>REGISTER</Pressable>
        <Text>When you agree to terms and conditions</Text>

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