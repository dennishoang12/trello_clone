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


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
