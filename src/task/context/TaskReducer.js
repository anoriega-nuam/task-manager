


export const TaskReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        pending: state.pending + 1,
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        pending: state.pending - 1,
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
        completed: state.completed + 1,
        pending: state.pending - 1,
      };
    case 'FILTER_TASKS':
      return {
        ...state,
        filteredTasks: state.tasks.filter(task =>
          task.description.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
}
