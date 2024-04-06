/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatbotInput() {
  const [question, setQuestion] = useState();
  const [error, setError] = useState(null);

  const { addChatQuestion, addChatAnswer, setIsLoading } =
    useContext(ChatContext);

  const fetchData = async () => {
    const dateNow = new Date();

    await addChatQuestion(dateNow, question);

    setIsLoading(true);
    setQuestion('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
      const data = await res.json();
      console.log(data);

      await addChatAnswer(dateNow, data.answer);
    } catch (error) {
      console.error('Error fetching chat response:', error);
      setError('Failed to fetch response. Please try again.');
      await addChatAnswer(
        dateNow,
        'Failed to fetch response. Please try again'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchData();
    }
  };

  return (
    <Box
      sx={{
        borderTop: '1px solid #ccc',
        px: 2,
        py: 1,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message here..."
        onChange={e => setQuestion(e.target.value)}
        value={question}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={fetchData} edge="end">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
}
export default ChatbotInput;
