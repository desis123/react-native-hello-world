import React , { useState, useEffect} from 'react'
import {Dimensions} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../Screens/Home';
import Categories from '../Screens/Categories'


import National from '../Screens/tabscreens/National'
import Politics from '../Screens/tabscreens/Politics'
import Sports from '../Screens/tabscreens/Sports'
import Laws from '../Screens/tabscreens/Laws'
import International from '../Screens/tabscreens/International'
import Lifestyle from '../Screens/tabscreens/Lifestyle'
import Miscellaneous from '../Screens/tabscreens/Miscellaneous'
import Exclusive from '../Screens/tabscreens/Exclusive'
import Country from '../Screens/tabscreens/Country'
import Education from '../Screens/tabscreens/Education'

import * as c from '../constants'

const Tab = createMaterialTopTabNavigator();
//const Tab = createBottomTabNavigator();

const Tabnav =React.memo( ()=> {


//Object.keys(ObjectItself) create an array of object key 
//and Object.values(ObjectItself) create array with values
//https://zellwk.com/blog/looping-through-js-objects/


//Dont remove this code, this is for multiple tab one screen
//But didnt work , so I hardcoded all screens @ToDO in future
const [tabitem,setTabitem] = useState(Object.keys(c.TAB_CATEGOIRES));
//dont remove this code


 return(
  <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        scrollEnabled:true, 

      }}
       lazy={true}
      lazyPreloadDistance = {1}
      initialLayout= {{ width: Dimensions.get('window').width }}
 
    > 
        
               <Tab.Screen name="Home" component={Home} />
               {/*<Tab.Screen name="বিশেষ প্রতিবেদন" component={Exclusive} />
                 <Tab.Screen name="জাতীয়" component={National} />
                <Tab.Screen name="রাজনীতি" component={Politics} />
                <Tab.Screen name="সারা দেশ" component={Country} />
                <Tab.Screen name="আইন-আদালত" component={Laws} />
                <Tab.Screen name="আন্তজার্তিক" component={International} />
                <Tab.Screen name="শিক্ষা" component={Education} />
                <Tab.Screen name="বিবিধ" component={Miscellaneous} />
                <Tab.Screen name="খেলাধূলা" component={Sports} />
                <Tab.Screen name="লাইফস্টাইল" component={Lifestyle} /> */}
                
               
                 
               {/* //Dont Remove this code .. This is for multiple tabs one screen
                //but didnt work */}
                          {tabitem.map((item, key) => {
                    return (
                      <Tab.Screen name={tabitem[key]} key={key} component={Categories} />
                    );
                        })}  
                {/* // end dont remove this code  */}

            
        
 </Tab.Navigator>
  )
})

export default Tabnav;