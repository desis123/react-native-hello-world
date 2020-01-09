import React, { Component , useState } from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList,
TouchableWithoutFeedback,
Keyboard,
SafeAreaView, ScrollView,Alert ,Dimensions, Button
} from 'react-native' 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {
    LocalNotification,
    ScheduledLocalNotification
  } from './src/services/LocalPushController'
  
  import RemotePushController from './src/services/RemotePushController'


const App =()=>{

    console.log("App Started");

   

  
    
   


    return(


        // Addition for push notifition

     
    //end Addition for push notification

        <AppContainer />
        

    
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonContainer: {
      marginTop: 20
    }
  })
export default App 




const Dashboard = ({navigation}) => {


    const handleButtonPress = () => {
        LocalNotification()
      }
    
      const handleScheduleNotification = () => {
        ScheduledLocalNotification()
      }
    
    return (

       
        
        <View>

<Text>Press a button to trigger the notification</Text>
        <View style={{ marginTop: 20 }}>
          <Button title={'Local Push Notification'} onPress={handleButtonPress} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title={'Scheduled Local Push Notification'}
            onPress={handleScheduleNotification}
          />
        </View>
        <RemotePushController />


<Text>Home Screen</Text>
            
            <Button
            title="Go to Detail"
            onPress={() => navigation.navigate('Category' ,
            {
            itemId : 1,
            fulltext : "This is Fulltext",
            }
          
          )}
        />
        </View>
    )
}



const Category  = ({navigation}) => {
    return (
        <View>
            <Text>Category Screen</Text>

            <Button
            title="Go to Detail"
          onPress={() => navigation.navigate('Category' ,
          {
            itemId: Math.floor(Math.random() * 100),
          }
          )} />

<Text>itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))} </Text>
<Text>
          otherParam:
          {JSON.stringify(navigation.getParam('fulltext', 'default value'))}
        </Text>

        </View>
    )
} 



const Settings = ({navigation}) => {

 switch(navigation.state.routeName) {
     case "Category": 
     catId = 1;
     break;
     case "Settings":
     catId = 2;
     break;
     case "Feed" :
     catId = 3;
     break;
     case "Now" :
     catId = 4 ;
     break;
     default :
     catId = 5;            
 }

    return (
        <View>
<Text>Settings{navigation.state.routeName}</Text>
<GetCategory  catID ={catId}/>
        </View>
    )
}


        const GetCategory = ({catID}) =>{
            return (
                <View>
        <Text>This is Text View {catID}</Text>
                </View>
            )
        }

const AppNavigator = createMaterialTopTabNavigator(
     {
      Home:  Dashboard,
          
      
      Category : Settings,
      Settings : Settings,
      Feed : Settings,
      Now : Settings,

    },
    {
        initialRouteName: 'Home',
        
        tabBarOptions: {
           scrollEnabled: true,
            activeTintColor: '#e91e63',
            
          },
        nagivationOptions :{
           
        }  
        
    }, 

   
   
 

      
  );

  const AppContainer = createAppContainer(AppNavigator);

  




