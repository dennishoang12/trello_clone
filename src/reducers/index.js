import { combineReducers } from 'redux';
import boards from './boards';
import toggleCreateBoard from './toggleCreateBoard';
import boardId from './boardId';
import lists from './lists';

const boardApp = combineReducers({
  boards,
  isToggled: toggleCreateBoard,
  board_id: boardId,
  lists
});

export default boardApp;
