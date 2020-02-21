import React from 'react'
import { View, StyleSheet, Image ,Text } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button";
import Share from 'react-native-share';

const SocialShare = ({url,message}) => {
  const [result, setResult] = React.useState('');
  const shareSingleImage = async (provider) => {
    const shareOptions = {
    //  title: 'This is Title',
      url: url,
      social:  Share.Social[provider] ,
     
      whatsAppNumber: "9",
      ...(provider==='MESSENGER' && {message: message})   // conditional add object property https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object/38483660
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
      console.log(ShareResponse);
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };




    return (
        <View style={styles.container}>
          <View style={styles.commenetbox}><Text></Text></View>

          
           
           <Whatsappbutton shareSingleImage={shareSingleImage} />
           <Messengerbutton shareSingleImage={shareSingleImage} />
           <FBbutton shareSingleImage={shareSingleImage} />
        </View>
    )
}

export default SocialShare



//Individual Buttons Component

const FBbutton = ({shareSingleImage }) => {
    return <AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={40} 
      width={40} 
     onPress={next => {
     
       shareSingleImage("FACEBOOK").then(next())
      }}>
      <Image
              //We are showing the Image from online
              source={
               require('../../images/fb.png')}
              
              style={styles.ImageIconStyle}
              
              />
    </AwesomeButton>
  }
  
  const Whatsappbutton = ({shareSingleImage }) => {
    return <AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={40} 
      width={40} 
     onPress={next => {
     
       shareSingleImage("WHATSAPP").then(next())
      }}>
      <Image
              //We are showing the Image from online
              source={
               require('../../images/what.png')}
              
              style={styles.ImageIconStyle}
              
              />
    </AwesomeButton>
  }

  const Messengerbutton = ({shareSingleImage }) => {
    return <AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={40} 
      width={40} 
     onPress={next => {
     
       shareSingleImage("MESSENGER").then(next())
      }}>
      <Image
              //We are showing the Image from online
              source={
               require('../../images/mes.png')}
              
              style={styles.ImageIconStyle}
              
              />
    </AwesomeButton>
  }

  const styles = StyleSheet.create({

    container :{
      flex :1,
      flexDirection:"row",
      justifyContent:"space-evenly",
      color: "blue"
    },
    commenetbox :{
      height: 35,
      width:150,
      backgroundColor: '#D3D3D3',
      borderRadius : 25,
      marginTop:7,
      alignItems:'center',
      justifyContent: 'center'
    },
    ImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },

  });