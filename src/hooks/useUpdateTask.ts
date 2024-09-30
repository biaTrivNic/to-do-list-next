"use client";

import { useState } from 'react';

const useUpdateTask = () => {
    const [error, setError] = useState<string | null>(null);
    const [errorMinLength, setErrorMinLength] = useState<string | null>(null);

    const updateTask = async (id: number, editedTask: string, campo: 'title' | 'status', onSuccess: () => void) => {
        setError(null);
        setErrorMinLength(null);

        if (campo === 'title' && editedTask.length <= 5) {
            setErrorMinLength('Sua tarefa deve conter mais que 5 caracteres');
            return;
        }

        const data = { [campo]: editedTask }; 

        try {
            const response = await fetch(`/api/tasks/${id}`, { 
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), 
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar a tarefa');
            }

            const result = await response.json();
            onSuccess();
            console.log('Sucesso:', result);
        } catch (error) {
            setError('Não foi possível atualizar os dados');
            console.error('Erro:', error);
        }
    };

    return { updateTask, error, errorMinLength };
};

export default useUpdateTask;
