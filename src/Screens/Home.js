import React, { Component  } from 'react'
import 
{
Text,
View,
ActivityIndicator 
} from 'react-native' 
import {  persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';
// import {
//   LocalNotification,
//   ScheduledLocalNotification
// } from '../services/LocalPushController'

import { useLinking } from '@react-navigation/native';
 import RemotePushController from '../services/RemotePushController'
 import DeepLinkController from '../services/DeepLinkController'
import FirstInstallCheckerController from '../services/FirstInstallCheckerController'

import Homepage from '../components/Homepage';


const Home = ({navigation}) => {

  
  
      // const handleButtonPress = () => {
      //     LocalNotification()
      //   }
      
      //   const handleScheduleNotification = () => {
      //     ScheduledLocalNotification()
      //   }
      
      return (
  
         
          
          <View>
  
   {/* <Text>Press a button to trigger the notification</Text>
          <View style={{ marginTop: 20 }}>
            <Button title={'Local Push Notification'} onPress={handleButtonPress} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              title={'Scheduled Local Push Notification'}
              onPress={handleScheduleNotification}
            />
          </View>  */}
         <FirstInstallCheckerController navigation={navigation} />
          <RemotePushController navigation={navigation} />   
          <DeepLinkController navigation={navigation} />

    <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}> 
         <Homepage navigation ={navigation} />
      </PersistGate>    
  {/* <Text>Home Screen</Text>
              
              <Button
              title="Go to Detail"
              onPress={() => navigation.push('Category' ,
              {
              itemId : 1,
              fulltext : "This is Fulltext",
              }
            
            )}
          /> */}
          </View>
      )
  }

  export default Home