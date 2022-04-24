import React from 'react'

import PropTypes from 'prop-types'

import {
  ContainerCard,
  MotoName,
  MotoDescription,
  ContainerImage,
  ContainerText,
  MotoYear,
  MotoTrasmission,
  MotoMileage,
  MotoFuel,
  MotoPrice
} from './styles'

export function CardMotorcycles ({ moto }) {
  return (
    <ContainerCard>
      <ContainerImage>
        <img src={moto.url} alt='foto do carro'></img>
      </ContainerImage>
      <ContainerText>
        <MotoName> {moto.name} </MotoName>
        <MotoDescription> {moto.description}</MotoDescription>
        <div>
          <MotoYear> {moto.year}</MotoYear>
          <MotoTrasmission> {moto.transmission} </MotoTrasmission>
          <MotoMileage> {moto.mileage}Km </MotoMileage>
          <MotoFuel> {moto.fuel} </MotoFuel>
        </div>
        <MotoPrice> {moto.formatedPrice}</MotoPrice>
      </ContainerText>
    </ContainerCard>
  )
}

CardMotorcycles.propTypes = {
  moto: PropTypes.object
}
