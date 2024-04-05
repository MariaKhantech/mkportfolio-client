import React, { useContext } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { ChatContext } from '../../context/ChatContext';

function ChatHeader() {
  const { isLoading } = useContext(ChatContext);
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        mt: 2,
        pl: 2,
        pb: 2,
      }}
    >
      <Avatar src="/icons/logo.svg" alt="MK AI" sx={{ marginRight: 2 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Typography
          fontWeight="bold"
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          MK AI Chat Bot
          {isLoading ? (<Typography sx={{ ml: 2 }}>
            <LoadingButton
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              color="error"
            >
              Processing...
            </LoadingButton>
          </Typography>) : ""
          }
          
        </Typography>
      </Box>
    </Box>
  );
}

export default ChatHeader;
