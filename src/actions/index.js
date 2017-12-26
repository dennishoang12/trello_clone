
let nextBoardId = 0;

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
