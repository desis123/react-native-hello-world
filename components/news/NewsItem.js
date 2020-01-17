import React , { useState } from 'react'
import { StyleSheet , View , Text , TouchableOpacity , TouchableWithoutFeedback,Image ,Dimensions , Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { CachedImage } from 'react-native-cached-image';


   const windowWidth = Dimensions.get('window').width;



const NewsItem = ({item , pressHandler ,data, winWidth, myextrapropsfornewsitem ,cols}) => { //instead of passing arguments as just props, we destructing the property of props inside argument




  return (
    <TouchableWithoutFeedback onPress ={() => pressHandler(item.id,data)}>
   
      <View  style={ (cols >1 ) ? "" : styles.listItem} >
           
      <View style={ (cols >1 ) ? [styles.multiCol,{width:winWidth*.44} ]: [styles.containerWrapper,{width:winWidth*.75}]}>
      <CachedImage
          style={(cols > 1) ? styles.MultiImageStyle :styles.imageStyle}
          source={{uri: item.thumbnail}}
        />


  <Text style={(cols > 1) ? styles.MultiImageStyle :styles.itemText}>{item.title}{myextrapropsfornewsitem}</Text>
      
        </View>
      </View>
      
      </TouchableWithoutFeedback>
 
  )
}

export default NewsItem

let MIN_HEIGHT = 105;

const styles = StyleSheet.create({

  container: {
    borderRadius: 8, flex: 2
},

containerWrapper: {
  backgroundColor: "#fff",
  shadowColor: "#c2c4cb",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.81,
  shadowRadius: 5.16,
  elevation: 20,
  flexDirection : 'row',
  borderRadius: 10,
  padding: 1,
  marginTop: 1,
  borderColor: '#bbb',
  //borderWidth: 1,
  borderStyle: "dashed",
  borderRadius: 10,
  
  
  alignItems: 'center',
  //width: windowWidth *.75,
  height : 100
},


  listItem: {
  
    height : 120,
},

  itemText: {
    marginLeft: 3,
    //padding: 6,
    marginRight :100
   
   
  },
  imageStyle :{
    width: 100,
    height : 100,
    borderRadius : 10,
    //flex : 0.4

  },

  singleCol:{paddingVertical: 8},

  multiCol:{
     padding: 10,
  
  backgroundColor: "#fff",
  shadowColor: "#c2c4cb",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.81,
  shadowRadius: 5.16,
  elevation: 20,
  
  borderRadius: 10,
  padding: 1,
  marginTop: 1,
  borderColor: '#bbb',
  //borderWidth: 1,
  borderStyle: "dashed",
  borderRadius: 10,
  
  
  alignItems: 'center',
 // width: windowWidth *.44,
  
  marginVertical: 3,
 

},


MultiImageStyle :{
  
  width : "100%",
  height : 100,
  borderRadius : 10,
  //flex : 0.4

},
 
 

});
