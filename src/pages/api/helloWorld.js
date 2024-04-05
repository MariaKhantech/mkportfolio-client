// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/data.js

export default async function handler(req, res) {
  // URL of the external API you want to fetch data from
  //const externalApiUrl =
  //'https://19vcjmc425.execute-api.us-east-1.amazonaws.com/dev/helloworld';

  // const externalApiUrl =  'https://reqres.in/api/users/2';

  const externalApiUrl = 'http://localhost:8000/chat';

  try {
    // Fetch data from the external API
    const response = await fetch(externalApiUrl);
    const data = await response.json();

    // Return the fetched data as JSON
    res.status(200).json(data);
  } catch (error) {
    // Handle any errors that occur during the fetch
    res
      .status(500)
      .json({ message: 'Failed to fetch data', error: error.message });
  }
}
