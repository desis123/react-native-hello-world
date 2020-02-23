import React from 'react'
import { View, StyleSheet, Image ,Text } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button";
import Share from 'react-native-share';

const SocialShareBigButton = ({url,message,refRBSheet}) => {

    
    const [result, setResult] = React.useState('');
  const shareSingleImage = async (provider) => {
    const shareOptions = {
     title: message,
     message:message,
      url: url,
      social:  Share.Social[provider] ,
     
      whatsAppNumber: "9",
      ...((provider==='MESSENGER' || provider==='SMS') && {message: message})   // conditional add object property https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object/38483660
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
      console.log(ShareResponse);
      refRBSheet.current.close();
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };


 
  const shareForAllButton = async () => {
    const shareOptions = {
     title: message,
     message:message,
   
      url: url,
     
    };

    // If you want, you can use a try catch, to parse
    // the share response. If the user cancels, etc.
    try {
      const ShareResponse = await Share.open(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
      refRBSheet.current.close();
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };


    return (
      <View style={styles.maincontainer}>
        <View style={styles.container}>
           <Whatsappbutton shareSingleImage={shareSingleImage} />
           <Messengerbutton shareSingleImage={shareSingleImage} />
           <Emailbutton shareSingleImage={shareSingleImage} />
           <FBbutton shareSingleImage={shareSingleImage} />
           </View>
         
        <View style={styles.container}>
           <Twitterbutton shareSingleImage={shareSingleImage} />
           <Instagrambutton shareSingleImage={shareSingleImage} />
           <SMSbutton shareSingleImage={shareSingleImage} />
           <Allbutton shareForAllButton={shareForAllButton} />
           </View>
           </View>
    )
}

export default SocialShareBigButton



//Individual Buttons Component

const FBbutton = ({shareSingleImage }) => {
    return <View><AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={60} 
      width={60} 
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
    <Text>Facebook</Text>
    </View>
  }
  
  const Whatsappbutton = ({shareSingleImage }) => {
    return <View><AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={60} 
      width={60} 
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
    <Text>WhatsApp</Text>
    </View>
  }

  const Messengerbutton = ({shareSingleImage }) => {
    return <View><AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={60} 
      width={60} 
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
    <Text>Messenger</Text>
    </View>
  }



  const Twitterbutton = ({shareSingleImage }) => {
    return <View><AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={60} 
      width={60} 
     onPress={next => {
     
       shareSingleImage("TWITTER").then(next())
      }}>
      <Image
              //We are showing the Image from online
              source={
               require('../../images/twitter.png')}
              
              style={styles.ImageIconStyle}
              
              />
    </AwesomeButton>
    <Text>Twitter</Text>
    </View>
  }


  const SMSbutton = ({shareSingleImage }) => {
    return <View><AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={60} 
      width={60} 
     onPress={next => {
     
       shareSingleImage("SMS").then(next())
      }}>
      <Image
              //We are showing the Image from online
              source={
               require('../../images/sms.png')}
              
              style={styles.ImageIconStyle}
              
              />
    </AwesomeButton>
    <Text style={{alignSelf:'center'}}>SMS</Text>
    </View>
  }


  const Emailbutton = ({shareSingleImage }) => {
    return <View><AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={60} 
      width={60} 
     onPress={next => {
     
       shareSingleImage("EMAIL").then(next())
      }}>
      <Image
              //We are showing the Image from online
              source={
               require('../../images/gmail.png')}
              
              style={styles.ImageIconStyle}
              
              />
    </AwesomeButton>
    <Text style={{alignSelf:'center'}}> Email</Text>
    </View>
  }



  const Instagrambutton = ({shareSingleImage }) => {
    return <View><AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={60} 
      width={60} 
     onPress={next => {
     
       shareSingleImage("INSTAGRAM").then(next())
      }}>
      <Image
              //We are showing the Image from online
              source={
               require('../../images/instagram.png')}
              
              style={styles.ImageIconStyle}
              
              />
    </AwesomeButton>
    <Text style={{alignSelf:'center'}}> Instagram</Text>
    </View>
  }


  const Allbutton = ({shareForAllButton }) => {
    return <View><AwesomeButton 
      progress ={true} 
      raiseLevel={2}
      backgroundColor ={'#fff'} 
      backgroundDarker ={'#fff'}
      backgroundShadow ={'rgba(0, 0, 0, 0.1)'} 
      borderColor ={'#ffffff'} 
      borderRadius={50} 
      height={60} 
      width={60} 
     onPress={next => {
     
      shareForAllButton().then(next())
      }}>
      <Image
              //We are showing the Image from online
              source={
               require('../../images/all.png')}
              
              style={styles.ImageIconStyle}
              
              />
    </AwesomeButton>
    <Text>Show All</Text>
    </View>
  }

  

  const styles = StyleSheet.create({
    maincontainer:{
      flex :1,
      
      justifyContent:"space-evenly",
      color: "blue"

    },

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
      height: 50,
      width: 50,
      resizeMode: 'stretch',
    },

  });