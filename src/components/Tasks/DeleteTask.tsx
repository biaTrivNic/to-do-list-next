'use client';

import React from 'react';
import Button from '../Button/Button';
import useDeleteTasks from '@/hooks/useDeleteTasks';

const DeleteTask: React.FC<{ value: number, onSuccess: () => void }> = ({ value, onSuccess }) => {

  const { deleteTask, error } = useDeleteTasks();

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();

    const isConfirmed = confirm('Tem certeza de que deseja deletar esta tarefa?');

    if (!isConfirmed) {
      return;
    }

    deleteTask(value, onSuccess)
  };

  return (
    <form onSubmit={handleDelete}>
      <Button type="submit" className='delBtn' title='deletar' />
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>} 
    </form>
  );
};

export default DeleteTask;
