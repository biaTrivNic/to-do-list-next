"use client";

import { useState } from 'react';

const useInsertTask = () => {
    const [error, setError] = useState<string | null>(null);

    const insertTask = async (newTask: string) => {
        setError(null);

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
            })
            .catch(error => {
                setError('não foi possível salvar dados')
                console.error('Erro:', error);
            });

    };

    return { insertTask, error };
};

export default useInsertTask;
