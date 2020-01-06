import React from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList,
TouchableWithoutFeedback,
Keyboard,
SafeAreaView, ScrollView
} from 'react-native' 

import NewsItem from './NewsItem'

const NewsPanel = ({data, ...rest}) => { //this destructuring

    return (
        <View style= {styles.list}>
          <FlatList 
             horizontal = {rest.isHorizontal}
             numColumns={rest.cols > 2 ? 2 : rest.cols} 
             
            //end conditional ///
            data ={data}
            renderItem = {({item}) => (<NewsItem item ={item} {...rest} />) } //this spread operator
            keyExtractor={(item , index)=> `new_${item.title}${index.toString()}`}
            ItemSeparatorComponent ={() => <View style={{width:10}}></View>}
            showsHorizontalScrollIndicator={false}
           // ListHeaderComponent ={()=><View><Text>This is Header</Text></View>}ad
         /> 
        
      </View>
    )
}

export default NewsPanel

const styles = StyleSheet.create({
   
    list: {
      marginTop: 10,
      //backgroundColor: 'lightgrey',
      flex: 1,
    },

    
  });
