/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState , useRef} from 'react';
import {
  Alert,
  Button,
  Platform,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  useNativeDriver

} from 'react-native';

import Share from 'react-native-share';

import images from './images/imagesBase64';
import Icon from 'react-native-vector-icons/FontAwesome';
// import * as Animatable from 'react-native-animatable';

import AwesomeButton from "react-native-really-awesome-button";
import BottomSheet from 'reanimated-bottom-sheet'


// const AnimatableIcon = Animatable.createAnimatableComponent(Icon);



const App = () => {


  const bottomSheetRef = useRef()

  const[animatedValue] = useState(new Animated.Value(1));
 
// const[scale,setScale] = useState(new Animated.value(1));
  const [packageSearch, setPackageSearch] = useState<string>('');
  const [result, setResult] = useState<string>('');

  /**
   * You can use the method isPackageInstalled to find if a package is installed.
   * It returns an object { isInstalled, message }.
   * Only works on Android.
   */
  const checkIfPackageIsInstalled = async () => {
    const {isInstalled} = await Share.isPackageInstalled(packageSearch);

    Alert.alert(
      `Package: ${packageSearch}`,
      `${isInstalled ? 'Installed' : 'Not Installed'}`,
    );
  };

  function getErrorString(error, defaultValue) {
    let e = defaultValue || 'Something went wrong. Please try again';
    if (typeof error === 'string') {
      e = error;
    } else if (error && error.message) {
      e = error.message;
    } else if (error && error.props) {
      e = error.props;
    }
    return e;
  }

  /**
   * This functions share multiple images that
   * you send as the urls param
   */
  const shareMultipleImages = async () => {
    const shareOptions = {
      title: 'Share file',
      failOnCancel: false,
      urls: [images.image1, images.image2],
    };

    // If you want, you can use a try catch, to parse
    // the share response. If the user cancels, etc.
    try {
      const ShareResponse = await Share.open(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  /**
   * This functions share a image passed using the
   * url param
   */
  const shareEmailImage = async () => {
    const shareOptions = {
      title: 'This is Title',
      url: "https://bdkotha.com/amusement/49814-2020-01-18-11-36-31",
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  /**
   * This functions share a image passed using the
   * url param
   */
  // const shareSingleImage = async () => {
  //   const shareOptions = {
  //     title: 'Share file',
  //     url: images.image1,
  //     failOnCancel: false,
  //   };

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     setResult(JSON.stringify(ShareResponse, null, 2));
  //   } catch (error) {
  //     console.log('Error =>', error);
  //     setResult('error: '.concat(getErrorString(error)));
  //   }
  // };




  const shareSingleImage = async (provider) => {
    const shareOptions = {
      title: 'This is Title',
      url: "http://dailyrightnow.com/more/law/5171-2020-01-14-06-58-19",
      social:  Share.Social[provider] ,
      //message : "This is message"
      
      
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

//For Animation


  async function shareSingleImage2 ()  {
    const shareOptions = {
      title: 'This is Title',
      url: "http://dailyrightnow.com/more/law/5171-2020-01-14-06-58-19",
      social: Share.Social.FACEBOOK,
      //message : "This is message"
      
      
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

  
const handleBottomSheet = () => {
  bottomSheetRef.current.snapTo(0)
  
console.log("I am bootm sheet")

}  


const  handlePressIn = () => {
  
  Animated.spring(animatedValue, {
    toValue: .2,
    useNativeDriver: true

  }).start()
}
const  handlePressOut = () => {
  console.log("presse ")

  Animated.spring(animatedValue, {
    toValue: 2,
    speed:12,
    bounciness:8,
    useNativeDriver: true

  }).start()
}

const  handlePressIn1 = () => {
  
  Animated.spring(animatedValue, {
    toValue: .2,
    useNativeDriver: true

  }).start()
}
const  handlePressOut1 = () => {
  console.log("presse ")

  Animated.spring(animatedValue, {
    toValue: 2,
    speed:12,
    bounciness:8,
    useNativeDriver: true

  }).start()
}


const myOwnHandler = () =>{

  console.log("I am hre")

  Animated.parallel([
    
    Animated.spring(animatedValue, {
      toValue: .2,
      useNativeDriver: true
  
    }),

    Animated.timing(animatedValue, {
      
      toValue: 2,
    

      useNativeDriver: true
     

    }),
    
   
    

  ]).start()


}

const animatedStyle = {
  transform: [{ scale: animatedValue}]
}


const renderContent =()=>{
 return(
   <View>
     <Text>

        This is render Text
     </Text>

   </View>

 )

}


  return (
    <View style={styles.container}>

<BottomSheet
          ref={bottomSheetRef}
          snapPoints={[500, 200, 100, 0]}
          renderContent={renderContent}
          initialSnap={1}

        />
      <Text style={styles.welcome}>Welcome to React Native Share Example!</Text>
      <View style={styles.optionsRow}>
        <View style={styles.button}>
          <Button onPress={shareMultipleImages} title="Share Multiple Images" />
        </View>
        <View style={styles.button}>
          <Button onPress={shareSingleImage} title="Share Single Image" />
        </View>
        <View style={{
      
        
      flex :1,
      flexDirection:"row",
      justifyContent:"space-evenly",
    
       color: "blue"
    }}>


<FbButton  shareSingleImage={shareSingleImage} />
<TouchableWithoutFeedback 
onPressIn={handlePressIn}
onPressOut={handlePressOut}
>
          <Animated.Image
            //We are showing the Image from online
            source={
             require('./images/fb.png')}
            
            style={[styles.ImageIconStyle,animatedStyle]}
            
            />
</TouchableWithoutFeedback>

<TouchableWithoutFeedback 
onPressIn={handlePressIn1}
onPressOut={handlePressOut1}
onPress={handleBottomSheet}

>
          <Animated.Image
            //We are showing the Image from online
            source={
             require('./images/what.png')}
            
            style={[styles.ImageIconStyle,animatedStyle]}
            
            />
</TouchableWithoutFeedback>


<AwesomeButton 
 progress
 onPress={next => {
  shareSingleImage().then(next())
}}
 

style={styles.button} type="facebook" size="medium">
          <Icon name="whatsapp" size={30}  style={{color:"#25D366"}} />
          </AwesomeButton>
          
        {/* <AnimatableIcon name="facebook-messenger" size={30}  style={{color:"#0084FF"}} /> */}
<View style={{borderRadius:50}} >
        <Icon name="facebook" size={30}  style={{color:"#25D366" }} />
        </View>
        <Icon name="whatsapp" size={30}  style={{color:"#25D366"}} />
        <Icon name="google" size={30}  style={{color:"#FF3E30"}} />
        <Icon name="share-alt" size={30}  style={{color:"#3b5998"}} />
        </View>
         <View style={styles.button}>
          <Button onPress={shareEmailImage} title="Share Social: Email" />
        </View>
        {Platform.OS === 'android' && (
          <View style={styles.searchPackageContainer}>
            <TextInput
              placeholder="Search for a Package"
              onChangeText={setPackageSearch}
              value={packageSearch}
              style={styles.textInput}
            />
            <View>
              <Button
                onPress={checkIfPackageIsInstalled}
                title="Check Package"
              />
            </View>
          </View>
        )}
        <Text style={styles.resultTitle}>Result</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 0,
    marginBottom: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderBottomColor: '#151313',
    borderBottomWidth: 1,
    marginRight: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  resultTitle: {
    marginTop: 20,
    fontSize: 20,
  },
  result: {
    fontSize: 14,
    margin: 10,
  },
  optionsRow: {
    justifyContent: 'space-between',
  },
  searchPackageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  FacebookStyle: {
    
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 50,
    margin: 0,
  },
});

export default App;


function AweButton() {
  return <AwesomeButton>Text</AwesomeButton>;
}

function FbButton({shareSingleImage }){
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
             require('./images/mes.png')}
            
            style={styles.ImageIconStyle}
            
            />
  </AwesomeButton>
}