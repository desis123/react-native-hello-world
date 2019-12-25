import React from 'react'
import { StyleSheet , View , Text , TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const TodoItem = ({item , pressHandler }) => { //instead of passing arguments as just props, we destructing the property of props inside argument

  return (
    <TouchableOpacity onPress ={() => pressHandler(item.key)}>
      <View style={styles.listItem}>
           
      
        <Icon name="md-trash" size={30}></Icon>
        <Text style={styles.itemText}>{item.text}</Text>
  
      </View>
      </TouchableOpacity>
 
  )
}

export default TodoItem

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  }
});
