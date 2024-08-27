'use client';

import React from 'react';
import Button from '../Button/Button';
import useDeleteTasks from '@/hooks/useDeleteTasks';

const DeleteTask: React.FC<{ value: number }> = ({ value }) => {

  const { deleteTask } = useDeleteTasks();

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();

    deleteTask(value)
  };

  return (
    <form onSubmit={handleDelete}>
      <Button value={value} type="submit" text="Deletar" />
    </form>
  );
};

export default DeleteTask;
