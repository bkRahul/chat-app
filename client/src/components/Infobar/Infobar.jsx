import React from 'react';
import onlineIcon from '../../assets/images/onlineIcon.png';
import closeIcon from '../../assets/images/closeIcon.png';
import {
  LeftInnerContainer,
  InfoBarContainer,
  OnlineIcon,
  RightInnerContainer,
} from './Infobar.styled';

export const Infobar = ({ room }) => {
  return (
    <InfoBarContainer>
      <LeftInnerContainer>
        <OnlineIcon src={onlineIcon} alt="online" />
        <h3>{room}</h3>
      </LeftInnerContainer>
      <RightInnerContainer>
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </RightInnerContainer>
    </InfoBarContainer>
  );
};
