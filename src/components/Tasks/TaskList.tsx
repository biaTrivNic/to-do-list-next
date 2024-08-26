import React from 'react';
import Input from '../Input/Input';
import DeleteTask from './DeleteTask';
import DoneTask from './DoneTask';
import UndoneTask from './UndoneTask';
import EditTask from './EditTask';
import { Task } from '@/types';

const tasks: Task[] = [
  { id: 1, status: 'done', task: 'Complete TypeScript tutorial' },
  { id: 2, status: 'done', task: 'Build a React component' },
  { id: 3, status: 'pending', task: 'Review pull requests' },
  { id: 4, status: 'done', task: 'Update project documentation' },
  { id: 5, status: 'pending', task: 'Plan next sprint' },
];

const TaskList: React.FC = () => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Input type="checkbox" value={task.id.toString()} />
          <strong>Task:</strong> {task.task} <br />
          <strong>Status:</strong> {task.status}
          {task.status !== 'done' ? <DoneTask /> : <UndoneTask />}
          {task.status !== 'done' ? <EditTask /> : null}
          <DeleteTask />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
