import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';

function TestimonialCard({ img, name, position, description, linkedinLink }) {
  return (
    <div>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 650,
          height: 300,
          pr: 8,
          borderColor: '#97263a',
          borderWidth: 2,
          borderStyle: 'solid',
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <Box>
            {img ? (
              <img
                src={img}
                loading="lazy"
                alt="image of the person in the testimonial"
              />
            ) : (
              <Avatar sx={{ width: 90, height: 90 }} />
            )}
          </Box>
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg" id="card-description">
            {name}
          </Typography>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            mb={1}
          >
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: 'text.tertiary' }}
            >
              {position}
            </Link>
          </Typography>
          <CardContent>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ textDecoration: 'none', borderColor: '#97263a' }}
            >
              <Link sx={{ color: '#97263a' }} href={linkedinLink}>
                View on LinkedIn
              </Link>
            </Chip>
            <Typography sx={{ pt: 1 }} level="title-md">
              What they say:
            </Typography>
            <Typography
              sx={{
                maxHeight: 150,
                overflowY: 'auto',
                display: '-webkit-box',
                textAlign: 'justify',
                textJustify: 'inter-word',
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
}

export default TestimonialCard;
