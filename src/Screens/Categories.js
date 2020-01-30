import React from 'react'
import {View } from 'react-native'
import Categorypage from '../components/Categorypage'
//import {  useRoute  } from '@react-navigation/native';

const Categories = ({route}) => {

    let catId = 4
   // const route = useRoute();
    console.log(route);
  
     switch(route.name) {
         case "জাতীয়": 
         catId = 1;
         break;
         case "লাইফষ্টাইল":
         catId = 2;
         break;
         case "খবর" :
         catId = 3;
         break;
        case "মুক্তমত" :
         catId = 4 ;
         break;
         default :
         catId = 5;            
     }
  
      return (
          <View>
  {/* <Text>Settings{navigation.state.routeName}</Text> */}
  <Categorypage  catID ={catId}/>
          </View>
      )
  }


  export default Categories;