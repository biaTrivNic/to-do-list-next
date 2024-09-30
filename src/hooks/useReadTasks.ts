"use client";

import { useState } from 'react';
import { Task } from '@/types';

const useReadTasks = () => {
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      if (!response.ok) {
        if (response.status === 404) {
          setTasks([]);
          return;
        }
        throw new Error('Erro ao buscar as tarefas');
      }

      const data = await response.json();

      setTasks(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro desconhecido');
      }
    }
  };

  return { fetchTasks, tasks, error };
};

export default useReadTasks;
