import { useState } from 'react';
import { Navbar } from "../components/Navbar";
import { AddTask } from './Components/AddTask';

const initialTasks = [
  { id: 1, description: 'Tarea 1', completed: false },
  { id: 2, description: 'Tarea 2', completed: true },
  { id: 3, description: 'Tarea 3', completed: false },
];

export const TaskPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState(initialTasks);
  console.log("description", "newTaskDescription");

  const filteredTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onAddTask = (description) => {
    if (description === '') return;

    const newTask = {
      id: tasks.length + 1,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Lista de Tareas</h2>

        <AddTask
          addTask={onAddTask}
        />

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar tareas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

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
                <td>{task.description}</td>
                <td>{task.completed ? 'Sí' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
