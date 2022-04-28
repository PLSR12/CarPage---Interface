import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  width: 60vw;
  flex-flow: row wrap;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #cfd9e6;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`
export const ContainerImage = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  img {
    width: 20vw;
    height: 14vw;
    min-height: max-content;
    border-radius: 5px;
    padding: 5px 5px 5px 5px;

    @media (max-width: 1024px) {
      min-width: 57vw;
      min-height: 35vw;
      padding: 5px 5px 5px 5px;
    }
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  color: #686f79;
  padding: 5px 0 0 20px;
  div {
    display: flex;
    flex-flow: row wrap;
    margin: 20px 0 10px 0;
    gap: 10px;
  }
`
export const MotoName = styled.p`
  flex-wrap: wrap;
  font-size: 1.8rem;
  color: #000000;
`

export const MotoDescription = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`
export const MotoYear = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`
export const MotoTrasmission = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`
export const MotoMileage = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`

export const MotoFuel = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`
export const MotoPrice = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 21px;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #000000;
`
