import React from 'react'
import { StyleSheet , View , Text , TouchableOpacity } from 'react-native'


const TodoItem = ({item , pressHandler }) => { //instead of passing arguments as just props, we destructing the property of props inside argument

  return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress ={() => pressHandler(item.key)}>
          <Text style={styles.item}>{item.text}</Text>
         </TouchableOpacity>
      </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  listItem :{
    borderBottomWidth :20,
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,


  },
  item : {

    borderBottomWidth :20,
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    

   

  }
})
