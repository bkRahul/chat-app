import React from 'react';
import { Form, SendButton, InputContainer } from './Input.styled';

export const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <Form>
      <InputContainer
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <SendButton className="sendButton" onClick={e => sendMessage(e)}>
        Send
      </SendButton>
    </Form>
  );
};
