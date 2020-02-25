import React, { Component , useState , useEffect } from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList,
Image,
TouchableWithoutFeedback,
Keyboard,
ActivityIndicator, Alert ,Dimensions, Animated
} from 'react-native' 
import {ScrollView ,PinchGestureHandler , State } from 'react-native-gesture-handler'
import HTML from 'react-native-render-html'


import SocialShare from '../shared/SocialShare';
import SocialShareBigButton from '../shared/SocialShareBigButton';
import LatestArticlesMemo from '../shared/LatestArticles'
//import RelatedArticles from '../shared/RelatedArticles'
import RBSheet from "react-native-raw-bottom-sheet";




const Articlepage = ({data,itemIndex}) =>{
   // data =[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]





   const [newData,setNewData] = useState(data);


   useEffect(() => {
      
       
  // console.log(newData);
   
      let array2 = data.map((a,index) => {
       var returnValue = {...a};
     
       if (index !== itemIndex) {
         returnValue.fulltext = "";
         returnValue.thumbnail = "";
         returnValue.title = "";
         //console.log("I am here");
       }
     
       return returnValue
     })
   
     
     setNewData(array2);
   
     }, [data]); 


    //const[loadData,setLoadData] = useState(data[itemIndex]);

  const  endReached = ()=>{ 

    //console.log("I am fired");
    
       setNewData(data);
     
    }

//get The Category Name from the data, so for the Latest .. the related would be different.


    return (
    



         <FlatList 



         horizontal = {true}
        
        

          onEndReached={endReached}
           onEndReachedThreshold={100}
            snapToAlignment={"center"}
         snapToInterval={Dimensions.get('window').width}
          decelerationRate={"fast"}

          //  pagingEnabled
          pagingEnabled
       
        data ={newData}
        renderItem = {({item,index}) => (<ArticleItem item ={item} itemIndex={index}  />) } //this spread operator
        keyExtractor={(item , index)=> `new_${item.id}${index.toString()}`}
       // ItemSeparatorComponent ={() => <View style={{width:10}}></View>}
        showsHorizontalScrollIndicator={true}

       
     
           getItemLayout={(data, index) => ({
          length: Dimensions.get('window').width, //- Here
          offset: Dimensions.get('window').width * index,
          index,
           }
           )}
       initialScrollIndex = {itemIndex}
       //this sheet not working  renderScrollComponent
     //renderScrollComponent={() => (<ScrollView  contentOffset ={{x: Dimensions.get('window').width * itemIndex , y: Dimensions.get('window').length }} initialScrollIndex = {itemIndex} horizontal style={{width:Dimensions.get('window').width} }/>)}


        //initialNumToRender ={10}
       //End This is required for full news view



       
       

      
     //  ListFooterComponent ={()=><View><Text>This is Header</Text></View>}
       
     />
 
    )

}

export default Articlepage


const ArticleItem = ({item,itemIndex}) => { //instead of passing arguments as just props, we destructing the property of props inside argument

const cat_title = item.category_title;





const renderLatest = ()=>{
  if(item.fulltext !==''){
    return <LatestArticlesMemo />
  } 
}


  const { width } = Dimensions.get('window')
  SCREEN_HEIGHT = Dimensions.get('window').height;
  BASE_FONT_SIZE = 18
   const[scrollWidth,setScrollWidth] = useState(width);
   const[contentFontSize,setContentFontSize] = useState(BASE_FONT_SIZE);
  //scale = new Animated.Value(1)
  const [scale] = React.useState(new Animated.Value(1))
 const refRBSheet = React.useRef();

const myGesture = Animated.event(
  [
    {
      nativeEvent: { scale: scale }
    }
  ],
  {
    useNativeDriver: true
  }
)
myHandler =(event)=> {
//console.log(event);
//console.log("state:"+event.nativeEvent.state);
//console.log("oldState:"+event.nativeEvent.oldState);
//console.log(event.nativeEvent);

// if(event.nativeEvent.numberOfPointers ===1 ){
//   setScrollWidth(width);
// }

if(event.nativeEvent.numberOfPointers ===2 ){
 //console.log("set width");

//setScrollWidth(width*event.nativeEvent.scale);
setScrollWidth(width);
setContentFontSize(BASE_FONT_SIZE*event.nativeEvent.scale);



  //if (event.nativeEvent.state === State.ACTIVE) {
    
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true
    }).start()
 // }
  }
}

    return (
      <View>


      <PinchGestureHandler
      onGestureEvent={myGesture }
 
       onHandlerStateChange={myHandler} 
   >
    
     <Animated.ScrollView 
     
     style ={{
       width: scrollWidth,
      
       

         
       transform: [
        { scaleX: scale },
        { scaleY: scale },
      ]
     }}

    
     >
      

    
      {item.thumbnail !== "" ?<Image
        source={{
          uri: item.thumbnail
        }}
        style={{
          width: '100%',
         height: scrollWidth/2,
         alignSelf:"center",
         alignItems:"center",
         flex:1,
         justifyContent:"space-evenly",
        

        }}
      
      />:<ActivityIndicator/>}
    
 
        <View 
        
        
        
        style ={{width:"95%",
          alignSelf:"center",
          alignItems:"center",
          flex:1,
          justifyContent:"space-evenly",
          
        }}
        > 
    
{/* <Text style={{fontSize : contentFontSize}} >ScrollWidth : {scrollWidth}FontSize:{contentFontSize}</Text> */}
{item.title !== "" &&<Text style={{marginTop: 40,fontSize:29,fontWeight:"bold"}}>
{item.title}</Text>}
    
    
    
     {item.fulltext !== "" &&<HTML 
     html={item.fulltext + contentFontSize} 
     baseFontStyle ={ {fontSize: contentFontSize} }
     staticContentMaxWidth={scrollWidth}
     alterChildren={node => {
      if (node.name === "iframe" || node.name === "img") {
       delete node.attribs.width;
       delete node.attribs.height;
      }
        return node.children;
      }}

     />}  

  

      
     
    {/* <HTML html={item.fulltext}/>  */}
        
    
           </View>
         
          {renderLatest()} 
        
        

          </Animated.ScrollView>  
         
          </PinchGestureHandler>    
 {/* Start Bottom Action       */}
<View
      style={{
        width: 50,  
        height: 50,   
        borderRadius: 50,            
        backgroundColor: '#ee6e73',                                    
        position: 'absolute',                                          
        bottom: 60,                                                    
        right: 30, 

      }}
    >

<TouchableWithoutFeedback onPress={() =>{

refRBSheet.current.open()
}
  
   }>
      <Image
       style={{
         width: 50,
         height: 50,

       }}
        source={require('../../images/share.png')}
      />
    </TouchableWithoutFeedback>

    
      
      <RBSheet
        ref={refRBSheet}
        height={220}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
            
            flexDirection: 'column',
          }
        }}
       
      >
        <SocialShareBigButton  url={item.link} message={item.title} refRBSheet={refRBSheet}/>
      </RBSheet>
    </View>

 {/* End Bottom Action */}


       <BottomToolbar url={item.link} message={item.title}/>
       
       </View>
    )
  }

const BottomToolbar =({url,message})=>{

  const { width } = Dimensions.get('window') 
  return(
    <View 
    style ={{
      
    width:width,
    height: 50,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5

  }}
   >

  <SocialShare url={url} message={message}/>

   </View>
  )
}



