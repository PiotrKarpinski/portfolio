import {combineReducers, createStore} from 'redux';
import organizerReducer from './organizerRedux';
import changeColorReducer from './changeColorRedux';
import aboutReducer from './AboutRedux';

const initialState = {

  colorTheme: 'default',  	
  card: 'I am young and promising Front-end Developer who has solid foundation and constant will to gain knowledge. Currently, I am looking for work in Wrocław. You can contact with me via email. I also invite you to take a look at my GitHub and LinkedIn profiles.',	
  organizer:  {
     id: 1,
     title:'',
     daily:false,
     description:'',
     time:'',
     duration: '',
     color: '#fff'
    },
  }


const reducers = {
  card: aboutReducer,
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