// actions.js
export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    payload: {
      text,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    payload: {
      id,
    },
  };
};

export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    payload: {
      id,
    },
  };
};
