import React, { useContext, useState } from 'react';
import { ChatContext } from './ChatContext';
import avatar from './img/web.png';

function ContactList({ currentContactId, onSelectContact }) {
  const { state } = useContext(ChatContext);
  const [searchValue, setSearchValue] = useState('');

  const SearchConatct = state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="contactlist-outer">
      <h3>Chats</h3>
      <input
        type="text"
        className="search-box"
        placeholder="Search or start a new chat"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="contact-list">
        {SearchConatct.map((contact) => (
          <div
            key={contact.id}
            className={`contact ${currentContactId === contact.id ? 'active' : ''}`}
            onClick={() => onSelectContact(contact.id)}
          >
            <img src={avatar} alt={contact.name} className="contact-icon" />
            <p className="contact-name">{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
