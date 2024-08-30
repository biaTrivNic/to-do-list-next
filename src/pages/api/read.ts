import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../utils/db';
import { RowDataPacket } from 'mysql2';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      let query = 'SELECT * FROM tasks';
      let queryParams: any[] = [];

      if (id) {
        if (Array.isArray(id)) {
          res.status(400).json({ error: 'ID inválido' });
          return;
        }

        const numericId = parseInt(id as string, 10);
        if (isNaN(numericId)) {
            res.status(400).json({ error: 'ID inválido' });
            return;
          }
        query += ' WHERE id = ?';
        queryParams.push(numericId);
      }

      const [rows]: [RowDataPacket[], any] = await db.execute(query, queryParams);

      res.status(200).json(rows);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      res.status(500).json({ error: 'Erro ao buscar dados' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
