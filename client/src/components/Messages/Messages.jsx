import React from 'react';
import { Message } from './Message/Message';
import { MessagesContainer } from './Messages.styled';

export const Messages = ({ messages, name }) => {
  return (
    <MessagesContainer>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </MessagesContainer>
  );
};
