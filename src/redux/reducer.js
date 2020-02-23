import * as c from '../constants'

initialState = {
    exclusive:"", //26
    politics:"",  //8
    national:'',  //7
    country : "", //18
    law:"", //19
    business :"", //9
    international:"", //13
    education :"",//14
    sports:"", //10
    tech:"", //11
    miscellaneous:"",//33
    health :"", //15
    lifestyle:"" , // 22
    entertainment:"",//12
    ltte:"",//16
    islam:"", //29
    weird:"" ,//23
    recipe :"", //30
    abroad :"", //24
    latest:""
//[26,8,7,18,19,9,13,14,10,11,33,15,22,12,16,29,23,30,24]

//http://taza-khobor.org/bd/index.php?option=com_hoicoiapi&task=getContents&catid=[26,8,7,18,19,9,13,14,10,11,33,15,22,12,16,29,23,30,24]&token=amitumishe
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.FETCH_NEWS: {

            
            
            let { exclusive, politics, national, country, law, business, international, education, sports, tech , miscellaneous , health, lifestyle , entertainment , ltte , islam , weird , recipe , abroad } = action.payload;

            for ( var property in action.payload ) {
                var category_name = property;
              }

             
              return {...state , [category_name]: action.payload[category_name]}

           // return {...state, exclusive, politics, national, country, law, business, international, education, sports, tech , miscellaneous , health, lifestyle , entertainment , ltte , islam , weird , recipe , abroad  };
        }

        default:
            return state;
    }

    }

    export default newsReducer;
