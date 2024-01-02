import { createContext, useState } from "react";
 const PlacesContext = createContext();
 const PlacesProvider = ({children})=>{
    const [places, setPlaces]=useState([]);
    const addPlace = (newPlace)=>{
        setPlaces([...places, newPlace]);
    }

  return (
    <PlacesContext.Provider value={{places, setPlaces, addPlace}}>
        {children}
    </PlacesContext.Provider>
  )
}
export {PlacesContext, PlacesProvider}