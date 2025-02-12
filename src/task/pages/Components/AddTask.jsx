import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export const AddTask = () => {
  const [newTaskDescription, setNewTaskDescription] = useState('');

    const {addTask} = useContext(TaskContext)


  const onHandleSubmit = (e) => {
    e.preventDefault();

    addTask(newTaskDescription);
    setNewTaskDescription('');
  }

  return (
    <form onSubmit={onHandleSubmit} className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Nueva tarea..."
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">Agregar Tarea</button>
    </form>
  )
}
