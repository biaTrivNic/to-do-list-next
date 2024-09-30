"use client";

import { useState } from 'react';

const useInsertTask = () => {
    const [error, setError] = useState<string | null>(null);
    const [errorMinLength, setErrorMinLength] = useState<string | null>(null);

    const insertTask = async (newTask: string, onSuccess: () => void) => {
        setError(null);
        setErrorMinLength(null);

        if (newTask.length > 5) {
            const data = { title: newTask }; 

            fetch('/api/tasks', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(result => {
                    console.log('Sucesso:', result);
                    onSuccess(); 
                })
                .catch(error => {
                    setError('Não foi possível salvar os dados');
                    console.error('Erro:', error);
                });
        } else {
            setErrorMinLength('Sua tarefa deve conter mais de 5 caracteres');
        }
    };

    return { insertTask, error, errorMinLength };
};

export default useInsertTask;
