// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getLogger } from '../../logging/log-util';

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const logger = getLogger('hello');
  logger.debug('a debug message from hello.')
  
  res.status(200).json({ name: 'John Doe' })
}
