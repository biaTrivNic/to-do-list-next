import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id, campo1, campo2 } = req.body;

    try {
      const [result] = await db.execute('UPDATE tasks SET campo1 = ?, campo2 = ? WHERE id = ?', [campo1, campo2, id]);
      res.status(200).json({ message: 'Dado atualizado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar dados' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}