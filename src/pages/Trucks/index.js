import { React, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, BrandsMenu, BrandButton, TrucksContainer } from './styles'

import { Header, Banner, CardTrucks, Footer } from '../../components'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'

export function Trucks ({ location: { state } }) {
  let brandId = 0
  if (state?.brandId) {
    brandId = state.brandId
  }

  const [brands, setBrands] = useState([])
  const [trucks, setTrucks] = useState([])
  const [filteredTrucks, setFilteredTrucks] = useState([])
  const [activeBrands, setActiveBrands] = useState(brandId)

  useEffect(() => {
    async function loadBrands () {
      const { data } = await api.get('brands')

      let brandsCars = data.slice(12, 18)

      const newBrands = [{ id: 0, name: 'Todas' }, ...brandsCars]

      setBrands(newBrands)
    }
    async function loadTrucks () {
      const { data: allTrucks } = await api.get('trucks')

      const newTrucks = allTrucks.map(truck => {
        return {
          ...truck,
          formatedPrice: formatCurrency(truck.price)
        }
      })

      setTrucks(newTrucks)
    }

    loadTrucks()
    loadBrands()
  }, [])

  useEffect(() => {
    if (activeBrands === 0) {
      setFilteredTrucks(trucks)
    } else {
      const newFilteredTrucks = trucks.filter(truck => truck.brand_id === activeBrands)

      setFilteredTrucks(newFilteredTrucks)
    }
  }, [activeBrands, trucks])
  return (
    <Container>
      <Header />
      <Banner />
      <BrandsMenu>
        {brands &&
          brands.map(brand => (
            <BrandButton
              type='button'
              key={brand.id}
              isActiveBrand={activeBrands === brand.id}
              onClick={() => {
                setActiveBrands(brand.id)
              }}
            >
              {brand.name}
            </BrandButton>
          ))}
      </BrandsMenu>
      <TrucksContainer>
        {filteredTrucks &&
          filteredTrucks.map(truck => <CardTrucks key={truck.id} truck={truck} />)}
      </TrucksContainer>
      <Footer />
    </Container>
  )
}

Trucks.propTypes = {
  location: PropTypes.object
}
