import React from 'react';
import ReactEmoji from 'react-emoji';
import {
  MessageBox,
  MessageContainer,
  MessageText,
  SentText,
} from './Message.styled';

export const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <MessageContainer justify="flex-end">
      <SentText padding="0 10px 0 0">{trimmedName}</SentText>
      <MessageBox bg="#2979FF">
        <MessageText color="#fff">{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
    </MessageContainer>
  ) : (
    <MessageContainer justify="flex-start">
      <MessageBox bg="#F3F3F3">
        <MessageText color="#353535">{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
      <SentText padding="0 0 0 10px">{user}</SentText>
    </MessageContainer>
  );
};
