import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import boardApp from './reducers';
import { addBoard, toggleCreateBoard, deleteBoard, toggleBoard, createList, deleteList, addActivity} from './actions';

let store = createStore(boardApp);

store.subscribe(() => {
  console.log("Changed state", store.getState());
});

// store.dispatch({type: "ADD_BOARD", name:"Doug's Board", id: 0});
// store.dispatch({type: "TOGGLE_CREATE_BOARD"});
// store.dispatch({type: "ADD_BOARD", name:"Todo List", id: 1});
// store.dispatch({type: "TOGGLE_CREATE_BOARD"});
// store.dispatch({type: "ADD_BOARD", name:"Homework", id: 2});
// store.dispatch({type:"DELETE_BOARD", id: 1});

store.dispatch(addBoard("Doug's Board"));
store.dispatch(toggleBoard(0));
store.dispatch(createList(0, "hello world"));
store.dispatch(createList(0, "hello world"));
store.dispatch(createList(0, "What's up doc"));
store.dispatch(deleteList(0));
store.dispatch(createList(1, "What's up doc"));
store.dispatch(createList(0, "Scrub"));
store.dispatch(createList(0, "fug"));
store.dispatch(addActivity(3, "This is an activity"));
store.dispatch(addActivity(3, "This is an another activity"));
store.dispatch(addActivity(1, "This activity"));
// store.dispatch(toggleCreateBoard());
// store.dispatch(addBoard("Todo List"));
// store.dispatch(toggleCreateBoard());
// store.dispatch(addBoard("Homework"));
// store.dispatch(deleteBoard(1));




ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
