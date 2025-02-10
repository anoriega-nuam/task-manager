import { useReducer } from "react";
import { TaskReducer } from "./TaskReducer";
import { TaskContext } from "./TaskContext";


const INITIAL_STATE = {
  tasks: [
    {id: '1', description: 'Task new 1', completed: false},
    {id: '2', description: 'Task 2', completed: false},
    {id: '3', description: 'Task 3', completed: true},
  ],
  completed: 0,
  pending: 0,
  filteredTasks: [],
};
export const TaskProvider = ({children}) => {
  const [taskState, dispatch] = useReducer(TaskReducer, INITIAL_STATE)

  const addTask = (description) => {
    if (description === '') return;
    console.log(description);

    const newTask = {
      id: description.length + 1,
      description,
      completed: false,
    };

    dispatch({type: 'ADD_TASK', payload: newTask});
  };

  const deleteTask = (taskId) => {
    dispatch({type: 'DELETE_TASK', payload: taskId});
  };

  const editTask = (task) => {
    dispatch({type: 'EDIT_TASK', payload: task});
  }

  const toggleTask = (taskId) => {
    dispatch({type: 'TOGGLE_TASK', payload: taskId});
  }

  const filterTasks = (search) => {
    dispatch({type: 'FILTER_TASKS', payload: search});
  }


  return (
    <TaskContext.Provider value={{
      taskState,
      addTask,
      deleteTask,
      editTask,
      toggleTask,
      filterTasks
    }}>
      {children}
    </TaskContext.Provider>
  )
}
