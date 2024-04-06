import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import ResumeChatBot from '../../components/ResumeChatbot/ResumeChatbot';
import PDFViewer from '../../components/PDFViewer/PDFViewer';

function Chatbot() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)} variant="contained" sx={{ mb: 2 }}>
        Toggle Placeholder
      </Button>

      <Grid container spacing={2} sx={{ height: '100%' }}>
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
              backgroundColor: 'lightblue',
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
      </Grid>
    </>
  );
}

export default Chatbot;
