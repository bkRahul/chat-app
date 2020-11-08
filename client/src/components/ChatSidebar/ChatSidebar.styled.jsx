import styled from "styled-components";

export const ChatSidebarContainer = styled.div`
  color: #fff;
  background: #2979ff;
  height: 60%;
  border-radius: 4px 0 0 4px;
  padding: 0 40px 0 12px;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const OnlineIcon = styled.img`
  margin-right: 10%;
`;

export const User = styled.p`
  display: flex;
  align-items: center;
`;

export const ChatSidebarHeading = styled.h4``;
