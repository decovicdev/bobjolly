import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

export default () =>
  nextConnect<NextApiRequest, NextApiResponse>({
    onError: (error, _, res) => {
      res.status(500).json({
        error: error.message,
      });
    },
    onNoMatch: (req, res) => {
      res.status(405).json({
        error: `Method ${req.method} not allowed`,
      });
    },
  });
