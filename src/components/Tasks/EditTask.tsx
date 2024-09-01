'use client';

import React, { useRef, useEffect, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import useUpdateTask from '@/hooks/useUpdateTask';

const EditTask: React.FC<{ value: string, id: number, onSuccess: () => void }> = ({ value, id, onSuccess }) => {
  const { updateTask, error, errorMinLength } = useUpdateTask();

  const [editedTask, setEditedTask] = useState<string>(value);

  const inputRef = useRef<HTMLInputElement>(null); 

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  }, []); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  const editTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTask(id, editedTask, 'name', onSuccess);
  };

  return (
    <form onSubmit={editTask}>
      <Input 
        ref={inputRef} 
        type="text" 
        value={editedTask} 
        className="edit" 
        onChange={handleChange} 
      />
      <Button type="submit" text=">" className='editBtn' title='enviar'/>
      {error && <p>{error}</p>}
      {errorMinLength && <p className="error" style={{ color: 'red' }}>{errorMinLength}</p>} 
    </form>
  );
};

export default EditTask;
