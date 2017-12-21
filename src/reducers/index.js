import { combineReducers } from 'redux';
import boards from './boards';
import toggleCreateBoard from './toggleCreateBoard';

const boardApp = combineReducers({
  boards,
  isToggled: toggleCreateBoard
});

export default boardApp;
