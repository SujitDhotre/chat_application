import { useState } from 'react';
import './App.css';
import ChatWindow from './Compoents/ChatWindow';
import ContactList from './Compoents/ContactList';
import { ChatProvider } from './Compoents/ChatContext';

function App() {
  const [currentContactId, setCurrentContactId] = useState(2); 

  return (   
    <ChatProvider>
      <div className="app">
        <ContactList 
          currentContactId={currentContactId} 
          onSelectContact={setCurrentContactId} 
        />
        <ChatWindow currentContactId={currentContactId} />
      </div>
    </ChatProvider>   
  );
}

export default App;
