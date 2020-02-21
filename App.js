import React from 'react'
import 
{
 YellowBox,
 ActivityIndicator,
 AppState
} from 'react-native' 

import { NavigationNativeContainer ,useLinking, } from '@react-navigation/native';
import { enableScreens  } from 'react-native-screens';
import { Provider } from "react-redux";
import { store , persistor } from './src/redux/store'
import Stacknav from './src/navigator/Stacknav'


import Tabnav from './src/navigator/Tabnav'



import { PersistGate } from 'redux-persist/integration/react';




// console.log(navigationRef);

const App =()=>{

 
  YellowBox.ignoreWarnings(['Warning:']);
  YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);


    enableScreens();
    
  
return(

     
      
    <Provider store={store}>

  {/* <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}>  */}
    <NavigationNativeContainer >
    <Stacknav />
   </NavigationNativeContainer>
   {/* </PersistGate>   */}

   </Provider>    

    
    )
}



export default App 
