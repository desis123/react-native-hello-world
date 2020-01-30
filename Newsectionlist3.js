import React, {  useState , useEffect } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator, SectionList, Dimensions } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import * as c from './src/constants'
import FastImage from 'react-native-fast-image'
import { CachedImage } from 'react-native-cached-image';

const { width, height } = Dimensions.get('window');


const Newssectionlist3 = ()=>{

  const state = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method
  console.log(state.newsReducer.national)

    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState("");
    const [page, setPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [touchEnable, setTouchEnable] = useState(true);
  
    let buidling_data =[];
  


  useEffect(() => {
      
    makeRequest();
    
  }, []);



  const makeRequest = () => {

    setTouchEnable(false);
    


if(c.CATEGORIES.length > page){
 

  
   

    const cat_id = c.CATEGORIES[page];
    console.log("CATID :" + cat_id);

    let url =  `${c.API_URL }[${cat_id }]${c.API_KEY}`;
    //const url = 'https://tutorialsha.com/api/json_key_data?page=${page}';
    console.log(url);

    axios.get(url)
      .then(res => {


for ( var property in res.data ) {
  var category_name = property;
}

console.log(category_name);

buidling_data[page] = [{title : category_name, data: res.data[category_name] }]


if(page ==1){
  setData([...buidling_data[page] ])
}else{
  setData([...data, ...buidling_data[page] ])
}

        setIsloading(false)
          
          setIsLoadingMore(false)
          setTouchEnable(true) //When Fetching ... Pushing will not bloatted fetching with another fetching
        })

      }
  }

 const handleLoadMore = () => {

 

  if(touchEnable){

console.log("Firing MakeReq");
    if(c.CATEGORIES.length > page){
    setPage(page + 1);

    setIsLoadingMore(true);
    makeRequest();
    }
  }else{

    console.log("I will not fire MakeRequest");
  }
   if(c.CATEGORIES.length === page){
    setIsLoadingMore(false);
   }

  }

 const renderFooter = () => {
    // return (
    //   <View style={styles.headerBg}>
    //     <ActivityIndicator animating size="large" />
    //   </View>
    // );


    try {
      // Check If Loading
      if (isLoadingMore) {
        return (
          <View style={styles.headerBg}>
            <ActivityIndicator animating size="large" />
          </View>
        )
      }
      else {
        return null;
      }
    }
    catch (error) {
      console.log(error);
    }


  };

 
  
  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    )
  }

    return (





      <View style={styles.container}>
        <SectionList
          sections={data}
          renderItem={({ item , index }) =>
          <RenderItemMemo item={item}  index={index} />
        }
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={.9}

          initialNumToRender = {20}
          windowSize = {45}
          getItemLayout={(data, index) => (
            {length: 65, offset: 65 * index, index}
          )}
 
        />
      </View>
    );
  
}

export default Newssectionlist3



const  RenderItem = ({item,index}) => {
  const { id, title, email, thumbnail } = item;
  
  //console.log(index)


  if (index === 0) {
    return(
      <View style={styles.itemViewFirst}>
      <View style={styles.imgContainerFirst}>
        <CachedImage style={styles.imageStyleFirst}
          source={{ uri: thumbnail }}
        />
      </View>

      <View style={styles.itemInfo}>
        <Text style={styles.name}>
          {title}
        </Text>
       
      </View>
    </View>

    )
  }else{

  return (
    <View style={styles.itemView}>
      <View style={styles.imgContainer}>
      <CachedImage style={styles.imageStyle}
          source={{ uri: thumbnail }}
        />
      </View>

      <View style={styles.itemInfo}>
        <Text style={styles.name}>
          {title}
        </Text>
       
      </View>
    </View>
    );
  }
}

const RenderItemMemo = React.memo( RenderItem )









const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


  itemViewFirst: {
    flex: 1,
    
    width,
    borderBottomWidth: 0.5,
    borderColor: '#cdcdcd',
    borderStyle: 'solid',
    paddingHorizontal: 12,
    
  },

  itemView: {
    flex: 1,
    width,
    borderBottomWidth: 0.5,
    borderColor: '#cdcdcd',
    borderStyle: 'solid',
    paddingHorizontal: 12,
    flexDirection: 'row',
  },


  imgContainerFirst: {
    flex: 0,
    borderColor: '#f4f4f4',
    borderWidth: 1.5,
    height: 150,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },



  imgContainer: {
    flex: 0,
    borderColor: '#f4f4f4',
    borderWidth: 1.5,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyleFirst: {
    height: 150,
    width: 300,
  },


  imageStyle: {
    height: 50,
    width: 50,
  },


 
  itemInfo: {
    flex: 1,
    marginHorizontal: 10,
  },


  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(244,155,247,1.0)'
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: '#ff0000',
    textAlign: 'left',
  },
  
});