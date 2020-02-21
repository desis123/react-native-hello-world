import React from 'react'
import {Text,View , BackHandler,ActivityIndicator} from 'react-native'
import axios from 'axios';
import * as c from '../constants'
//import DRYArticlepage from './DRYArticlepage'
import Articlepage from './Articlepage'
const IndividualArticlepage =({id}) =>{ 

    const [isLoading, setIsloading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [indexPostionOfArticle,setIndexPostionOfArticle] = React.useState(0);
 
 

    React.useEffect(() => {

        let url = `${c.API_INDIVIDUAL_ARTICLE_URL}${id}${c.API_KEY}`
        axios.get(url)
        .then(function (response) {
        // handle success
       
        setIsloading(false);
        setData(response.data)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    
      }, []);
    


      if (isLoading) {
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator />
          </View>
        )
      } else{

    return(
        <Articlepage data = {data}  itemIndex={0}   />

        // <View><Text>{JSON.stringify(data)}</Text></View>
      )
    }
}

export default IndividualArticlepage