import React from 'react'

import PropTypes from 'prop-types'

import {
  ContainerCard,
  CarName,
  CarDescription,
  ContainerImage,
  ContainerText,
  CarYear,
  CarTrasmission,
  CarMileage,
  CarFuel,
  CarPrice
} from './styles'

export function CardCars ({ car }) {
  return (
    <ContainerCard>
      <ContainerImage>
        <img src={car.url} alt='foto do carro'></img>
      </ContainerImage>
      <ContainerText>
        <CarName> {car.name} </CarName>
        <CarDescription> {car.description}</CarDescription>
        <div>
          <CarYear> {car.year}</CarYear>
          <CarTrasmission> {car.transmission} </CarTrasmission>
          <CarMileage> {car.mileage}Km </CarMileage>
          <CarFuel> {car.fuel} </CarFuel>
        </div>
        <CarPrice> {car.formatedPrice}</CarPrice>
      </ContainerText>
    </ContainerCard>
  )
}

CardCars.propTypes = {
  car: PropTypes.object
}
