import React from 'react'
import {View } from 'react-native'
import Categorypage from '../components/Categorypage'

import * as c from '../constants'
//import {  useRoute  } from '@react-navigation/native';

const Categories = ({route , navigation}) => {

   

    let catId = c.TAB_CATEGOIRES[route.name];
    let cat_name = c.TAB_CATEGOIRES_BN_TO_EN[route.name];
      return (
    
  <Categorypage  catID ={catId} CAT_NAME={cat_name} navigation={navigation}  />
        
      )
  }


  export default Categories;