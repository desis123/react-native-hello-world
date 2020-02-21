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
//import {navigationRef , navigate} from './src/navigator/navigationRef';

import Tabnav from './src/navigator/Tabnav'

//import PushNotification from 'react-native-push-notification'

import { PersistGate } from 'redux-persist/integration/react';




// console.log(navigationRef);

const App =()=>{

 
  YellowBox.ignoreWarnings(['Warning:']);

    enableScreens();
    // const isHermes = () => global.HermesInternal != null;
    // console.log(isHermes);
    // <RemotePushController /> 
    const ref = React.useRef();

    const { getInitialState } = useLinking(ref, {
      prefixes: [
      'http://taza-khobor.org/bd/international', 
      'http://taza-khobor.org/bd/national',
      'http://taza-khobor.org/bd/education', 
      'http://taza-khobor.org/bd/lifestyle',
      'http://taza-khobor.org/bd/sports', 
      'http://taza-khobor.org/bd/islam',
      'http://taza-khobor.org/bd/lifestyle', 
      'http://taza-khobor.org/bd/national',
      'http://taza-khobor.org/bd/miscellaneous', 
      'http://taza-khobor.org/bd/recipe',
      'http://taza-khobor.org/bd/weird-news', 
      'http://taza-khobor.org/bd/abroad',
      'http://taza-khobor.org/bd/ltte', 
      'http://taza-khobor.org/bd/politics',
      'http://taza-khobor.org/bd/country', 
      'http://taza-khobor.org/bd/islam',
      'http://taza-khobor.org/bd/health', 
      'http://taza-khobor.org/bd/exclusive',
               ],

      config: {
        Articles : ':id',
      },
      
  });




  //const [appReady, setAppReady] = React.useState(false)

  // deep linking
  const [navReady, setNavReady] = React.useState(false)
//const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  const [isInstalledFirst,setIsInstalledFirst]  = React.useState(false);

  React.useEffect(() => {
//For First Time Installing 
    
if(isInstalledFirst){
    const myID = "First Install"

    const deffered_deeplink_route = {
      
      routes: [
        {
          name: 'Articles',
          params: {
            id: myID,
            data:{title:"First Time install ",fulltext:"App is opened first time after install"}
          },
        },
      ]
    }
    
    setInitialState(deffered_deeplink_route);
  }
  //End First Time Installing

  //Push Notification

  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
      console.log('TOKEN:', token)

      //This is push notification bug ... Background app will not onNotification .. but this way it trigger.
      //Background app means .. App is open but inactive mode 
      PushNotification.popInitialNotification((notification) => {
      

     const   data = {title:"App is in background inactive Mode ",fulltext:"App is in background inactive Mode"}  
     // navigate('Articles', { id: notification.linkid  , data: data });

     ref.current?.navigate('Articles', { id: notification.linkid  , data: data });

  });


    },
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
//         console.log(AppState.currentState);
//         console.log(notification);
//         console.log('REMOTE NOTIFICATION ==>', notification.linkid)


        if(!notification.foreground){     // if is given, because ..when app is active mode.. if notification comes.. it will not auto redict to notificiation screen.. until it clicked .
        
       //This is opened app.. if notification is clicked while app is already open   

       const   data3 = {title:"App is Opened ",fulltext:"App is Opened"} 
       //navigate('Articles', { id: notification.linkid , data:data3 });
       ref.current?.navigate('Articles', { id: notification.linkid , data:data3 });
   

      //This is closed app .. when notification is clicked. 
       const deffered_deeplink_route = {
         routes: [
           {
             name: 'Articles',
             params: {
               id: notification.linkid,
               data:{title:"App is ram closed",fulltext:"App is opened from close "}
             },
           },
         ]
       }
      
       setInitialState(deffered_deeplink_route);
     
      } //Forground app 
    },
    // Android only: GCM or FCM Sender ID
    //Got this from google-services.json file
    senderID: '589653429567',
    popInitialNotification: true,
    requestPermissions: true
  })

  //End Push Notification

    getInitialState()
      .catch(() => {})
      .then(state => {

        

        if (state !== undefined) {
          setInitialState(state); ///This is not external deep link 
        } 
        setNavReady(true);
        //setIsReady(true);
      });
  }, [getInitialState]);

  // wait for app to be ready
  // React.useEffect(() => {
  //   if (navReady) {
  //     setAppReady(true)
  //   }
  // }, [navReady])

  // if (!isReady) {
  //   return null;
  // }

  if (!navReady) {
    return null ;
  }
    

 




    return(

     
      
    <Provider store={store}>

  {/* <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}>  */}
    <NavigationNativeContainer initialState={initialState} ref={ref}>
    <Stacknav />
   </NavigationNativeContainer>
   {/* </PersistGate>   */}

   </Provider>    

    
    )
}



export default App 





