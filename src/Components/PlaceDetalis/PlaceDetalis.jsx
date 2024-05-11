import React from 'react'
import useStyle from './Style'

export default function PlaceDetalis(plac) {

    const classes = useStyle()

  return (
    <h1 >{plac.name}</h1>
  )
}
