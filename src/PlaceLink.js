import React from 'react'
import { Link } from 'react-router-dom'
const PlaceLink = ({place}) => {
  return (
    <Link to={`/places/${place.id}`}>
        {place.title}<br/>
    </Link> 
  )
}

export default PlaceLink
