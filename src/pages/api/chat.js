// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getApiEndpoint } from '../../utils/api';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { question } = req.body;
    const API_ENDPOINT = getApiEndpoint(question);

    try {
      const fastApiResponse = await fetch(API_ENDPOINT, {
        method: 'GET',
      });

      if (!fastApiResponse.ok) {
        throw new Error(
          `FastAPI server responded with status ${fastApiResponse.status}`
        );
      }

      const data = await fastApiResponse.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Failed to fetch from FastAPI:', error);
      res
        .status(500)
        .json({ message: 'Failed to fetch response from FastAPI backend' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
