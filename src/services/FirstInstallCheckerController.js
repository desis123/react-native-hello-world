
import React from 'react'
import {Platform} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import NetInfo from "@react-native-community/netinfo";
import axios from 'axios';
import * as c from '../constants'
import DeviceInfo from 'react-native-device-info';




const FirstInstallCheckerController = ({navigation}) =>{
    

    const [firstLaunch,setFirstLaunch] = React.useState(null);



  

 




    React.useEffect(() => {
       
        AsyncStorage.getItem("alreadyInstalledd").then(value => {
            if(value == null){
                 AsyncStorage.setItem('alreadyInstalledd', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                 setFirstLaunch(true)

            

            }
            else{
                setFirstLaunch(false)
            }
        
        
        
        
        }) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
    


           axios.get(`${c.API_IP_ADDRESS}${c.API_KEY}`).then(response=>{
               console.log(response);
           })
          

           console.log(Platform.Version);
           let version = DeviceInfo.getVersion();
           console.log("version"+version);
           let buildNumber = DeviceInfo.getBuildNumber();
           console.log("buildNumber"+buildNumber);


           DeviceInfo.getBuildId().then(buildId => {
           console.log("BuildId   "+buildId )
          });


         


          (async () => {
           var userAgent = await DeviceInfo.getUserAgent();
           console.log(userAgent)
          
        })().catch(err => {
            console.error(err);
        });

      }, []); // Only re-run the effect if count changes

    
if(firstLaunch === null){
        return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
    }else if(firstLaunch == true){
        return <FirstLaunchComponent navigation={navigation}/>
    }else{
        return null; 
    }



}

export default FirstInstallCheckerController;
//This is seperate component

const FirstLaunchComponent = ({navigation}) =>{


     

    React.useEffect(() => {
        setTimeout(function(){  navigation.push("Article",{id: "104216"}) }, 500);
       
        
    }, [])
  
     return  null;
}
