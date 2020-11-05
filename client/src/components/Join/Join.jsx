import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Input,
  Heading,
  JoinInnerContainer,
  JoinOuterContainer,
  Button,
} from './Join.styled';

export const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <Heading>Join</Heading>
        <Input
          placeholder="Name"
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="Room"
          type="text"
          onChange={e => setRoom(e.target.value)}
        />
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`chat/${room}/${name}`}
        >
          <Button>Join Room</Button>
        </Link>
      </JoinInnerContainer>
    </JoinOuterContainer>
  );
};
