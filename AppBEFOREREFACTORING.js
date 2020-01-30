import React, { Component , useState } from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList,
TouchableWithoutFeedback,
Keyboard,
SafeAreaView, ScrollView,Alert ,Dimensions, Button , Animated,Easing , YellowBox, ActivityIndicator ,SectionList
} from 'react-native' 

import { Transition } from 'react-native-reanimated';



import { createAppContainer } from 'react-navigation';
import { NavigationNativeContainer , useRoute ,useLinking, } from '@react-navigation/native';

import { enableScreens  } from 'react-native-screens';
//import { createStackNavigator } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import useWhyDidYouUpdate from './src/hooks/useWhyDidYouUpdate';

import DashboardCom from './DashboardCom'
import Newsectionlist5 from './Newsectionlist5';

import TestComponent from "./TestComponet"
import {
    LocalNotification,
    ScheduledLocalNotification
  } from './src/services/LocalPushController'
  
  import RemotePushController from './src/services/RemotePushController'
import Article from './components/news/Article'


import { Provider } from "react-redux";
//import { store, persistor } from './src/redux/store'
import { store , persistor } from './src/redux/store'

import { PersistGate } from 'redux-persist/integration/react';




const App =()=>{

    
  YellowBox.ignoreWarnings(['Warning:']);

    enableScreens();
    // const isHermes = () => global.HermesInternal != null;
    // console.log(isHermes);

    const ref = React.useRef();

    const { getInitialState } = useLinking(ref, {
      prefixes: ['http://taza-khobor.org', 'http://taza-khobor.org/bd','taza-khobor.org','tazakhobor://'],
    });

    const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    getInitialState()
      .catch(() => {})
      .then(state => {
        if (state !== undefined) {
          setInitialState(state);
        }

        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

 
    
   //console.log(initialState);

   //console.log(ref);
//console.log("I am here with ref");

    return(


        // Addition for push notifition

     
    //end Addition for push notification
    <Provider store={store}>
    {/* <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}> */}

    <NavigationNativeContainer initialState={initialState} ref={ref}>
    <MyStack />
   </NavigationNativeContainer>
   {/* </PersistGate> */}

   </Provider>    

    
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

  useWhyDidYouUpdate('Dashboard', navigation);

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
        </View>  */}
        {/* <RemotePushController /> */}
 <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}>
       <Newsectionlist5 navigation={navigation} />
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



const Category  = ({ route, navigation }) => {
  

//    Category.navigationOptions = {
//     title: "My Own Title",
//     // gestureEnabled: false,
// }
//console.log(route);

  const {id} = route.params;
  const {data} = route.params;
//console.log(data);
//console.log(id)
  

  //This is required to open flatlist on intiial scroll
  
  const indexPostionOfArticle = data.findIndex(obj => obj.id == id)
 




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
  const route = useRoute();
 // console.log(route);

   switch(route.name) {
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
{/* <Text>Settings{navigation.state.routeName}</Text> */}
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




const Tab = createMaterialTopTabNavigator();

const Mytab = ()=> {
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
        
                <Tab.Screen name="Home" component={Dashboard} />
                <Tab.Screen name="মুক্তমত" component={Settings} />
                <Tab.Screen name="লাইফষ্টাইল" component={Settings} />
                <Tab.Screen name="খবর" component={Settings} />
                <Tab.Screen name="জাতীয়" component={Settings} />
            
        
 </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();
//const Stack = createStackNavigator();



function MyStack() {

  

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Mytab} />
      <Stack.Screen name="Category" 
      component={Category}
      options={{
        
       // presentation: "modal",
       

      }}
      />
   
    </Stack.Navigator>
  );
}



