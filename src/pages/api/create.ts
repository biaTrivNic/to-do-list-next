import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body; 

    if (!name) {
      return res.status(400).json({ error: 'name é obrigatório' });
    }

    try {
      const [result] = await db.execute('INSERT INTO tasks (name) VALUES (?)', [name]);
      res.status(201).json({ message: 'Dado inserido com sucesso!' });
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
      res.status(500).json({ error: 'Erro ao inserir dados' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
