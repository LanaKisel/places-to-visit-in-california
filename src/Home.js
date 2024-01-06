import React, {useContext} from 'react'
import { PlacesContext } from './Context.js';
import Image from './Image.js';

const Home = () => {
  const { places, setPlaces } = useContext(PlacesContext)
  if (!places || places.length === 0) {
    fetch("http://localhost:3000/places")
        .then(r => r.json())
        .then(data => setPlaces(data))
}
  const newImage=places.map(place=><Image key={place.id} alt={place.title} image={place.image}/>)
  return (
    <div>
      <h1>Welcome to  California</h1>
      <hr/>
      <p style={{textAlign:'center', marginLeft: 40 , marginRight: 40 } }>So, you've found yourself in the state of California and want to experience the best of it? Or maybe you are in love with traveling and found some cool hidden places and can't wait to share it with others? Congratulations, you've come to the right place! This Page will provide you with information about amazing places, that you can explore. It also allows you to brag about hidden jams you've visited. Have fun!</p>
      {newImage}
    </div>
  )
}

export default Home
