import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../utils/db';

const allowedFields = ['name', 'status']; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id, valor, campo } = req.body;

    if (!id || !valor || !campo || !allowedFields.includes(campo)) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }

    try {
      const query = `UPDATE tasks SET ${campo} = ? WHERE id = ?`;
      const [result] = await db.execute(query, [valor, id]);
      res.status(200).json({ message: 'Dado atualizado com sucesso!' });
    } catch (error) {
      console.error('Erro ao atualizar dados:', error); 
      res.status(500).json({ error: 'Erro ao atualizar dados' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
