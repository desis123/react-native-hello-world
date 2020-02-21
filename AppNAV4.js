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

import { Transition } from 'react-native-reanimated';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DashboardCom from './DashboardCom'
import {
    LocalNotification,
    ScheduledLocalNotification
  } from './src/services/LocalPushController'
  
  import RemotePushController from './src/services/RemotePushController'
import Article from './components/news/Article'
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

{/* <Text>Press a button to trigger the notification</Text>
        <View style={{ marginTop: 20 }}>
          <Button title={'Local Push Notification'} onPress={handleButtonPress} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title={'Scheduled Local Push Notification'}
            onPress={handleScheduleNotification}
          />
        </View> */}
        <RemotePushController />
        {/* <DashboardCom navigation ={navigation}/> */}

<Text>Home Screen</Text>
            
            <Button
            title="Go to Detail"
            onPress={() => navigation.push('Category' ,
            {
            itemId : 1,
            fulltext : "This is Fulltext",
            }
          
          )}
        />
        </View>
    )
}



const Category  = ({navigation,navigationOptions}) => {
  

//    Category.navigationOptions = {
//     title: "My Own Title",
//     // gestureEnabled: false,
// }


  const article_id = navigation.getParam('id');
  const data = navigation.getParam('data');

  //This is required to open flatlist on intiial scroll
  
  const indexPostionOfArticle = data.findIndex(obj => obj.id == article_id)
 




    return (
      <Article data = {data} itemIndex={indexPostionOfArticle} ></Article>
      // <View>
      //  <Text> Index Position :  {indexPostionOfArticle} </Text>
     
      // </View>
//         <View>
//             <Text>Category Screen</Text>

//              <Button
//             title="Go to Detail"
//           onPress={() => navigation.navigate('জাতীয়' ,
//           {
//             itemId: Math.floor(Math.random() * 100),
//           }
//           )} /> 

// <Text>itemId: {JSON.stringify(navigation.getParam('id', 'NO-ID'))} </Text>
// <Text>
//           otherParam:
//           {JSON.stringify(navigation.getParam('data', 'default value'))}
//         </Text>

//         </View>
    )
} 



const Settings = ({navigation}) => {

  let catId = 4


  switch(navigation.state.routeName) {
      case "জাতীয়": 
      catId = 1;
      break;
      case "লাইফষ্টাইল":
      catId = 2;
      break;
      case "খবর" :
      catId = 3;
      break;
      case "মুক্তমত" :
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

const Tab_1 = createMaterialTopTabNavigator(
     {
      Home:  Dashboard,
          
      মুক্তমত : Settings,
      লাইফষ্টাইল : Settings,
      খবর : Settings,
      জাতীয় : Settings,

      মুক্তমত1 : Settings,
       লাইফষ্টাইল1 : Settings,
       খবর1 : Settings,
       জাতীয়1 : Settings,

     // মুক্তমত2 : Settings,
     // লাইফষ্টাইল2 : Settings,
      //খবর2 : Settings,
      // জাতীয়2 : Settings,

      // মুক্তমত3 : Settings,
      // লাইফষ্টাইল3 : Settings,
      // খবর3 : Settings,
      // জাতীয়3 : Settings,

      // মুক্তমত4 : Settings,
      // লাইফষ্টাইল4 : Settings,
      // খবর4 : Settings,
      // জাতীয়4: Settings,
     
       
    },
    {
        
        swipeEnabled: true,
       // animationEnabled : true,
       barStyle: { backgroundColor: '#694fad' },

       
        tabBarOptions: {
            activeBackgroundColor: '#fff',
            inactiveBackgroundColor: '#8B0000',
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#9B9B9B',
            scrollEnabled:true,  
            style:{
                backgroundColor : '#8B0000',

            },
        },
        
        defaultNavigationOptions: {
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
        
    }, 
);




const Stack_1 = createStackNavigator(
    {
        HomeStack : Tab_1,
        Category : {
            screen:Category,
            
          } 
    },
    {
        initialRouteName : 'HomeStack',
        mode: 'modal',
        
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#8B0000',
              height: 50,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            gestureEnabled: true,
          },
    }

)






  const AppContainer = createAppContainer(Stack_1);

  




