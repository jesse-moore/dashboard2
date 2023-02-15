import { NextApiRequest, NextApiResponse } from 'next/types';
import { sampleCategories } from '../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.status(200).json(sampleCategories);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: 'Error' });
    }
};

export default handler;
