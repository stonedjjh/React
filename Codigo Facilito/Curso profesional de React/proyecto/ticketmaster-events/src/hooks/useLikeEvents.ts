import React from 'react'

// se define una constante para almacenar la clave de localStorage donde se guardarán los eventos favoritos
const LIKED_EVENTS_STORAGE_KEY = "liked_events";

// función para agregar o eliminar un evento de la lista de favoritos en localStorage
const checkIfEventIsLiked = (eventId: string): boolean => {
  const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) || "[]") as string[];
  return likedEvents.includes(eventId);
  
}

const useLikeEvents = (eventId : string):{isEventLiked: boolean, toggleEventLike: () => void} => {
  const [isEventLiked, setIsEventLiked] = React.useState(checkIfEventIsLiked(eventId));

    // función para agregar o eliminar un evento de la lista de favoritos en localStorage
    const toggleEventLike = () => {
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) || "[]") as string[];
        const eventIndex = likedEvents.indexOf(eventId);

        if (eventIndex === -1) {
            likedEvents.push(eventId);
            setIsEventLiked(true);
        }
        else {
            likedEvents.splice(eventIndex, 1);
            setIsEventLiked(false);
        }

        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
  };

  return{
    isEventLiked,
    toggleEventLike
  }

}

export default useLikeEvents;