import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
`

export const BrandsMenu = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5vw;
  margin-top: 5vh;
`

export const BrandButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveBrand && '2px solid red'};
  color: ${props => (props.isActiveBrand ? 'red' : '#000')};
  font-size: 1rem;
  line-height: 22px;
`


export const CarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  gap: 5vw;
  padding: 3vw;
`
