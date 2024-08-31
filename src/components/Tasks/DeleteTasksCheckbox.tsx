'use client';

import React from 'react';
import Button from '../Button/Button';
import useDeleteTasks from '@/hooks/useDeleteTasks';

const DeleteTaskCheckbox: React.FC<{ value: number[], onSuccess: () => void }> = ({ value, onSuccess }) => {

  const { deleteTask, error } = useDeleteTasks();

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();

    const isConfirmed = confirm('Tem certeza de que deseja deletar as tarefas selecionadas?');

    if (!isConfirmed) {
      return;
    }

    value.forEach(id => {
      deleteTask(id, onSuccess);
    });
  };

  return (
    <form onSubmit={handleDelete}>
      <Button type="submit" className='delCheck' title='deletar' />
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>} 
    </form>
  );
};

export default DeleteTaskCheckbox;
