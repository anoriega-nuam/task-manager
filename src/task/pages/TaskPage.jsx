import { useContext, useEffect, useState } from 'react';
import { Navbar } from "../components/Navbar";
import { AddTask } from './Components/AddTask';
import { SearchTask } from './Components/SearchTask';
import { TaskContext } from '../context/TaskContext';

export const TaskPage = () => {
  const {taskState, deleteTask, editTask, toggleTask} = useContext(TaskContext)

  const [filteredTasks, setFilteredTasks] = useState(taskState.tasks);
  const [editingTask, setEditingTask] = useState(null);
  const [newDescription, setNewDescription] = useState('');


  useEffect(() => {
    setFilteredTasks(taskState.filteredTasks.length ? taskState.filteredTasks : taskState.tasks);
  }, [taskState.filteredTasks, taskState.tasks]);

  const onStartEditing = (task) => {
    setEditingTask(task.id);
    setNewDescription(task.description);
  };

  const onSaveTask = (taskId) => {
    const dataEditing = {
      id: taskId,
      description: newDescription
    }
    editTask(dataEditing);

    setEditingTask(null);
    setNewDescription('');
  };


  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Lista de Tareas</h2>

        <AddTask />

        <SearchTask
          tasks={taskState.tasks}
          setFilteredTasks={setFilteredTasks}
        />

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descripción</th>
              <th scope="col">Completado</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <tr key={task.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {editingTask === task.id ? (
                    <input
                      type="text"
                      className="form-control"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                  ) : (
                    task.description
                  )}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                </td>
                <td>
                {editingTask === task.id ? (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => onSaveTask(task.id)}
                    >
                      <i className="bi bi-save"></i> Guardar
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onStartEditing(task)}
                    >
                      <i className="bi bi-pencil"></i> Editar
                    </button>
                  )}

                  <button
                    className="btn btn-danger btn-sm mx-2"
                    onClick={() => deleteTask(task.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
