'use client'

import React from 'react';
import Button from '../Button/Button';
import useUpdateTask from '@/hooks/useUpdateTask';

const UndoneTask: React.FC<{ id: number, onSuccess: () => void }> = ({ id, onSuccess }) => {

  const { updateTask, error } = useUpdateTask();

  const undoneTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    updateTask(id, 'pending', 'status', onSuccess);
   
  };


  return (
    <form onSubmit={undoneTask}>
      <Button type="submit" text="Desfazer" className='undoneBtn' title='desfazer'/>
      {error && <p>{error}</p>}
    </form>
  );
};

export default UndoneTask;
