import Raect, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App = () => {

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const [coords, setCoords] = useState({})
  const [bounds, setBounds] = useState(null)

  const [weatherData, setWeatherData] = useState([])
  const [filteredPLace, setFilteredPlace] = useState([])
  const [places, setPlaces] = useState([])

  const [autoComplete, setAutoComplete] = useState(null)
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      setCoords({ lat: latitude, lng: longitude })
    })
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Map />
          </Grid>
      </Grid>
    </>
  )
}

export default App