
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
        // x.activities = x.activities.concat(action.text);
        x.activities = [...x.activities, {activity_id: action.activity_id, complete: false, text: action.text, list_id: action.list_id}];
      })
      return newState;
    case "TOGGLE_ACTIVITY":
      var newState = copy(state);
      // newState.filter(x => x.list_id === action.list_id).map(x => {
      //   x.activities.filter(y => y.activity_id === action.activity_id).map(y => {
      //     if (y.complete === "no") {
      //       y.complete = new String("yes");
      //     }
      //     else {
      //       y.complete = new String("no");
      //     }
      //   });
      for (var i = 0; i < newState.length; i++) {
        if (newState[i].list_id === action.list_id) {
          for (var j = 0; j < newState[i].activities.length; j++) {
            if (newState[i].activities[j].activity_id == action.activity_id) {
              newState[i].activities[j].complete = !newState[i].activities[j].complete;
            }
          }
        }
      }

      return newState;
    default:
      return state;
  }
}

export default lists;
