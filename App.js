import React, { Component , useState } from 'react'
import 
{
StyleSheet,
View,
Text,
FlatList
} from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

const App =()=>{

    console.log("App Started");

    const [todos, setTodos ] = useState(
        [
            { text: 'buy coffee', key: '1' },
            { text: 'create an app', key: '2' },
            { text: 'play on the switch', key: '3' }
          ]
    )


    const pressHandler =(id)=>{ 

     setTodos( prevTodos =>  // Return should be an array . so we are just making a new array ... but using filter.
         prevTodos.filter( item => item.key !== id)
    );
       

    }

    const submitHandler =(text) =>{

          setTodos((prevTodos) => {
           //We have to retun an array ... which wll have all the previous object, along with new object whose
           //text would be new text, we will use ...rest operator
            return [
                {text: text , key : Math.random().toString()},

                ...prevTodos

            ]
          })


        

    }


    return(
        <View style={styles.container}>
          
                <Header />
                 <AddTodo submitHandler ={submitHandler} />

          <View style= {styles.item}>
          <FlatList 
            data ={todos}
            renderItem = {({item}) => (<TodoItem item ={item} pressHandler = {pressHandler} />) }
           />
              
          </View>  
           
        </View>

    )
}
export default App 


const styles = StyleSheet.create({
 container :{
     flex:1,
    

 },

 item :{
     padding :40,

 },
 listitem :{
     padding:20,

 }

})