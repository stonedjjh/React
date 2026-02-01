//Se cambio useState a useRef, también se agregar useRef
import { useState, useEffect } from "react";
import eventsJSON from "../data/events.json";

// Definimos el tipo basado en la estructura del JSON
type EventsData = typeof eventsJSON;

const useEventsData = () => {
  //desectruturamos el useState
  const [data, setData] = useState<EventsData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      //se usa la función set para actualizar el estado
      setData(eventsJSON);
    }, 4000);
  }, []); //

  return {
    //current se usa  con ref por lo cual se quita
    events: data?._embedded?.events || [],
  };
};

export default useEventsData;
