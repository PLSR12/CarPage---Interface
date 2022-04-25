import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListMotors from './ListMotors'
import NewMotors from './NewMotor'
import EditMotor from './EditMotor'


import { SideMenuAdminMotors } from '../../components'
import paths from '../../constants/paths'

export function AdminMotors ({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdminMotors path={path}  />
      <ContainerItems>
        {path === paths.Motors && <ListMotors />}
        {path === paths.NewMotors && <NewMotors />}
        {path === paths.EditMotors && <EditMotor />}

      </ContainerItems>
    </Container>
  )
}

AdminMotors.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
