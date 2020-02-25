import React from 'react'
import { createStackNavigator ,TransitionPresets } from '@react-navigation/stack';

import Tabnav from './Tabnav'
import Articles from '../Screens/Articles'
import IndividualArticle from '../Screens/IndividualArticle'

const Stack = createStackNavigator();

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
         ...TransitionPresets.SlideFromRightIOS,
  
        }}
        />
      <Stack.Screen name ="Article"
       component= {IndividualArticle} 
       />
      </Stack.Navigator>
    );
  }

  export default Stacknav;