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

const TaskList: React.FC = () => {
  const { fetchTasks, tasks, error } = useReadTasks();

  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const handleCheckbox = (id: number) => {
    setSelectedTasks(prevTasks =>
      prevTasks.includes(id)
        ? prevTasks.filter(num => num !== id)
        : [...prevTasks, id]
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {selectedTasks.length > 0 ? <DeleteTaskCheckbox value={selectedTasks}/> : null}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Input type='checkbox' onChange={() => handleCheckbox(task.id)}
              checked={selectedTasks.includes(task.id)} />
            <strong>Task:</strong> {task.name} <br />
            <strong>Status:</strong> {task.status}
            {task.status !== 'done' ? <DoneTask /> : <UndoneTask />}
            {task.status !== 'done' ? <EditTask /> : null}
            <DeleteTask value={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;