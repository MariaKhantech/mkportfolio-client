'use client';
/* eslint-disable no-unused-vars */
import ChatHeader from './ChatHeader';
import { Grid } from '@mui/material';
import ResumeChatbotContent from './ResumeChatbotContent';
import ResumeChatbotFooter from './ResumeChatbotFooter';

function ResumeGptBot() {
  return (
    <>
      <Grid
        container
        sx={{
          width: '100%',
          margin: '0 auto',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e0e0e0',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          height: '85vh',
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ChatHeader />
          <ResumeChatbotContent />
          <ResumeChatbotFooter />
        </Grid>
      </Grid>
    </>
  );
}

export default ResumeGptBot;
