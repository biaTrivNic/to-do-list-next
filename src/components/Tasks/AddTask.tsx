"use client";

import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useInsertTask from '@/hooks/useInsertTask';

const AddTask: React.FC = () => {

  const { insertTask, error } = useInsertTask();
  const [newTask, setNewTask] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    insertTask(newTask);
    setNewTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite uma tarefa"
        value={newTask}
        onChange={handleChange}
      />
      <Button type="submit" text="Adicionar" />
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>} 
    </form>
  );
};

export default AddTask;
