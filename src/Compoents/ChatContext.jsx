import React, { createContext, useReducer } from 'react';

const ChatContext = createContext();

const initialState = {
  contacts: [
    { id: 1, name: 'Shantanu' },
    { id: 2, name: 'Aniket' },
    { id: 3, name: 'Sujit' },
    { id: 4, name: 'Chirag' },
  ],
  messages: {
    1: [{ id: 1, text: 'Hello...!', sender: 'me', timestamp: Date.now() }],
    2: [{ id: 2, text: 'Hi', sender: 'me', timestamp: Date.now() }],
  },
};

function chatReducer(state, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      const { contactId, message } = action.payload;
      return {
        ...state,
        messages: {
          ...state.messages,
          [contactId]: [...(state.messages[contactId] || []), message],
        },
      };
    default:
      return state;
  }
}

function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };
