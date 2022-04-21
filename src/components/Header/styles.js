
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 9vh;
  background-color: #000;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4vh;

  img {
      max-width:22vh;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2vh;
`
export const PageLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  line-height: 19px;
  color:white;
`
export const Line = styled.div`
  height: 4vh;
  border: 0.5px solid red;
`
