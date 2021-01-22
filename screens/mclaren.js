import * as React from 'react';
import { Image,StyleSheet, Text, View,ToastAndroid, Button  } from 'react-native';

export default function Mcleran(){
     return(
         <View>
             <Image source={
          {uri:'https://www.hdwallpapers.in/download/orange_mclaren_f1_mclaren_senna_lm_2020_hd_cars-1366x768.jpg'}}
         style={styles.logo}/>
         <Text>MCLAREN F1 LM</Text>
            
         <Image></Image></View>
     );
}
const styles=StyleSheet.create({
    logo:{
  
      alignItems:'stretch',
      width:350, 
      height:180,
      marginBottom:5
    }
  
  });