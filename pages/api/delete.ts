import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      await db.execute('DELETE FROM tasks WHERE id = ?', [id]);
      res.status(200).json({ message: 'Dado deletado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar dados' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
