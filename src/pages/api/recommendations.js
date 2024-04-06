import { getRecommendationsEndpoint } from '../../utils/api';

async function handler(req, res) {
  if (req.method === 'GET') {
    const API_ENDPOINT = getRecommendationsEndpoint();

    try {
      const fastApiResponse = await fetch(API_ENDPOINT, {
        method: 'GET',
      });
      const data = await fastApiResponse.json();
      console.log('getting recommendations:', data);
      res.status(200).json(data);
    } catch (error) {
      console.error('Failed to fetch from FastAPI:', error);
      res
        .status(500)
        .json({ message: 'Failed to fetch response from FastAPI backend' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
export default handler;
