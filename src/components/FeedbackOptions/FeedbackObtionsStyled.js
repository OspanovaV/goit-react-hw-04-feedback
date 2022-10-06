import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  margin-top: 20px;
  background-color: #ffffff;
  font-size: 18px;
  color: black;
  font-weight: bold;
  border: 1px solid #e9eef3;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
            23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  &:hover {
    background-color: #959292;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;