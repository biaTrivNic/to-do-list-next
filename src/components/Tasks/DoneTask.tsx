'use client'

import React from 'react';
import Button from '../Button/Button';
import useUpdateTask from '@/hooks/useUpdateTask';

const DoneTask: React.FC<{ id: number, onSuccess: () => void }> = ({ id, onSuccess }) => {

  const { updateTask, error } = useUpdateTask();

  const doneTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateTask(id, 'done', 'status', onSuccess);
  };

  return (
    <form onSubmit={doneTask}>
      <Button type="submit" text="Concluir" className='doneBtn' title='concluir'/>
      {error && <p>{error}</p>}
    </form>
  );
};

export default DoneTask;
