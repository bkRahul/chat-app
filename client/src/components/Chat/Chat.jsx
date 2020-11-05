import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Input } from '../Input/Input';
import { Infobar } from '../Infobar/Infobar';
import { ChatOuterContainer, ChatContainer } from './Chat.styled';
import { Messages } from '../Messages/Messages';

let socket;
const ENDPOINT = 'http://localhost:5000';

export const Chat = props => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = props.match.params;
    setName(name);
    setRoom(room);
    socket = io(ENDPOINT);

    //emit join event
    socket.emit('join', { name, room }, error => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      //emit disconnect event
      socket.emit('disconnect');
      socket.off();
    };
  }, [props.match.params]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });
  }, []);

  //send messages
  const sendMessage = e => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  console.log('message=>>', message);
  console.log('messages=>>', messages);

  return (
    <ChatOuterContainer>
      <ChatContainer>
        <Infobar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </ChatContainer>
    </ChatOuterContainer>
  );
};
