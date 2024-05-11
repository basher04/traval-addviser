import React from 'react'
import GoogleMapReact from 'google-map-react';

import useStyle from "./Style"


export default function Map() {
  const classes = useStyle()

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
      <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB6ryKQ01_50SCynKP6hz5loOyPjv30sns" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50,50,50,50]}
        >

        </GoogleMapReact>
      </div>
    </>
  )
}
