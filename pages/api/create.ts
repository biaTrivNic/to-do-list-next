import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { campo1, campo2 } = req.body;

    try {
      const [result] = await db.execute('INSERT INTO tasks (campo1, campo2) VALUES (?, ?)', [campo1, campo2]);
      res.status(201).json({ message: 'Dado inserido com sucesso!', id: (result as any).insertId });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao inserir dados' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}