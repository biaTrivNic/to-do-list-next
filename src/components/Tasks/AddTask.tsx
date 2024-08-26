"use client"

import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Task } from '@/types';

const AddTask: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTaskObj: Task = {
      id: tasks.length + 1,
      status: 'pending',
      task: newTask,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask('');
  };

  useEffect(() => {
    console.log('Tarefas atualizadas:', tasks);
  }, [tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite uma task"
        value={newTask}
        onChange={handleChange}
      />
      <Button type="submit" text="Adicionar" />
    </form>
  );
};

export default AddTask;
