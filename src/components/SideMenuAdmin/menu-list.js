import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Listar Carros',
    link: paths.Cars,
    icon: ShoppingCartIcon
  },
  {
    id: 2,
    label: 'Novo Carros',
    link: paths.NewCar,
    icon: AddShoppingCartIcon
  }
]

export default listLinks
