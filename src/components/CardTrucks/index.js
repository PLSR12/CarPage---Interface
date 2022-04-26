import React from 'react'

import PropTypes from 'prop-types'

import {
  ContainerCard,
  TruckName,
  TruckDescription,
  ContainerImage,
  ContainerText,
  TruckYear,
  TruckTrasmission,
  TruckMileage,
  TruckFuel,
  TruckPrice
} from './styles'

export function CardTrucks ({ truck }) {
  return (
    <ContainerCard>
      <ContainerImage>
        <img src={truck.url} alt='foto do carro'></img>
      </ContainerImage>
      <ContainerText>
        <TruckName> {truck.name} </TruckName>
        <TruckDescription> {truck.description}</TruckDescription>
        <div>
          <TruckYear> {truck.year}</TruckYear>
          <TruckTrasmission> {truck.transmission} </TruckTrasmission>
          <TruckMileage> {truck.mileage}Km </TruckMileage>
          <TruckFuel> {truck.fuel} </TruckFuel>
        </div>
        <TruckPrice> {truck.formatedPrice}</TruckPrice>
      </ContainerText>
    </ContainerCard>
  )
}

CardTrucks.propTypes = {
  car: PropTypes.object
}
