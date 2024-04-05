// utils/api.js
//CHANGE TO:LOCAL_API_ENDPOINT for local development
//CHANGE TO:PUBLIC_API_ENDPOINT for amplify
export const getApiEndpoint = question => {
  const endpoint = process.env.PUBLIC_API_ENDPOINT;
  return `${endpoint}?question=${encodeURIComponent(question)}`;
};

export const getRecommendationsEndpoint = () => {
  const endpoint = process.env.LOCAL_API_RECOMMENDATIONS_ENDPOINT;
  console.log('recommendations', endpoint);
  return endpoint;
};
