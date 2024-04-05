import React from 'react';
import { Box, Container, Grid, Button } from '@mui/material';
import ResumeChatBot from '../../components/ResumeChatbot/ResumeChatbot';
import PDFViewer from '../../components/PDFViewer/PDFViewer';


const chatBot = () => {
  const [open, setOpen] = React.useState(false);
  return (
    // <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <>
      {/* Toggle Button for demonstration */}
      <Button onClick={() => setOpen(!open)} variant="contained" sx={{ mb: 2 }}>
        Toggle Placeholder
      </Button>

      <Grid container spacing={2} sx={{ height: '100%' }}>
        {/* Placeholder for future use, visibility toggled by `open` */}
        {/* {open && ( */}
        <Grid
          item
          xs={2}
          sm={2}
          md={open ? 4 : 4}
          lg={open ? 6 : 4}
          xl={open ? 6 : 4}
        >
          <Box
            sx={{
              height: '100%',
              backgroundColor: 'lightblue', // For demonstration
              display: open ? 'flex' : 'none',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
            }}
          >
            <PDFViewer />
          </Box>
        </Grid>
        {/* )} */}

        <Grid
          item
          xs={open ? 8 : 10}
          sm={open ? 8 : 10}
          md={open ? 4 : 4}
          lg={open ? 6 : 4}
          xl={open ? 6 : 4}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ResumeChatBot />
          </Box>
        </Grid>

        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          {' '}
         
        </Grid> */}
      </Grid>
    </>
    // </Container>
  );
};

export default chatBot;
