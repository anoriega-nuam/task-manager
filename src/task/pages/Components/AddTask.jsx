import { useState } from "react";

export const AddTask = ({addTask}) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');


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
