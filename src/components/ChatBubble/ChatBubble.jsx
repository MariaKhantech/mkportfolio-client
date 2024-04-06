import * as React from 'react';
import { motion } from 'framer-motion';
import Alert from '@mui/joy/Alert';

function ChatBubble({ children, userChat, bgColor }) {
  return (
    <motion.div
      className="chat-bubble"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Alert
        variant="outlined"
        sx={{
          borderRadius: userChat ? '20px 20px 0px 20px' : '20px 20px 20px 0px',
          width: 250,
          minHeight: 25,
          backgroundColor: `${bgColor}`,
          boxShadow: 'sm',
          p: 2,
          position: 'relative',
        }}
      >
        <span
          className="chat-bubble-tail"
          sx={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            backgroundColor: { bgColor },
            width: 15,
            height: 15,
            borderRadius: '50%',
          }}
        />
        {children}
      </Alert>
    </motion.div>
  );
}

export default ChatBubble;
