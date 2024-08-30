"use client";

import { useState } from 'react';

const useDeleteTasks = () => {
    const [error, setError] = useState<string | null>(null);

    const deleteTask = async (id: number, onSuccess: () => void) => {
    
        try {
          const response = await fetch('/api/delete', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
          });
    
          if (!response.ok) {
            throw new Error('Erro ao deletar a tarefa');
          }

          onSuccess()
    
        } catch (err) {
            if (err instanceof Error) {
              setError(err.message);
            } else {
              setError('Ocorreu um erro desconhecido');
            }
          }
      };

    return { deleteTask, error };
};

export default useDeleteTasks;
