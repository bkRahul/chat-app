import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

export const InputContainer = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const SendButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;
