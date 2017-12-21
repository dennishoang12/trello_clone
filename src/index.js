import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import boardApp from './reducers';
import { addBoard, toggleCreateBoard, deleteBoard } from './actions';

let store = createStore(boardApp);

// store.subscribe(() => {
//   console.log("Changed state", store.getState());
// });

// store.dispatch({type: "ADD_BOARD", name:"Doug's Board", id: 0});
// store.dispatch({type: "TOGGLE_CREATE_BOARD"});
// store.dispatch({type: "ADD_BOARD", name:"Todo List", id: 1});
// store.dispatch({type: "TOGGLE_CREATE_BOARD"});
// store.dispatch({type: "ADD_BOARD", name:"Homework", id: 2});
// store.dispatch({type:"DELETE_BOARD", id: 1});

// store.dispatch(addBoard("Doug's Board"));
// store.dispatch(toggleCreateBoard());
// store.dispatch(addBoard("Todo List"));
// store.dispatch(toggleCreateBoard());
// store.dispatch(addBoard("Homework"));
// store.dispatch(deleteBoard(1));




ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
