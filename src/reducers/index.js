import { combineReducers } from 'redux';
import boards from './boards';
import toggleCreateBoard from './toggleCreateBoard';
import lists from './lists';

const boardApp = combineReducers({
  boards,
  isToggled: toggleCreateBoard,
  board_id: lists
});

export default boardApp;
