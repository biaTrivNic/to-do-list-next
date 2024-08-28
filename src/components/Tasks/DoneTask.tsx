'use client'

import React from 'react';
import Button from '../Button/Button';
import { useState } from 'react';

const DoneTask: React.FC<{ id: number }> = ({ id }) => {

  const [error, setError] = useState<string | null>(null);

  const doneTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);

    const data = { campo: 'status', valor: 'done', id: id };

    try {
      const response = await fetch('/api/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Sucesso:', result);
    } catch (error) {
      setError('Não foi possível salvar os dados');
      console.error('Erro:', error);
    }
  };

  return (
    <form onSubmit={doneTask}>
      <Button type="submit" text="Concluir" />
    </form>
  );
};

export default DoneTask;
