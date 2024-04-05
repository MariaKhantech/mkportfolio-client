import { Typography, Button, Grid, IconButton, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

function Hero() {
  return (
    <Grid
      container
      sx={{ minHeight: '50vh', pt: 10, pb: 10 }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} md={8} lg={6} sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          color="#97263a"
          sx={{ letterSpacing: 8, marginTop: 3 }}
        >
          MK Portfolio
        </Typography>
        <Typography variant="h6" color="#97263a" sx={{ letterSpacing: 2 }}>
          Software Engineer
        </Typography>
        <Typography
          variant="body1"
          fontFamily="Raleway"
          color="#97263a"
          sx={{ fontSize: '20px', marginTop: 3, marginBottom: 3 }}
        >
          I have created a fun way for you to learn about my developmental
          experience as well as interests. Imagine interacting with a chatbot
          that not only narrates my professional journey but also showcases my
          skills and projects in a conversational manner.
        </Typography>
        <Link
          href="/chat/resumeaibot"
          underline="none"
          sx={{ color: '#e86f66', marginBottom: 5 }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              backgroundColor: 'transparent',
              borderColor: '#e86f66',
              borderRadius: '9999px',
              borderTopWidth: '0px',
              borderBottomWidth: '0px',
              borderLeftWidth: '2px',
              borderRightWidth: '2px',
              ':hover': {
                bgcolor: 'rgba(232, 111, 102, 0.1)',
                borderColor: '#d85a50',
              },
            }}
          >
            Let's chat with us
          </Button>
        </Link>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: 10,
          }}
        >
          <Link href="https://www.linkedin.com/" passHref>
            <IconButton
              target="_blank"
              aria-label="LinkedIn"
              sx={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '2px solid #97263a',
                bgcolor: '#ed8d91',
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Link>
          
          <Link href="https://github.com/" passHref>
            <IconButton
              target="_blank"
              aria-label="GitHub"
              sx={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '2px solid #97263a',
                bgcolor: '#ed8d91',
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Hero;
