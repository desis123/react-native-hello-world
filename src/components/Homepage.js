import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator, SectionList, Dimensions ,PixelRatio ,TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import * as c from '../constants'
import { fetch_news } from "../redux/actions";

import { CachedImage } from 'react-native-cached-image';
import isEqual from 'lodash/isEqual'
//var fp = require('lodash/fp');
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'


const { width, height } = Dimensions.get('window');


const Homepage = ({navigation}) => {

  


  const state = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method


  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [touchEnable, setTouchEnable] = useState(true);

  let buidling_data = [];



  useEffect(() => {

    makeRequest();

  }, []);



  const makeRequest = () => {
    setTouchEnable(false);

    if (c.CATEGORIES.length >= page) {
      const CAT_NAME = c.CATEGORIES_NAME[page - 1]; /// Here -1 becasue "latest" is included in CATEGORIES_NAME array

    //   console.log("FOR REDUX:" + CAT_NAME);
    //   console.log("DATA FROM REDUX");
    //   console.log(state.newsReducer[CAT_NAME]);
      //This update from Redux for Offline 


      buidling_data[page] = [{ title: CAT_NAME, data: state.newsReducer[CAT_NAME] }]
          if (page == 1) {
                setData([...buidling_data[page]])

                    
                    //End Redux update
                    if(state.newsReducer[CAT_NAME] !== null && state.newsReducer[CAT_NAME] !== ''){
                      setIsloading(false)
                      setIsLoadingMore(false)
                      setTouchEnable(true) //When Fetching ... Pushing will not bloatted fetching with another fetching
                   } 
                   
                   
          } else {
                  setData([...data, ...buidling_data[page]])


                 
                  //End Redux update
            
                  if(state.newsReducer[CAT_NAME] !== null && state.newsReducer[CAT_NAME] !== ''){
                    setIsloading(false)
                    setIsLoadingMore(false)
                    setTouchEnable(true) //When Fetching ... Pushing will not bloatted fetching with another fetching
                 } 
          }
         
      const cat_id = c.CATEGORIES[page - 2]; //Here it should be -2 , instead of -1 , because for page =1, it's latest url , for page =2 it's page -2 means 0 , which is exclusive array

       if(page == 1){
         var url = `${c.API_LATEST_URL}${c.API_KEY}`;
       }else{
        var url = `${c.API_URL}[${cat_id}]${c.API_KEY}`;
      }
     
      
      //const url = 'https://tutorialsha.com/api/json_key_data?page=${page}';
      console.log(url);

      axios.get(url)
        .then(res => {


          for (var property in res.data) {
            var category_name = property;
          }

          //check if redux stored data if equal to server data ...
          var isStoredDataEqualToServerData = isEqual(state.newsReducer[CAT_NAME], res.data[category_name]);
          //console.log("is Stored Data Equal To Server Data" + isStoredDataEqualToServerData)
           if (isStoredDataEqualToServerData) {

            // console.log("SAME DATA FROM SERVER");
            // console.log(res.data[category_name]);

                    setIsloading(false)
                    setIsLoadingMore(false)
                    setTouchEnable(true) //When Fetching ... Pushing will not bloatted fetching with another fetching

           } else{

             console.log("DIFFERENT DATA FROM SERVER");
            // console.log(res.data[category_name]);


                      buidling_data[page] = [{ title: category_name, data: res.data[category_name] }]
                      if (page == 1) {
                        setData([...buidling_data[page]])
                      } else {
                        setData([...data, ...buidling_data[page]])
                      }

                      dispatch(fetch_news(res.data)) //saving to redux for offline and using it other component

                      setIsloading(false)
                      setIsLoadingMore(false)
                      setTouchEnable(true) //When Fetching ... Pushing will not bloatted fetching with another fetching

           }

         
        })

    }
  }

  const handleLoadMore = () => {



    if (touchEnable) {

       console.log("Firing MakeReq");
      if (c.CATEGORIES.length >= page) {
        setPage(page + 1);

        setIsLoadingMore(true);
        makeRequest();
      }
    } else {

    //   console.log("I will not fire MakeRequest");
    }
    if (c.CATEGORIES.length === page) {
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

const getItemLayout = sectionListGetItemLayout({
    // The height of the row with rowData at the given sectionIndex and rowIndex
    getItemHeight: (rowData, sectionIndex, rowIndex) => sectionIndex === 0 ? 150 : 85,

    // These four properties are optional
    getSeparatorHeight: () => 1 / PixelRatio.get(), // The height of your separators
    getSectionHeaderHeight: () => 20, // The height of your section headers
    getSectionFooterHeight: () => 10, // The height of your section footers
    listHeaderHeight: 0, // The height of your list header
  })


  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    )
  }

 // console.log(data);
  return (





    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={({ item, index }) =>
          <RenderItemMemo item={item} index={index}  navigation={navigation} data={data} />
        }
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => item.id}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={10}

        initialNumToRender={10}
        windowSize={45}
        getItemLayout={getItemLayout}
        removeClippedSubviews ={true}
        maxToRenderPerBatch={10}
       // updateCellsBatchingPeriod={25}
      />
    </View>
  );

}

export default Homepage



const RenderItem = ({ item, index , data,navigation}) => {
  const { id, title, category_title, thumbnail } = item;

 // console.log("render_row")
  //console.log(index)

 
  for(var i = 0; i < data.length; i++) {
      if (data[i].title == category_title) {
         var newData = data[i];
          break;
      }
  }
 //console.log(newData);

// console.log(data);
// console.log(index ) ;
//   console.log(id);

  const pressHandler=(id,data)=>{
    navigation.push('Articles',{id : id, data:newData.data})
  }

//   console.log(id)


  if (index === 0) {
    return (

      <TouchableWithoutFeedback onPress ={() => pressHandler(id,data)}>
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
      </TouchableWithoutFeedback>

    )
  } else {

    return (
      <TouchableWithoutFeedback onPress ={() => pressHandler(item.id,data)}>
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
      </TouchableWithoutFeedback>
    );
  }
}

const RenderItemMemo = React.memo(RenderItem)









const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },


  itemViewFirst: {
    flex: 1,

    width,
    borderBottomWidth: 0.5,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    paddingHorizontal: 12,

    backgroundColor: "#fff",
  shadowColor: "#ffffff",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.81,
  shadowRadius: 5.16,
  elevation: 7,

  },

  itemView: {
    flex: 1,
    width,
    borderBottomWidth: 0.5,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    paddingHorizontal: 12,
    flexDirection: 'row',

    backgroundColor: "#fff",
  shadowColor: "#ffffff",
  shadowOffset: {
      width: 0,
      height: 5,
  },
  shadowOpacity: 0.81,
  shadowRadius: 5.16,
  elevation: 7,

  marginTop: 15
  },


  imgContainerFirst: {
    flex: 0,
    borderColor: '#f4f4f4',
    borderWidth: 1.5,
    height: 150,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },



  imgContainer: {
    flex: 0,
    borderColor: '#f4f4f4',
    borderWidth: 1.5,
    height: 70,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyleFirst: {
    height: 150,
    width: Dimensions.get('window').width,
  },


  imageStyle: {
    height: 70,
    width: 120,
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
    backgroundColor: 'rgba(244,155,247,.01)'
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: '#000000',
    textAlign: 'left',
  },

});