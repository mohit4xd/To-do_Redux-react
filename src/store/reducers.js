// reducers.js
const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              id: Math.random(),
              text: action.payload.text,
              completed: false,
            },
          ],
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload.id),
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, completed: !task.completed } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  