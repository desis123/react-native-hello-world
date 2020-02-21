import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
//import {push} from '../navigator/navigationRef';


const RemotePushController = ({navigation}) => {
  useEffect(() => {

    console.log(PushNotification);

    PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
          console.log('TOKEN:', token)
    
          //This is push notification bug ... Background app will not onNotification .. but this way it trigger.
          //Background app means .. App is open but inactive mode and total close app
          PushNotification.popInitialNotification((notification) => {
          
            console.log(notification)
    if(notification){ // Na hole fao promise toiri hoi
         const   data = {title:"App is in background inactive Mode ",fulltext:"App is in background inactive Mode"}  
         // navigate('Articles', { id: notification.linkid  , data: data });
    
         navigation.navigate('Article', { id: notification.linkid  , data: data });
    }
      });
    
      PushNotification.cancelAllLocalNotifications()


        },
        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
    //         console.log(AppState.currentState);
             console.log(notification);
    //         console.log('REMOTE NOTIFICATION ==>', notification.linkid)
    
    
            if(!notification.foreground){     // if is given, because ..when app is active mode.. if notification comes.. it will not auto redict to notificiation screen.. until it clicked .
            
           //This is opened app.. if notification is clicked while app is already open   
    console.log("I will opened")
           const   data3 = {title:"App is Opened ",fulltext:"App is Opened"} 
           //navigate('Articles', { id: notification.linkid , data:data3 });
           navigation.navigate('Article', { id: notification.linkid , data:data3 });
       
    
      
         
          } //Forground app 
        },
        // Android only: GCM or FCM Sender ID
        //Got this from google-services.json file
        senderID: '589653429567',
        popInitialNotification: true,
        requestPermissions: true
      }) 
    
  }, [])

  return null
}

export default RemotePushController