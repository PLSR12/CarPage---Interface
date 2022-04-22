import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Listar Carros',
    link: paths.Cars,
    icon: DirectionsCarIcon
  },
  {
    id: 2,
    label: 'Novo Carro',
    link: paths.NewCar,
    icon: AddCircleIcon
  }
]

export default listLinks
