
// Deep copy of objects
function copy(o) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? copy(v) : v;
   }
   return output;
}

const lists = (state=[], action) => {
  switch (action.type) {
    case "CREATE_LIST":
      return [
        ...state,
        {board_id: action.board_id, list_id: action.list_id, title: action.title, activities: []}
      ];
    case "DELETE_LIST":
      return state.filter(x => x.list_id !== action.list_id);
    case "ADD_ACTIVITY":
      var newState = copy(state);
      newState.filter(x => x.list_id === action.list_id).map(x => {
        x.activities = x.activities.concat(action.text);
      })
      return newState;
    default:
      return state;
  }
}

export default lists;
