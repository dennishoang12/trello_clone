const boards = (state=[], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    case 'DELETE_BOARD':
      return state.filter(x => x.id !== action.id);
    default:
      return state;
  }
}

export default boards;
