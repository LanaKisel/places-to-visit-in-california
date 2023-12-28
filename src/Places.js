import React, {useState, useEffect} from 'react'
import NewButton from './NewButton'
import PlaceLink  from './PlaceLink';
const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/places")
        .then(r=>r.json())
        .then(data=>setPlaces(data))
    },[]) 
    const placesList = places.map(p =><PlaceLink key={p.id} place={p}/>)
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
