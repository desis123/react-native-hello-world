import React, { Component , useState } from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList,
TouchableWithoutFeedback,
Keyboard,
SafeAreaView, ScrollView,Alert ,Dimensions
} from 'react-native' 

import NewsPanel from './components/news/NewsPanel'
import { useAsync } from 'react-async-hook';



const TestComponent =({navigation})=>{
    console.count("TestComponent");
    
  
    return(
      <View><Text>I am here </Text></View>
    )
  
  }

  export default TestComponent