const toggleCreateBoard = (state=false, action) => {
  switch (action.type) {
    case "TOGGLE_CREATE_BOARD":
      return !state;
    default:
      return state;
  }
}

export default toggleCreateBoard;
