import styled from "styled-components";

export const MessageBox = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 15px;
  color: white;
  display: inline-block;
  max-width: 80%;
  background-color: ${(props) => props.bg};
`;

export const MessageText = styled.p`
  margin: 0;
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1em;
  word-wrap: break-word;
  color: ${(props) => props.color};
`;

export const MessageContainer = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 3px;
  justify-content: ${(props) => props.justify};
`;
export const SentText = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding: ${(props) => props.padding};
`;

export const MessageTextImg = styled.img`
  vertical-align: middle;
`;
