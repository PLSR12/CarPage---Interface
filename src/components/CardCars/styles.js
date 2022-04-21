import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 45vw;
  height: max-content;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #cfd9e6;
  border-radius: 5px;
  margin: 0 0 15px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`
export const ContainerImage = styled.div`
  img {
    min-width: 15vh;
    max-width: 20vw;
    height: 14vw;
    min-height: 12vh;
    border-radius: 5px;
    padding: 5px 5px 5px 5px;
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
    margin: 15px 0 13px;
    gap: 10px;
  }
`
export const CarName = styled.p`
  flex-wrap: wrap;
  font-size: 1.8rem;
  color: #000000;
`

export const CarDescription = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`
export const CarYear = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`
export const CarTrasmission = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`
export const CarMileage = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`

export const CarFuel = styled.p`
  flex-wrap: wrap;
  font-size: 1rem;
  color: #000000;
`
export const CarPrice = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 21px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #000000;
`
