import React from 'react'
import IndividualArticlepage from '../components/IndividualArticlepage'


const IndividualArticle  = ({ route }) => {
  
   const {id} = route.params;
        return (
           <IndividualArticlepage id={id}  />
         
       )
    } 
    
    export default IndividualArticle