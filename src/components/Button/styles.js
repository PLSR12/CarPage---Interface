import styled from 'styled-components'

export const ComponentButton = styled.button`
  min-width: 15vh;
  height: 5vh;
  background: red;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #eeeeee;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
