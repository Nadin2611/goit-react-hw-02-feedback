import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonItem = styled.button`
  font-size: 26px;
  margin: 5px;
  padding: 8px 12px;
  cursor: pointer;
  min-width: 150px;
  min-height: 50px;
  color: black;
  border: none;
  border-radius: 4px;
  text-transform: capitalize;

  &:hover {
    background-color: #45a049;
  }
`;
