import React from 'react'

import Logo from '../../assets/logo_super_carros.png'

import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  Line
} from './styles'

export function Header () {
  return (
    <Container>
      <ContainerLeft>
        <img src={Logo} alt='Logo' />
      </ContainerLeft>
      <ContainerRight>
        <PageLink>Carros</PageLink>
        <Line> </Line>
        <PageLink>Motos</PageLink>
      </ContainerRight>
    </Container>
  )
}
