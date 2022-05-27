import React from 'react'
import GoogleMapReact from 'google-map-react'

import useStyles from './styles'

const Map = () => {

    const classes = useStyles()

    const coords = { lat: 0, lng: 0 }

    return (
        <div className={classes.container}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDJT3FSY3v25oa_mVyxGnv1KDLOBoR4U4Y' }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[150, 50, 50, 50]}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map
