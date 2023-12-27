import React, {useEffect, useState, useCallback} from 'react'

const PlaceForm = () => {
    const [place, setPLace]=useState({
        title: "",
        description: "",
        image: ""
    })

    useEffect(()=>{
        fetch("http://localhost:3000/places",)
    },[])


    const handleChange=(e)=>{
        setPLace({...place, [e.target.title]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input name="title" onChange={handleChange} type="text"/><br/>
            <label>Description</label>
            <input name="description" onChange={handleChange} type="text"/><br/>
            <label>Image</label>
            <input name="image" onChange={handleChange}  type="text"/><br/>
            <input type="submit"/>
        </form>
      
    </div>
  )
}

export default PlaceForm
