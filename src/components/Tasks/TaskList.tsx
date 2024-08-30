'use client';

import React from 'react';
import Input from '../Input/Input';
import DeleteTask from './DeleteTask';
import DoneTask from './DoneTask';
import UndoneTask from './UndoneTask';
import EditTask from './EditTask';
import { useState, useEffect } from 'react';
import useReadTasks from '@/hooks/useReadTasks';
import DeleteTaskCheckbox from './DeleteTasksCheckbox';
import Button from '../Button/Button';
import AddTask from './AddTask';

const TaskList: React.FC = () => {
  const { fetchTasks, tasks, error } = useReadTasks();

  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleCheckbox = (id: number) => {
    setSelectedTasks(prevTasks =>
      prevTasks.includes(id)
        ? prevTasks.filter(num => num !== id)
        : [...prevTasks, id]
    );
  };

  const handleClick = () => {
    setShowInput(true)
  }

  const handleDeleteSuccess = () => {
    setSelectedTasks([]);  
    fetchTasks();         
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <AddTask onSuccess={fetchTasks} />
      {selectedTasks.length > 0 ? <DeleteTaskCheckbox onSuccess={handleDeleteSuccess} value={selectedTasks}/> : null}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Input type='checkbox' onChange={() => handleCheckbox(task.id)}
              checked={selectedTasks.includes(task.id)} />
            <strong>Task:</strong> {task.name} <br />
            <EditTask onSuccess={fetchTasks} value={task.name} id={task.id}/>
            <strong>Status:</strong> {task.status}
            {task.status !== 'done' ? <DoneTask onSuccess={fetchTasks} id={task.id} /> : <UndoneTask onSuccess={fetchTasks} id={task.id}/>}
            {task.status !== 'done' ? <Button onClick={handleClick} type="submit" text="Editar" /> : null}
            <DeleteTask onSuccess={fetchTasks} value={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;