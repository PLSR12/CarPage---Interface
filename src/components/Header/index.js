import React from 'react'

import { useHistory } from 'react-router-dom'

import Logo from '../../assets/logo_super_carros.png'

import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  Line
} from './styles'

export function Header () {
  const {
    push,
    location: { pathname }
  } = useHistory()

  return (
    <Container>
      <ContainerLeft>
        <button onClick={() => push('/')}>
          <img src={Logo} alt='Logo' />
        </button>
      </ContainerLeft>
      <ContainerRight>
        <PageLink
          onClick={() => push('/carros')}
          isActive={pathname === '/carros'}
        >
          Carros
        </PageLink>
        <Line> </Line>
        <PageLink
          onClick={() => push('/motos')}
          isActive={pathname === '/motos'}
        >
          Motos
        </PageLink>
        <Line> </Line>
        <PageLink
          onClick={() => push('/caminhoes')}
          isActive={pathname === '/caminhoes'}
        >
          Caminhões
        </PageLink>
      </ContainerRight>
    </Container>
  )
}
