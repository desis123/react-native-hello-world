import React, {  useState , useEffect } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator, SectionList, Dimensions } from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');


const Newssectionlist2 = ()=>{

    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState("");
    const [page, setPage] = useState(1);


  

  


  useEffect(() => {
      
    makeRequest();
    
  }, []);



  const makeRequest = () => {
    console.log(page);

    const url = 'https://tutorialsha.com/api/json_key_data?page=${page}';

    axios.get(url)
      .then(res => {
console.log(res.data.data[0].data)
console.log(res.data.data);

buidling_data = [{title :"First Category", data: res.data.data[0].data }]
buidling_data2 = [{title :"Second Category", data: res.data.data[1].data }]
        setIsloading(false)
          setData([...data, ...buidling_data , ...buidling_data2])
        })
  }

 const handleLoadMore = () => {

    console.log("I am increseing page");

    setPage(page + 1);

    
    makeRequest();
  }

 const renderFooter = () => {
    return (
      <View style={styles.headerBg}>
        <ActivityIndicator animating size="large" />
      </View>
    );
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
          renderItem={({ item }) =>
          <RenderItemMemo item={item}  />
        }
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  
}

export default Newssectionlist2



const  RenderItem = ({item}) => {
  const { id, first_name, last_name, email, avatar } = item;
  
  console.log(id)

  return (
    <View style={styles.itemView}>
      <View style={styles.imgContainer}>
        <Image style={styles.imageStyle}
          source={{ uri: avatar }}
        />
      </View>

      <View style={styles.itemInfo}>
        <Text style={styles.name}>
          {first_name + ' ' + last_name}
        </Text>
        <Text numberOfLines={1}>{email}</Text>
      </View>
    </View>
  );
}

const RenderItemMemo = React.memo( RenderItem )

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  imgContainer: {
    flex: 0,
    borderColor: '#f4f4f4',
    borderWidth: 1.5,
    height: 200,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
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
  imageStyle: {
    height: 50,
    width: 50,
  }
});