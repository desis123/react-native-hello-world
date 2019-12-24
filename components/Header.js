import React from 'react'
import { 
    StyleSheet,
    View,
    Text
 } from "react-native";

 const Header =()=>{
     return(
         <View style={styles.header}>
             <Text style={styles.title}>Todos List</Text>
         </View>
     )
 }

 const styles = StyleSheet.create({
     header :{
         height:40,
         paddingTop :8,
         backgroundColor:'pink'
         
     },
     title :{
         fontWeight : 'bold',
         alignItems : 'center',
         textAlign: 'center',
         
     }

 })
 export default Header
