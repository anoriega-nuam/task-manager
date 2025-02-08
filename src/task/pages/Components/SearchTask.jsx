import { useState } from "react";

export const SearchTask = ({tasks, setFilteredTasks}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onFilteredTasks = (searchTerm) => {

    const filteredTasks = tasks.filter(task =>
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("searchTerm", tasks);
    console.log("filteredTasks", filteredTasks);

    setSearchTerm(searchTerm);
    setFilteredTasks(filteredTasks);
  };

  return (
    <div className="mb-3 mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar tareas..."
        value={searchTerm}
        onChange={(e) => onFilteredTasks(e.target.value)}
      />
    </div>
  )
}
