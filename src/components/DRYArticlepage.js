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
SafeAreaView, Alert ,Dimensions, Button ,Animated
} from 'react-native' 
import {ScrollView ,PinchGestureHandler , PanGestureHandler,State } from 'react-native-gesture-handler'
import HTML from 'react-native-render-html'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import PinchZoomView from 'react-native-pinch-zoom-view';
import { BottomTabBar } from 'react-navigation-tabs';
import Share from 'react-native-share';





const DRYArticlepage = ({data,itemIndex}) =>{
   // data =[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]


// console.log("newdata:")
 
// var foo = new Array(9);
// foo.splice(2, 0, data[2]);

//console.log(data);


 const [newData,setNewData] = useState(data);


useEffect(() => {
   
    


   let array2 = data.map((a,index) => {
    var returnValue = {...a};
  
    if (index !== itemIndex) {
      returnValue.fulltext = "";
      //console.log("I am here");
    }
  
    return returnValue
  })

  
  setNewData(array2);

  }, [data]); 


// let array2 = maindata.map((a,index) => {
//   var returnValue = {...a};

//   if (index !== itemIndex) {
//     returnValue.fulltext = "";
//     //console.log("I am here");
//   }

//   return returnValue
// })
// //console.log(itemIndex);
// //console.log(array2);





 //console.log(newData);
    //const[loadData,setLoadData] = useState(data[itemIndex]);

  const  endReached = ()=>{ 

    //console.log("I am fired");
    
       setNewData(data);
     
    }
    




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



       
       

      
      //ListHeaderComponent ={()=><View><Text>This is Header</Text></View>}
       
     />

    )
   
}

export default DRYArticlepage


const ArticleItem = ({item,itemIndex}) => { //instead of passing arguments as just props, we destructing the property of props inside argument

  const { width } = Dimensions.get('window')
  SCREEN_HEIGHT = Dimensions.get('window').height;
  BASE_FONT_SIZE = 18
   const[scrollWidth,setScrollWidth] = useState(width);
   const[contentFontSize,setContentFontSize] = useState(BASE_FONT_SIZE);
 scale = new Animated.Value(1)


myGesture = Animated.event(
  [
    {
      nativeEvent: { scale: this.scale }
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
console.log(event.nativeEvent);

// if(event.nativeEvent.numberOfPointers ===1 ){
//   setScrollWidth(width);
// }

if(event.nativeEvent.numberOfPointers ===2 ){
 //console.log("set width");

//setScrollWidth(width*event.nativeEvent.scale);
setScrollWidth(width);
setContentFontSize(BASE_FONT_SIZE*event.nativeEvent.scale);



  //if (event.nativeEvent.state === State.ACTIVE) {
    
    Animated.spring(this.scale, {
      toValue: 1,
      useNativeDriver: true
    }).start()
 // }
  }
}

    return (
      <View>


      <PinchGestureHandler
      onGestureEvent={this.myGesture }
 
       onHandlerStateChange={this.myHandler} 
   >
    
     <Animated.ScrollView 
     
     style ={{
       width: scrollWidth,
      
       

         
       transform: [
        { scaleX: this.scale },
        { scaleY: this.scale },
      ]
     }}

    
     >
      

    
<Image
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
      
      />
    
 
        <View 
        
        
        
        style ={{width:"95%",
          alignSelf:"center",
          alignItems:"center",
          flex:1,
          justifyContent:"space-evenly",
          
        }}
        > 
    
{/* <Text style={{fontSize : contentFontSize}} >ScrollWidth : {scrollWidth}FontSize:{contentFontSize}</Text> */}
<Text style={{marginTop: 40,fontSize:29,fontWeight:"bold"}}>
{item.title}</Text>
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
           
          </Animated.ScrollView>  
         
          </PinchGestureHandler>    
         
       <BottomToolbar />
      
       </View>
    )
  }

const BottomToolbar =()=>{

  const { width } = Dimensions.get('window') 
  return(
    <View 
    style ={{
      
      width:width,
    height: 80,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5

  }}
   ><Text>This </Text>
   </View>
  )
}
  