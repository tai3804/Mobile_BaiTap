import {View, Text, StyleSheet, TextInput, Image , Pressable, Linking } from 'react-native'

export default function EMEye() {
  return (
    <View style ={{width: '100%', height: '100%'}}>
    
    <View style={{flex: 3,justifyContent: 'center',alignItems:"center", padding: '32px'}}>
      <Image source={require('../assets/eyeball.svg')}/>
    </View>
    
    
    <View style={{flex: 2,justifyContent: 'space-evenly',alignItems:"center", width: '92%', margin: 'auto'}}>

      <View style = {{width: '100%', position: "relative"}}> 
        <Image style = {{position: "absolute", left: '6px', top: '6px'}} source = {require('../assets/luser.svg')}/>
        <TextInput style= {styles.input} placeholder = "Please input user name"/>
      </View>

      <View style = {{width: '100%', position: "relative"}}>
              <Image style = {{position: "absolute", left: '6px', top: '6px'}} source = {require('../assets/llock.png')}/>
        <TextInput style= {styles.input} placeholder = "Please input password"/>
      </View>
    </View>
    
    
    <View style={{flex: 1,justifyContent: 'space-evenly',alignItems:"center", width: '92%', margin: 'auto'}}>
      <Pressable style = {{backgroundColor: "#386ffc", width: '100%', padding: '12px', color: 'white', textAlign: "center", borderRadius: '12px'}}>LOGIN</Pressable>
    </View>
    

    <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: "92%", margin: 'auto'}}>
      <Text style = {{fontSize: '16px', fontWeight: '600'}}>Register</Text> 
      <Text style = {{fontSize: '16px', fontWeight: '600'}}>Forgot Password</Text> 
    </View>

    <View style= {{flex: 1, }}> 
     <Image style = {{margin: 'auto'}} source = {require('../other.png')}/>
    </View>
    
    <View style= {{flex: 2, flexDirection: 'row', justifyContent: 'space-around'}}>
     <Image style = {{}} source = {require('../assets/l1.svg')}/>
     <Image style = {{}} source = {require('../assets/l2.svg')}/>
     <View  style = {{backgroundColor: "#3a579c", width: '72px', height: '72px', borderRadius: '8px', justifyContent: 'center', alignItems: 'center'}}>
      <Image source = {require('../assets/lfb.png')}/>     
     </View>
    </View >
    </View>
  )

}


  const styles = StyleSheet.create({
   input: {
      width: '100%',
      padding: '12px',
      borderColor: "#999",
      borderBottomWidth: "1px",
      paddingLeft: '44px',
    }
  })