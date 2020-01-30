import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../Screens/Home';
import Categories from '../Screens/Categories'


const Tab = createMaterialTopTabNavigator();

const Tabnav = ()=> {
return(
  <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        scrollEnabled:true,  
      }}
      lazy={true}
      lazyPreloadDistance = {1}
 
    > 
        
                <Tab.Screen name="Home" component={Home} />


                <Tab.Screen name="মুক্তমত" component={Categories} />
                <Tab.Screen name="লাইফষ্টাইল" component={Categories} />
                <Tab.Screen name="খবর" component={Categories} />
                <Tab.Screen name="জাতীয়" component={Categories} />
            
        
 </Tab.Navigator>
  )
}

export default Tabnav;