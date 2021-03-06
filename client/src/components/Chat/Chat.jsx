import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Input } from "../Input/Input";
import { Infobar } from "../Infobar/Infobar";
import { ChatOuterContainer, ChatContainer } from "./Chat.styled";
import { Messages } from "../Messages/Messages";
import { ChatSidebar } from "../ChatSidebar/ChatSidebar";

let socket;
const ENDPOINT = "http://localhost:5000";

export const Chat = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = props.match.params;
    setName(name);
    setRoom(room);
    socket = io(ENDPOINT);

    //emit join event
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      //emit disconnect event
      socket.emit("disconnect");
      socket.off();
    };
  }, [props.match.params]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", (roomData) => {
      setUsers(roomData.users.map(({ name, id }) => ({ name, id })));
    });
  }, []);

  //send messages
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <ChatOuterContainer>
      {showSidebar && <ChatSidebar users={users} />}
      <ChatContainer>
        <Infobar
          room={room}
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          setShowSidebar={setShowSidebar}
        />
      </ChatContainer>
    </ChatOuterContainer>
  );
};
