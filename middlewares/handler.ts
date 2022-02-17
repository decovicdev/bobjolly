import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

export default nextConnect<NextApiRequest, NextApiResponse>({
  onError: (error, _, res) => {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  },
  onNoMatch: (req, res) => {
    res.status(405).json({
      status: 'error',
      message: `Method ${req.method} not allowed`,
    });
  },
});
