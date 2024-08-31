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
import styles from './TaskList.module.css';

const TaskList: React.FC = () => {
  const { fetchTasks, tasks, error } = useReadTasks();

  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [showInput, setShowInput] = useState<number | null>(null);

  const handleCheckbox = (id: number) => {
    setSelectedTasks(prevTasks =>
      prevTasks.includes(id)
        ? prevTasks.filter(num => num !== id)
        : [...prevTasks, id]
    );
  };

  const handleDeleteSuccess = () => {
    setSelectedTasks([]);
    fetchTasks();
  };

  const handleClick = (id: number) => {
    setShowInput(id);
  };

  const handleEditSuccess = (id: number) => {
    setShowInput(null);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.addContainer}>
        <AddTask onSuccess={fetchTasks} />
        {selectedTasks.length > 0 ? <DeleteTaskCheckbox onSuccess={handleDeleteSuccess} value={selectedTasks} /> : null}
      </div>
      <ul className={styles.list}>
        {tasks.map(task => (
          <li className={styles.item} key={task.id}>
            <div className={styles.taskName}>
              <Input type='checkbox' onChange={() => handleCheckbox(task.id)}
                checked={selectedTasks.includes(task.id)} />
              {showInput === task.id ?
                <EditTask onSuccess={() => handleEditSuccess(task.id)} value={task.name} id={task.id} /> :
                <p className={task.status === 'pending' ? styles.pending : styles.done}>{task.name}</p>}
            </div>
            {/* <p className={task.status === 'pending' ? styles.pending : styles.done}>{task.status}</p> */}
            <div className={styles.btnContainer}>
              {task.status !== 'done' ? <DoneTask onSuccess={fetchTasks} id={task.id} /> : <UndoneTask onSuccess={fetchTasks} id={task.id} />}
              {(task.status !== 'done' && showInput != task.id) ? <Button onClick={() => handleClick(task.id)} type="submit" text="Editar" className='editarBtn' title='editar' /> : null}
              <DeleteTask onSuccess={fetchTasks} value={task.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;