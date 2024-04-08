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
          width: 750,
          height: 300,
          pr: 8,
          borderColor: 'white',
          borderWidth: 2,
          borderStyle: 'solid',
          backgroundColor: '#6a202b',
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
          <Typography
            sx={{ color: 'white' }}
            level="title-lg"
            id="card-description"
          >
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
              sx={{ color: '#aec2b8' }}
            >
              {position}
            </Link>
          </Typography>
          <CardContent>
            <Chip size="sm" sx={{ backgroundColor: '#ed8d91' }}>
              <Link
                sx={{ color: '#97263a', textDecoration: 'none' }}
                href={linkedinLink}
              >
                View on LinkedIn
              </Link>
            </Chip>
            <Typography sx={{ pt: 1, color: 'white' }} level="title-md">
              What they say:
            </Typography>
            <Typography
              sx={{
                maxHeight: 150,
                overflowY: 'auto',
                display: '-webkit-box',
                textAlign: 'justify',
                textJustify: 'inter-word',
                color: 'white',
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
