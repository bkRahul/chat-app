import React from "react";
import {
  ChatSidebarContainer,
  ChatSidebarHeading,
  OnlineIcon,
  User,
} from "./ChatSidebar.styled";
import onlineIcon from "../../assets/images/onlineIcon.png";

export const ChatSidebar = ({ users }) => {
  return (
    <ChatSidebarContainer>
      <ChatSidebarHeading>Users Online</ChatSidebarHeading>
      {users.map(({ name, id }) => (
        <User key={id}>
          <OnlineIcon src={onlineIcon} alt="online" />
          {name.toUpperCase()}
        </User>
      ))}
    </ChatSidebarContainer>
  );
};
