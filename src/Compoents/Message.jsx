import React from 'react';

function Message({ message }) {
  const isMe = message.sender === 'me';

  return (
    <div className={`message ${isMe ? 'me' : 'them'}`}>
      <div className="text">{message.text}</div>
      <div className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</div>
    </div>
  );
}

export default Message;
