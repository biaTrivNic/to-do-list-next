"use client";

import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useInsertTask from '@/hooks/useInsertTask';

const AddTask: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {

  const { insertTask, error, errorMinLength } = useInsertTask();
  const [newTask, setNewTask] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    insertTask(newTask, onSuccess);
    setNewTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite uma tarefa"
        value={newTask}
        onChange={handleChange}
        maxLength={50}
      />
      {errorMinLength && <p style={{ color: 'red' }}>Erro: {errorMinLength}</p>} 

      <Button type="submit" text="Adicionar" />
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>} 
    </form>
  );
};

export default AddTask;
