const lists = (state=-1, action) => {
  switch (action.type) {
    case 'TOGGLE_BOARD':
      return action.id;
    case 'TOGGLE_HOME':
      return -1;
    default:
      return state;
  }
}

export default lists;
