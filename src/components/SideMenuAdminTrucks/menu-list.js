import AddCircleIcon from '@mui/icons-material/AddCircle'
import paths from '../../constants/paths'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark'

const listLinks = [
  {
    id: 1,
    label: 'Listar Caminhões',
    link: paths.Trucks,
    icon: LocalShippingIcon
  },
  {
    id: 2,
    label: 'Novo Caminhão',
    link: paths.NewTruck,
    icon: AddCircleIcon
  },
  {
    id: 3,
    label: 'Nova Marca',
    link: paths.NewBrand,
    icon: BrandingWatermarkIcon
  }
]

export default listLinks
