
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image,StyleSheet, Text, View, TouchableOpacity,ToastAndroid   } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import logo from './assets/Carimg1.jpg';
import logo1 from './assets/MaybachExelero.jpg';

export default function App() {
  console.log("App is running");
  return (
  
    
    <View style={styles.container}>
     
      
      <Text style = {styles.textdesign}>EXOCTIC CARS</Text>
      
          <Image source={logo1 } 
          style={styles.logo}/>
          <Text>MAYBACHEXELERO</Text>
       
        <Image source={
          {uri:'https://www.hdwallpapers.in/download/orange_mclaren_f1_mclaren_senna_lm_2020_hd_cars-1366x768.jpg'}}
         style={styles.logo}/>
         <Text>MCLAREN F1 LM</Text>
        <Image source={
          {uri:'https://cdn.lifestyleasia.com/wp-content/uploads/2019/09/10171123/Bugatti039s-18.7-million-La-Voiture-Noire-makes-its-US-debut.jpg'}} style={styles.logo}/>
          <Text>BUGATTI LA VOITURE NOIRE</Text>
           <TouchableOpacity 
        onPress={()=> 
          alert('This in the first version of app developed on 20 january 2021')}
        style={styles.button}>
        <Text style={styles.buttontext}> CLICK TO CHECK VERSION </Text>
        </TouchableOpacity>
        <View>
        <AntDesign 
        name="caretright" 
        size={24} 
        color="black" 
        flex='1'
        onPress={()=>ToastAndroid.showWithGravity('Still developing next page',ToastAndroid.SHORT,ToastAndroid.BOTTOM)}
         />
     
      </View>  
      <StatusBar style="auto" />
    </View>
    
  );
}
 
const styles = StyleSheet.create({
  container: {
  
    flex:1, 
    backgroundColor: '#f2f3f5',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo:{
    alignItems:'stretch',
    width:350, 
    height:180,
    marginBottom:5
  },
   textdesign:{
     fontFamily:'Inter_900Black',
    color:'#658',
    fontSize:35,
    fontWeight:"400" ,
  },
    button:
    {
     backgroundColor:"#4169E1",
    width:250,
    height:30,  
    },
    buttontext:{
      fontSize:20,
        fontStyle:'italic',
      fontWeight:'200',
      color:'#000000'
    },

     
   
  });
