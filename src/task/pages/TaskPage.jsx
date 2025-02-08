import { useState } from 'react';
import { Navbar } from "../components/Navbar";
import { AddTask } from './Components/AddTask';
import { SearchTask } from './Components/SearchTask';

const initialTasks = [
  { id: 1, description: 'Tarea 1', completed: false },
  { id: 2, description: 'Tarea 2', completed: true },
  { id: 3, description: 'Tarea 3', completed: false },
];

export const TaskPage = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [editingTask, setEditingTask] = useState(null);
  const [newDescription, setNewDescription] = useState('');

  const onAddTask = (description) => {
    if (description === '') return;

    const newTask = {
      id: tasks.length + 1,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]);

  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const onDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const onStartEditing = (task) => {
    setEditingTask(task.id);
    setNewDescription(task.description);
  };

  const onSaveTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    setEditingTask(null);
    setNewDescription('');
  };


  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Lista de Tareas</h2>

        <AddTask
          onAddTask={onAddTask}
        />

        <SearchTask
          tasks={tasks}
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
                    onChange={() => toggleTaskCompletion(task.id)}
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
                    onClick={() => onDeleteTask(task.id)}
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
