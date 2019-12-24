import React , { useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native'


const AddTodo = ({submitHandler})=>{


    const [text, setText] = useState('');

    const changeHander = (val) =>{

        setText (val);
       
    }

     //I have just created this is function, to clear the textInput after submit, because
     //text is created from this component's useState so Need to clear from this component
     // I will try useEffect later on to to clear this textInput after submit.. until then
     //use this way to handle this problem 

     
    const anotherFunc = (val) =>{
        setText('');
    }

 
    return (
        <View>
            <Text>Add Todo :</Text>
            <TextInput 
            value ={text}
            style ={Styles.input}
            onChangeText ={changeHander}
            placeholder = 'Add Todo ....'
            onSubmitEditing={()=> {submitHandler(text) , anotherFunc(text)}}

            />
            <Button 
            title = "Add Todo "
            color ="grey"
            onPress = {()=>  {submitHandler(text) , anotherFunc(text)}}
            />
            
        </View>
    )

}

export default AddTodo

const Styles = StyleSheet.create({
    input :{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        
    }

})