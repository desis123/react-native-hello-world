import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
//import {push} from '../navigator/navigationRef';


const RemotePushController = ({navigation}) => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)


      
      onRegister: function(token) {
        console.log('TOKEN:', token)
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('REMOTE NOTIFICATION ==>', notification)
//if(!notification.foreground){
        navigation.push('Articles',{id : notification.linkid})
//}
        // process the notification here
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