import React, { useContext } from 'react'
import NewButton from './NewButton'
import PlaceLink from './PlaceLink';
import { PlacesContext } from './Context.js';
import './App.css';
const Places = () => {
    const { places, setPlaces } = useContext(PlacesContext)
    
    if (!places || places.length === 0) {
        fetch("http://localhost:3000/places")
            .then(r => r.json())
            .then(data => setPlaces(data))
    }
    const placesList = places.map(p => <PlaceLink key={p.id} place={p} />)
    return (
        <div>
            <h1>The most beautiful places in California</h1>
            <hr />
            {placesList}
            <br />
            <br />
            <NewButton />
        </div>
    )
}

export default Places
