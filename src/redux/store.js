import {combineReducers, createStore} from 'redux';
import organizerReducer from './organizerRedux';
import changeColorReducer from './changeColorRedux';

const initialState = {
  colorTheme: 'default',  	
	organizer:  {
     id: 1,
     title:'',
     daily:false,
     description:'Describe your task',
     time:'00:00',
     duration: 0,
     color: '#fff'
    },
  }


const reducers = {
	colorTheme: changeColorReducer,
	organizer: organizerReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;