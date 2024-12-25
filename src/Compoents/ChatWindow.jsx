import React, { useContext } from 'react';
import { ChatContext } from './ChatContext';
import Message from './Message';
import MessageInput from './MessageInput';
import avatar from './img/web.png';


function ChatWindow({ currentContactId }) {
  const { state } = useContext(ChatContext);

  const messages = state.messages[currentContactId] || [];

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src={avatar} className="contact-icon" />
        <p>{state.contacts.find((c) => c.id === currentContactId)?.name || 'Unknown'}</p>
      </div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
      <MessageInput contactId={currentContactId} />
    </div>
  );
}

export default ChatWindow;
