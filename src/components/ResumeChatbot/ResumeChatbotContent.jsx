/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import Box from '@mui/joy/Box';
import ChatBubble from '../ChatBubble/ChatBubble';
import LinearProgress from '@mui/material/LinearProgress';

function ResumeChatbotContent(props) {
  const { chatHistory, isLoading } = useContext(ChatContext);

  return (
    <div>
      <Box sx={{ height: '70vh', overflowY: 'auto', backgroundColor: 'white' }}>
        {chatHistory.map((chat, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'right',
                marginTop: '1rem',
                marginRight: '1rem',
              }}
            >
              <ChatBubble userChat={true} bgColor="#218aff">
                {chat.question}
              </ChatBubble>
            </div>
            {chat.answer && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'left',
                  marginTop: '1rem',
                  marginLeft: '1rem',
                }}
              >
                <ChatBubble botChat={true} bgColor="#aeb9cc">
                  {chat.answer}
                </ChatBubble>
              </div>
            )}
          </React.Fragment>
        ))}
        {isLoading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '1rem',
              padding: '2rem',
            }}
          >
            <Box sx={{ width: '15%' }}>
              <LinearProgress />
            </Box>
          </div>
        )}
      </Box>
    </div>
  );
}

export default ResumeChatbotContent;
