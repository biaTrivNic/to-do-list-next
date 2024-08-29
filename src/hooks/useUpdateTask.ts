"use client";

import { useState } from 'react';

const useUpdateTask = () => {
    const [error, setError] = useState<string | null>(null);
    const [errorMinLength, setErrorMinLength] = useState<string | null>(null);

    const updateTask = async (id: number, editedTask: string, campo : string) => {
        setError(null);
        setErrorMinLength(null);

        if(editedTask.length > 5 || campo == 'status') {
            const data = { campo: campo, valor: editedTask, id: id };
    
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
        } else {
            setErrorMinLength('Deve conter mais que 5 caracteres');
        }
      };

    return { updateTask, error, errorMinLength };
};

export default useUpdateTask;
