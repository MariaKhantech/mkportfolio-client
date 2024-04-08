import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';

function WorkExperience() {
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
            sx={{ color: 'black' }}
          >
            Work Experience
          </Typography>
        </Grid>
        <Box sx={{ justifyContent: 'center' }}>
          <Grid item container justifyContent="space-between">
            STUFF GOES HERE
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default WorkExperience;
