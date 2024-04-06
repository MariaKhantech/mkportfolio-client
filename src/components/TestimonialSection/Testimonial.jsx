import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Testimonial({ recommendations }) {
  const [[page], setPage] = useState([0, 0]);

  const paginateTestimonial = newDirection => {
    const nextPage =
      (page + newDirection + recommendations.posts.length) %
      recommendations.posts.length;
    setPage([nextPage, newDirection]);
  };

  const post = recommendations.posts[page];

  return (
    <Box
      component="section"
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
        px: 3,
        pt: 6,
        pb: 3,
        backgroundColor: '#97263a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          maxWidth: '690px',
          flexGrow: 1,
          margin: 'auto',
        }}
      >
        <Grid item>
          <Typography
            component="h4"
            level="h4"
            fontWeight="lg"
            sx={{ color: 'white' }}
          >
            Testimonials
          </Typography>
        </Grid>
        <Grid item>
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialCard
              img={post.profile_image}
              name={post.profile_name}
              position={post.profile_position}
              description={post.description}
              linkedinLink={post.profile_link}
            />
          </motion.div>
        </Grid>
        <Box sx={{ justifyContent: 'center' }}>
          <Grid item container justifyContent="space-between">
            <Button
              className="prev"
              onClick={() => paginateTestimonial(-1)}
              aria-label="Previous testimonial"
              size="large"
            >
              {<ArrowBackIosIcon sx={{ color: 'white' }} />}
            </Button>
            <Typography
              fontWeight="lg"
              sx={{ color: 'white', mt: '18px' }}
              component="span"
            >
              {`${page + 1} of ${recommendations.posts.length}`}
            </Typography>
            <Button
              className="next"
              onClick={() => paginateTestimonial(1)}
              aria-label="Next testimonial"
              size="large"
            >
              {<ArrowForwardIosIcon sx={{ color: 'white' }} />}
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default Testimonial;
