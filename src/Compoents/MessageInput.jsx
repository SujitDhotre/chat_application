import React, { useContext, useState } from 'react';
import { ChatContext } from './ChatContext';
import send from './img/send.png'
import mic from './img/mic.png'
import smile from './img/smile.png'
import pin from './img/pin.png'

function MessageInput({ contactId }) {
  const { dispatch } = useContext(ChatContext);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      dispatch({
        type: 'SEND_MESSAGE',
        payload: {
          contactId,
          message: { id: Date.now(), text: input, sender: 'me', timestamp: Date.now() },
        },
      });
      setInput('');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <div>
        <img src={smile} alt="" className='styled-icon'/>
        <img src={pin} alt="" className='styled-icon'/>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        onKeyDown={handleEnter}
      />
      <button onClick={handleSend}>
        <img src={`${input == ""? mic : send}`} alt="Send" className='send-btn' />
      </button>
    </div>
  );
}

export default MessageInput;
