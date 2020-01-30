import React from 'react'
import 
{
 YellowBox
} from 'react-native' 

import { NavigationNativeContainer ,useLinking, } from '@react-navigation/native';
import { enableScreens  } from 'react-native-screens';
import { Provider } from "react-redux";
import { store  } from './src/redux/store'
import Stacknav from './src/navigator/Stacknav'

const App =()=>{

  console.log("I am at tab")
  YellowBox.ignoreWarnings(['Warning:']);

    enableScreens();
    // const isHermes = () => global.HermesInternal != null;
    // console.log(isHermes);

    const ref = React.useRef();

    const { getInitialState } = useLinking(ref, {
      prefixes: ['http://taza-khobor.org', 'http://taza-khobor.org/bd','taza-khobor.org','tazakhobor://'],
    });

    const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    getInitialState()
      .catch(() => {})
      .then(state => {
        if (state !== undefined) {
          setInitialState(state);
        }

        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

 
    

    return(


      
    <Provider store={store}>
  

    <NavigationNativeContainer initialState={initialState} ref={ref}>
    <Stacknav />
   </NavigationNativeContainer>
 

   </Provider>    

    
    )
}



export default App 





