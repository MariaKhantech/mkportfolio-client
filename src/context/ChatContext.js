import React, { createContext, useState } from 'react';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addChatQuestion = (questionId, questionText) => {
    const questionObject = {
      id: questionId,
      question: questionText,
      answer: '',
    };
    setChatHistory(prevHistory => [...prevHistory, questionObject]);
  };

  const addChatAnswer = (questionId, answerText) => {
    setChatHistory(prevHistory =>
      prevHistory.map(q =>
        q.id === questionId ? { ...q, answer: answerText } : q
      )
    );
  };

  const clearChatHistory = () => {
    setChatHistory([]);
  };

  return (
    <ChatContext.Provider
      value={{
        chatHistory,
        addChatQuestion,
        addChatAnswer,
        clearChatHistory,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
