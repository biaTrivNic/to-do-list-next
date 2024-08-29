'use client'

import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';
import useUpdateTask from '@/hooks/useUpdateTask';

const EditTask: React.FC<{ value: string, id: number }> = ({ value, id }) => {

  const { updateTask, error, errorMinLength } = useUpdateTask();

  const [editedTask, setEditedTask] = useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  const editTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    updateTask(id, editedTask, 'name');
  };

  return (
    <form onSubmit={editTask}>
      <Input type='text' value={editedTask} onChange={handleChange} />
      <Button type="submit" text=">" />
      {error && <p>{error}</p>}
      {errorMinLength && <p>{errorMinLength}</p>}
    </form>
  );
};

export default EditTask;
