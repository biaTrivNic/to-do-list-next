'use client';

import React from 'react';
import Button from '../Button/Button';
import useDeleteTasks from '@/hooks/useDeleteTasks';

const DeleteTask: React.FC<{ value: number }> = ({ value }) => {

  const { deleteTask, error } = useDeleteTasks();

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();

    deleteTask(value)
  };

  return (
    <form onSubmit={handleDelete}>
      <Button type="submit" text="Deletar" />
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>} 
    </form>
  );
};

export default DeleteTask;
