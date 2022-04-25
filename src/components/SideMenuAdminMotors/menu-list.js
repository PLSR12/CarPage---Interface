import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Listar Motos',
    link: paths.Motors,
    icon: DirectionsCarIcon
  },
  {
    id: 2,
    label: 'Nova Moto',
    link: paths.NewMotor,
    icon: AddCircleIcon
  }
]

export default listLinks
