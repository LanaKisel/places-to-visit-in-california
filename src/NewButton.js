import React from 'react'
import {Link} from 'react-router-dom'

const NewButton = () => {
  return (
    <Link to={'/places/new'}>
        <button>Click the button to add a new place</button>
    </Link>    
  )
}

export default NewButton
