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
  gap: 3vw;
  margin-top: 3vh;
`

export const BrandButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveBrand && '2px solid red'};
  color: ${props => (props.isActiveBrand ? 'red' : '#000')};
  font-size: 1rem;
  line-height: 22px;
  padding-bottom: 5px;
`


export const CarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  gap: 3vw;
  padding: 4vw;
`
