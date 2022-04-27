import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListTrucks from './ListTrucks'
import NewTruck from './NewTruck'
import EditTruck from './EditTruck'


import { SideMenuAdminTrucks } from '../../components'
import paths from '../../constants/paths'

export function AdminTrucks ({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdminTrucks path={path}  />
      <ContainerItems>
        {path === paths.Trucks && <ListTrucks />}
        {path === paths.NewTruck && <NewTruck />}
        {path === paths.EditTruck && <EditTruck />}

      </ContainerItems>
    </Container>
  )
}

AdminTrucks.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
