import React, {useState, useEffect} from 'react'
import NewButton from './NewButton'
const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/places")
        .then(r=>r.json())
        .then(data=>setPlaces(data))
    },[]) 
    const placesList = places.map(p =><li key={p.id}>{p.title}</li>)
 return (
    <div>
        <h1>The most beautiful places in California</h1>
        <hr/>
        {placesList}
        <br/>
        <br/>
        <NewButton />
    </div>
 )
}

export default Places
