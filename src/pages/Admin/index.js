import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListCars from './ListCars'
import NewCar from './NewCar'
import EditCar from './EditCar'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'

export function Admin ({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Cars && <ListCars />}
        {path === paths.NewCar && <NewCar />}
        {path === paths.EditCar && <EditCar />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
