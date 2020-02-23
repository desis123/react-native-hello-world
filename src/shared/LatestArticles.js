import React from 'react'
import {Text,View ,TouchableWithoutFeedback , Dimensions , StyleSheet , FlatList} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';

import axios from 'axios';
import { fetch_news } from "../redux/actions";

import { CachedImage } from 'react-native-cached-image';
import * as c from '../constants'


const LatestArticles = () => {
 

    const state = useSelector(state => state); //this hook gives us redux store state
 const dispatch = useDispatch(); //this hook gives us dispatch method


 const [isLoading,setIsLoading] = React.useState(true);
const [data, setData] = React.useState();
const [catName,setCatName] = React.useState();


  React.useEffect(() => {

    console.log("I am rendering Latest");
     //Try to get the Latest Article from Redux First
     setData(state.newsReducer.latest);
     //If Redux Failed , Call the Database
     console.log(state.newsReducer.latest)

     let url = `${c.API_LATEST_URL}${c.API_KEY}`;


     axios.get(url)
     .then(function (response) {
     // handle success
        
        //Here Check with lodash , if redux data and server data is same, if not same 
        //Then save to redux adn setData ... if same do nothing. 

        setData(response.data.latest)
     })
     .catch(function (error) {
     // handle error
     console.log(error);
     })

      
  }, [])

  const renderfunc =({item}) =>{
   
    return(<RenderItem item={item}   data={data} />)    
} 

    return (
 
        <FlatList
        data={data}
        
        keyExtractor={item => item.id}
        renderItem={renderfunc}

        // renderItem={({ item }) =><RenderItem item={item}  navigation={navigation} data={data} />}
      />
     )
}


 
const LatestArticlesMemo = React.memo(LatestArticles)
export default LatestArticlesMemo


//Seperated Component

const RenderItem = ({item,data}) =>{
    const { id, title,  thumbnail } = item;

    const pressHandler=(id,data)=>{
        //navigation.push('Articles',{id : id, data:data})
      }

    return (

        <TouchableWithoutFeedback onPress ={() => pressHandler(id,data)}>
        <View style={styles.itemViewFirst}>
          <View style={styles.imgContainerFirst}>
            <CachedImage style={styles.imageStyleFirst}
              source={{ uri: thumbnail }}
            />
          </View>
  
          <View style={styles.itemInfo}>
            <Text style={styles.name}>
              {title}
            </Text>
  
          </View>
        </View>
        </TouchableWithoutFeedback>
  
      )

   

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  
  
    itemViewFirst: {
      flex: 1,
  
      width,
      borderBottomWidth: 0.5,
      borderColor: '#ffffff',
      borderStyle: 'solid',
      paddingHorizontal: 12,
  
      backgroundColor: "#fff",
    shadowColor: "#ffffff",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.81,
    shadowRadius: 5.16,
    elevation: 7,
  marginBottom : 50
    },
  
   
  
  
    imgContainerFirst: {
      flex: 0,
      borderColor: '#f4f4f4',
      borderWidth: 1.5,
      height: 220,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
  
  
   
  
    imageStyleFirst: {
      height: 220,
      width: Dimensions.get('window').width,
     
    },
  
  
    
  
  
    itemInfo: {
      flex: 1,
      marginHorizontal: 10,
     
      position: 'absolute',  left: 0, right: 0, bottom: 0, justifyContent: 'space-between', alignItems: 'center'


    },
  
  
 
    name: {
        
      fontFamily: 'Verdana',
      fontSize: 25,
      color: '#FFFFFF',
      textAlign: 'left',
      marginTop : -60,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    


    },

  
  
  });