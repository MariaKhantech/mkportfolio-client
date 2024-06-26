import * as React from 'react';
import Box from '@mui/joy/Box';
import Hero from '../components/Hero/Hero';
import Testimonials from '../components/TestimonialSection/Testimonial';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import { getRecommendationsEndpoint } from '../utils/api';

function Home({ recommendations }) {
  return (
    <Box
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f7f9f8',
      }}
    >
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Testimonials recommendations={recommendations} />
    </Box>
  );
}

export default Home;

export async function getServerSideProps() {
  try {
    const API_ENDPOINT = getRecommendationsEndpoint();
    const res = await fetch(API_ENDPOINT);

    if (!res.ok) {
      throw new Error(`Failed to fetch, status code: ${res.status}`);
    }
    const data = await res.json();

    return {
      props: {
        recommendations: data,
      },
    };
  } catch (error) {
    console.error('Fetching recommendations failed:', error);
    return {
      props: {
        recommendations: [],
      },
    };
  }
}
