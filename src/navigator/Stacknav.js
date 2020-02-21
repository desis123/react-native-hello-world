import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabnav from './Tabnav'
import Articles from '../Screens/Articles'
import IndividualArticle from '../Screens/IndividualArticle'

const Stack = createNativeStackNavigator();

function Stacknav() {

  

    return (
      <Stack.Navigator 
      initialRouteName="HomeStack"
      >
        <Stack.Screen name="HomeStack" component={Tabnav} />
        <Stack.Screen name="Articles" 
        component={Articles}
        options={{
          
         // presentation: "modal",
         
  
        }}
        />
      <Stack.Screen name ="Article"
       component= {IndividualArticle} 
       />
      </Stack.Navigator>
    );
  }

  export default Stacknav;