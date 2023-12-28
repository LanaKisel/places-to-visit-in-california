import React, { useState, useCallback } from 'react'

const PlaceForm = (props) => {
    const [place, setPlace] = useState({
        title: "",
        description: "",
        image: ""
    })

    const handleChange = (e) => {
        setPlace({ ...place, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPlace = {
            title: place.title,
            description: place.description,
            image: place.image
        }
        fetch("http://localhost:3000/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlace)
        })
            .then(r => r.json())
            .then(data => {
                console.log(props, props.history)
               props.history.push('/places')
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input name="title" onChange={handleChange} type="text" /><br />
                <label>Description</label>
                <input name="description" onChange={handleChange} type="text" /><br />
                <label>Image</label>
                <input name="image" onChange={handleChange} type="text" /><br />
                <input type="submit" />
            </form>

        </div>
    )
}

export default PlaceForm
