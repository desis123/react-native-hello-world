import React from 'react'
import {Text,View , BackHandler} from 'react-native'
import Articlepage from '../components/Articlepage'


const Articles  = ({ route, navigation }) => {
  

    //    Category.navigationOptions = {
    //     title: "My Own Title",
    //     // gestureEnabled: false,
    // }
    //console.log(route);
    
      const {id} = route.params;
      const {data} = route.params;
    // console.log(data);
    // console.log(id)
      //if data is empty , that means request came from push notification or deffered deep linking, then use axios
      //to fetch data for individual 
    
      //This is required to open flatlist on intiial scroll
      
      const indexPostionOfArticle = data.findIndex(obj => obj.id == id)
     
    
 


     
    
    
        return (
           <Articlepage data = {data} itemIndex={indexPostionOfArticle}  />
          
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
    
    export default Articles