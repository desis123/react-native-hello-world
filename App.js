import React, { Component , useState } from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList,
TouchableWithoutFeedback,
Keyboard,
SafeAreaView, ScrollView,Alert ,Dimensions
} from 'react-native' 

import Header from './components/Header'
import NewsItem from './components/news/NewsItem'
import NewsPanel from './components/news/NewsPanel'
import Articles from './data/newsData.js'
import BanglaNews from './data/tazaNewsData.js'





const App =()=>{

    console.log("App Started");

    const [todos, setTodos ] = useState(
        BanglaNews
    )

    const [windowsWidth, setWindowsWidth] = useState(Dimensions.get('window').width);
    contentSizeChangeHandler =()=>{
        setWindowsWidth(Dimensions.get('window').width);
    }


    //const [windowsWidth, setwindowsWidth] = 


    const pressHandler =(id)=>{ 

        Alert.alert(
            `Alert Title${id}`,
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );

    //  setTodos( prevTodos =>  // Return should be an array . so we are just making a new array ... but using filter.
    //      prevTodos.filter( item => item.key !== id)
    // );
       

    }

    let isHorizontal = true;
   
   


    return(

        <ScrollView  contentInsetAdjustmentBehavior="automatic" onContentSizeChange ={contentSizeChangeHandler}>
        <SafeAreaView  style={{flex: 1}}>      
      
         <View style={styles.container} >
             <Header />
             <View style={styles.content} >
              <NewsPanel 
              title = "Politics"
              onCTAPress={() => (console.log("OnPress I did it"))}
               data={todos} 
               pressHandler = {pressHandler}
               isHorizontal ={true}
               myextrapropsfornewsitem = "."
               cols ={1}
               winWidth = {windowsWidth}
                />

              <NewsPanel 
              title ="National"
              onCTAPress={() => (console.log("OnPress I did it"))}
               data={todos} 
               pressHandler = {pressHandler}
               isHorizontal = {false}
               myextrapropsfornewsitem = "."
               cols ={2}
               winWidth = {windowsWidth}
                />

            <NewsPanel 
               title ="LifeStyle"

               onCTAPress={() => (console.log("OnPress I did it"))}
               data={todos} 
               pressHandler = {pressHandler}
               isHorizontal ={true}
               myextrapropsfornewsitem = "."
               cols ={1}
               winWidth = {windowsWidth}
                />

                
             
               
             
                 
             </View>
         </View> 
         </SafeAreaView>
         </ScrollView> 
        

    
    )
}
export default App 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 20,
      //backgroundColor: 'grey',
      flex: 1,
    },
    list: {
      marginTop: 10,
      //backgroundColor: 'lightgrey',
      flex: 1,
    },
  });