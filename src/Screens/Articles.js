import React from 'react'
import {StyleSheet,View , ActivityIndicator} from 'react-native'
import Articlepage from '../components/Articlepage'
import { InteractionManager } from 'react-native';

const Articles  = ({ route, navigation }) => {
  
  const [isVisible, setIsVisible] = React.useState(false);

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
     
    
      React.useEffect(() => {
       
        const defer = InteractionManager.runAfterInteractions(() =>
          setIsVisible(true)
        );
    
        return () => defer.cancel();
      }, []);


     
      if (!isVisible) {
        return (
        <View style = {styles.container}>
        <ActivityIndicator
           
           color = '#bc2b78'
           size = "large"
           style = {styles.activityIndicator}/>
        </View>
        )
      }
  
      return (
        <Articlepage data = {data} itemIndex={indexPostionOfArticle}  />
        // <View><Text>I am ready to go</Text></View>
      );


    
      
    } 
    
    export default Articles 


    const styles = StyleSheet.create ({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: 70
      },
      activityIndicator: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         height: 80
      }
   })