import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Place = () => {
    let { id } = useParams()
    const [place, setPlace]=useState({
        title: "",
        description: "",
        image: ""
    })

    useEffect(()=>{
        fetch(`http://localhost:3000/places/${id}`)
        .then(r=>r.json())
        .then(data=>
            setPlace(data))},[])
  return (
    <div>
        <h2>{place.title}</h2>
        <h3>{place.description}</h3>
        <img alt = {place.title} src={place.image} style={{
            resizeMode: 'contain',
            height: 500,
            width: 400,
          }}></img>      
    </div>
  )
}

export default Place
