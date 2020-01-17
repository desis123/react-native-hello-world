import React from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList,
TouchableWithoutFeedback,
Keyboard,
SafeAreaView, ScrollView , Dimensions
} from 'react-native' 

import NewsItem from './NewsItem'

const NewsPanel = ({data, ...rest}) => { //this destructuring
  const{style,titleStyle,ctaText,title,onCTAPress} = rest;


    return (
      <View style={[styles.container,style]}>
      {title && <Header title={title} style={titleStyle} ctaText={ctaText} onPress={onCTAPress} />}       
          <FlatList 



             horizontal = {rest.isHorizontal}
             numColumns={rest.cols > 2 ? 2 : rest.cols} 
             
            //end conditional ///
            data ={data}
            renderItem = {({item,index}) => (<NewsItem item ={item} data={data} {...rest} />) } //this spread operator
            keyExtractor={(item , index)=> `new_${item.title}${index.toString()}`}
            ItemSeparatorComponent ={() => <View style={{width:10}}></View>}
            showsHorizontalScrollIndicator={false}


           // This is required for Full news view like 
            // getItemLayout={(data, index) => ({
            //   length: Dimensions.get('window').width, //- Here
            //   offset: Dimensions.get('window').width * index,
            //     index,
            //   }
            // )}
            // initialScrollIndex ={4}
             //initialNumToRender ={10}
            //End This is required for full news view



            


           
            //ListHeaderComponent ={()=><View><Text>This is Header</Text></View>}
            
         /> 
        
      </View>
    )
}

export default NewsPanel


const Header = ({title, ctaText, onPress, style}) => {
  return (
      <View style={styles.sectionHeader}>
          <Text style={[styles.sectionHeaderText, style]}>{title}</Text>
          {onPress && <Text style={[style, styles.cta]} onPress={onPress}>{ctaText}</Text>}
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
},
   
    list: {
      marginTop: 10,
      //backgroundColor: 'lightgrey',
      flex: 1,
    },
    cta: {
      color: "#D1644F",
      fontSize: 14,
      fontWeight: '500',
      
     
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 8 * 1.5,
    justifyContent: 'space-between',
},

sectionHeaderText: {
  color: '#363434',
  fontSize: 19,
  fontWeight: 'bold',
  
  //flex: 1
},

    
  });
  NewsPanel.defaultProps = {
   
    
    style: {},
   title : "my Title",
    
    titleStyle: {},
    ctaText: "View All",
    onCTAPress: null,
    cols: 0,
    showDivider:true
};