import React, { Component , useState , useEffect } from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList,
TouchableWithoutFeedback,
Keyboard,
SafeAreaView, ScrollView,Alert ,Dimensions, AppRegistry
} from 'react-native' 

// import Header from './components/Header'
// import NewsItem from './components/news/NewsItem'
import NewsPanel from './components/news/NewsPanel'
// import Articles from './data/newsData.js'
 import BanglaNews from './data/tazaNewsData.js'

import { useAsync } from 'react-async-hook';


import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {fetch_news} from "./src/redux/actions";
import * as c from './src/constants'






// import NetInfo from "@react-native-community/netinfo";
// import { getActiveChildNavigationOptions } from 'react-navigation'




//const fetchCategory = async id =>
  //(await fetch(`http://taza-khobor.org/bd/index.php?option=com_hoicoiapi&task=getContents&catid=${id}&token=amitumishe`)).json();


  

const DashboardCom = React.memo(({navigation})=>{

  const content = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method
   
const outdata = "Access to outdata";
  console.log(content.newsReducer);

  //console.log(content.newsReducer);

  const {exclusive, country,  law , lifestyle , entertainment,  international , national} = content.newsReducer;

//async action
// function getData() {
  


//   return dispatch => {
//     axios.get(c.ALL_NEWS_URL)
//     .then(res =>{
     
//       console.log( res);

//       console.log(res.data);
    
//        dispatch(fetch_news(res.data))
     
      
      
//     }
      
//     );
//   };
  
// }



 function getData(){
  
     return dispatch => {
      var o = {};
       let requests = [];
       c.CATEGORIES.map((category) => {
           let url =  `${c.API_URL }[${category}]${c.API_KEY}`;

           
          
           requests.push(axios.get(url))
       });
       axios.all(requests).then(axios.spread((...args) => {

        //https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object
        for(i=0;i<args.length;i++){
            for(var key in args[i].data){
           
            o[key]= args[i].data[key]; //this line took me two days to figure out .....
             
           
        }
      }



      console.log(o.exclusive);

      dispatch(fetch_news(o))

//const {exclusive, national, country, international, lifestyle,entertainment,law} = o;



    //     for(i=0;i<args.length;i++){
    //       newArr[i] = (args[i].data);
    //     }

       
    //  let [exclusive, national, country, international, lifestyle,entertainment,law] = newArr;
    //  console.log(exclusive);
    //  dispatch(fetch_news({exclusive, national, country, international, lifestyle,entertainment,law}))
       
      
      
     

     }))


// axios.all(requests).then(function(results) {
//   results.forEach(function(response) {

//     console.log(response);
//      // o[response.identifier] = response.value;
//   })
// });



      
     } 
 }





















useEffect(() => {
 
  dispatch(getData());
  
}, []);
    
const national_data = BanglaNews;

    
    //const national_data =  useAsync(fetchCategory, ["18"]);
    // const lifestyle_data = useAsync(fetchCategory, ["12"]);

     

//   function getdata(id){
//     this["category_data"+id] = useAsync(fetchCategory, [id]);
//     return  this["category_data"+id];
//  }

 

//  console.log(getdata(12));

    // const [windowsWidth, setWindowsWidth] = useState(Dimensions.get('window').width);
    // contentSizeChangeHandler =()=>{
    //     setWindowsWidth(Dimensions.get('window').width);
    // }

    const windowsWidth = Dimensions.get('window').width;

    //const [windowsWidth, setwindowsWidth] = 


    const pressHandler =(id,data)=>{ 

      navigation.push('Category',{id : id, data:data})
        // Alert.alert(
        //     `Alert Title${id}`,
        //     'My Alert Msg',
        //     [
        //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //       {
        //         text: 'Cancel',
        //         onPress: () => console.log('Cancel Pressed'),
        //         style: 'cancel',
        //       },
        //       {text: 'OK', onPress: () => console.log('OK Pressed')},
        //     ],
        //     {cancelable: false},
        //   );

    //  setTodos( prevTodos =>  // Return should be an array . so we are just making a new array ... but using filter.
    //      prevTodos.filter( item => item.key !== id)
    // );
       

    }

    let isHorizontal = true;
   
   


    return(

        
          
      <View>
        <ScrollView>
       
             {/* <NewsPanel 
              title = "Politics"
              onCTAPress={() => (console.log("OnPress I did it"))}
               data={todos} 
               pressHandler = {pressHandler}
               isHorizontal ={true}
               myextrapropsfornewsitem = "."
               cols ={1}
               winWidth = {windowsWidth}
                />   */}
         <View>
           <Text>Title 1</Text>
              <NewsPanel 
              title ="National"
              onCTAPress={() => (console.log("OnPress I did it"))}
               data={lifestyle} 
               pressHandler = {pressHandler}
               isHorizontal = {false}
               myextrapropsfornewsitem = "."
               cols ={2}
               winWidth = {windowsWidth}
                />  
        </View>
        <View>
        <Text>Title 2</Text> 
                <NewsPanel 
               title ="LifeStyle"

               onCTAPress={() => (console.log("OnPress I did it"))}
               data={national} 
               pressHandler = {pressHandler}
               isHorizontal ={false}
               myextrapropsfornewsitem = "."
               cols ={1}
               winWidth = {windowsWidth}
                />    
        </View>
        

                
             
               
             
                 
        
       
  </ScrollView>
</View> 
    )
} )
export default DashboardCom 


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