import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Place = (props) => {
    let { id } = useParams()
    const [place, setPlace]=useState({
        title: "",
        description: "",
        image: ""
    })

    useEffect(()=>{
        console.log(id)
        fetch(`http://localhost:3000/places/${id}`)
        .then(r=>r.json())
        .then(data=>console.log(data))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Place
