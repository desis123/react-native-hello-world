// function reducer(state = { data: "" }, action) {
//     switch (action.type) {
//       case "FETCH_DATA":
//         return {
//           ...state,
//           data: action.data
//         };
//       default:
//         return state;
//     }
//   }
  
//   export default reducer;

import AsyncStorage from '@react-native-community/async-storage';

import { createStore, applyMiddleware } from "redux";
import reducers from './rootReducer'; //Import the root reducer
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

import SQLiteStorage from  'redux-persist-sqlite-storage';
import SQLite from 'react-native-sqlite-storage';

const defaultConfig  = {
  name: 'mystorage',
  location: 'default'
};

const storeEngine = SQLiteStorage(SQLite, defaultConfig);

SQLite.DEBUG(false);
SQLite.enablePromise(true);



// // Middleware: Redux Persist Config
// const persistConfig = {
//   // Root
//   key: 'root',
//   // Storage Method (React Native)
//   storage: AsyncStorage,
  
// };



const persistConfig = {
  key: 'root2',
  storage: storeEngine,
  //debug: true
 
}


const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};