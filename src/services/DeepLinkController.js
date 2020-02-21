import React, { useEffect } from 'react'
import { useLinking } from '@react-navigation/native';

const DeepLinkController =({navigation})=>{


    const [navReady, setNavReady] = React.useState(false)
  //const [isReady, setIsReady] = React.useState(false);
    const [homeInitialState, setHomeInitialState] = React.useState();

  const ref = React.useRef();

    const { getInitialState } = useLinking(ref, {
      prefixes: [
      'http://taza-khobor.org/bd/international', 
      'http://taza-khobor.org/bd/national',
      'http://taza-khobor.org/bd/education', 
      'http://taza-khobor.org/bd/lifestyle',
      'http://taza-khobor.org/bd/sports', 
      'http://taza-khobor.org/bd/islam',
      'http://taza-khobor.org/bd/lifestyle', 
      'http://taza-khobor.org/bd/national',
      'http://taza-khobor.org/bd/miscellaneous', 
      'http://taza-khobor.org/bd/recipe',
      'http://taza-khobor.org/bd/weird-news', 
      'http://taza-khobor.org/bd/abroad',
      'http://taza-khobor.org/bd/ltte', 
      'http://taza-khobor.org/bd/politics',
      'http://taza-khobor.org/bd/country', 
      'http://taza-khobor.org/bd/islam',
      'http://taza-khobor.org/bd/health', 
      'http://taza-khobor.org/bd/exclusive',
               ],

      config: {
        Article : ':id',  //Individual Article
      },
      
  });
  
    

  React.useEffect(() => {


    getInitialState()
    .catch(() => {})
    .then(state => {

      

      if (state !== undefined) {

        console.log(state["routes"][0].params.id);
        let idStr = state["routes"][0].params.id;
        let id =  idStr.split("-")[0];
        

        var d = new Date();
var n = d.getTime();


        setHomeInitialState(state); ///This is not external deep link 
        navigation.push('Article',{id : id})    

      } 
      setNavReady(true);
      //setIsReady(true);
    });


  }, [getInitialState]);


  console.log(homeInitialState);

  return null
}

export default DeepLinkController