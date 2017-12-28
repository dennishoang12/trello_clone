let listId = 0;
let nextBoardId = 0;
let activityId = 0;

export const addBoard = name => {
  return {
    type: "ADD_BOARD",
    id: nextBoardId++,
    name
  };
}

export const deleteBoard = id => {
  return {
    type: "DELETE_BOARD",
    id
  };
}

export const toggleBoard = id => {
  return {
    type: "TOGGLE_BOARD",
    id
  }
}

export const toggleCreateBoard = () => {
  return {
    type: "TOGGLE_CREATE_BOARD"
  }
}

export const toggleHome = () => {
  return {
    type: "TOGGLE_HOME"
  }
}

export const createList = (board_id, title) => {
  return {
    type: "CREATE_LIST",
    list_id: listId++,
    board_id,
    title,
    activities: []
  }
}

export const deleteList = id => {
  return {
    type: "DELETE_LIST",
    list_id: id
  }
}

export const addActivity = (list_id, text) => {
  return {
    type: "ADD_ACTIVITY",
    list_id,
    text,
    activity_id: activityId++
  }
}

export const toggleActivity = (list_id, activity_id) => {
  return {
    type: "TOGGLE_ACTIVITY",
    list_id,
    activity_id
  }
}
