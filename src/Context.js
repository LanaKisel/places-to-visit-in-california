import { createContext, useState } from "react";
export const PlacesContext = createContext();
export const PlacesProvider = ({children})=>{
    const [places, setPlaces]=useState();
    const addPlace = (newPlace)=>{
        setPlaces([...places, newPlace]);
    }

  return (
    <PlacesContext.Provider value={{places, setPlaces, addPlace}}>
        {children}
    </PlacesContext.Provider>
  )
}