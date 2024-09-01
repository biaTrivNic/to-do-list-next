"use client";

import { useState } from 'react';

const useInsertTask = () => {
    const [error, setError] = useState<string | null>(null);
    const [errorMinLength, setErrorMinLength] = useState<string | null>(null);

    const insertTask = async (newTask: string, onSuccess: () => void) => {
        setError(null);
        setErrorMinLength(null);

        if(newTask.length > 5) {
            const data = { name: newTask };

            fetch('/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(result => {
                    console.log('Sucesso:', result);
                    onSuccess()
                })
                .catch(error => {
                    setError('não foi possível salvar dados')
                    console.error('Erro:', error);
                });    

        } else {
            setErrorMinLength('Sua tarefa deve conter mais que 5 caracteres')
        }


    };

    return { insertTask, error, errorMinLength };
};

export default useInsertTask;
