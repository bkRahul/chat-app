import React from "react";
import closeIcon from "../../assets/images/closeIcon.png";
import burgerIcon from "../../assets/images/hamburger.png";

import {
  LeftInnerContainer,
  InfoBarContainer,
  RightInnerContainer,
  BurgerIcon,
} from "./Infobar.styled";

export const Infobar = ({ room, setShowSidebar, showSidebar }) => {
  return (
    <InfoBarContainer>
      <BurgerIcon
        src={burgerIcon}
        alt="menu"
        onClick={() => setShowSidebar(!showSidebar)}
      />
      <LeftInnerContainer>
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
