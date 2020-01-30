import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabnav from './Tabnav'
import Articles from '../Screens/Articles'

const Stack = createNativeStackNavigator();

function Stacknav() {

  

    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={Tabnav} />
        <Stack.Screen name="Articles" 
        component={Articles}
        options={{
          
         // presentation: "modal",
         
  
        }}
        />
     
      </Stack.Navigator>
    );
  }

  export default Stacknav;