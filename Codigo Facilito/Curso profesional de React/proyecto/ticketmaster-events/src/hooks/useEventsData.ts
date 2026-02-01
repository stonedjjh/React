//Se cambio useState a useRef, también se agregar useRef
import { useRef, useEffect } from "react";
import eventsJSON from "../data/events.json";

// Definimos el tipo basado en la estructura del JSON
type EventsData = typeof eventsJSON;

const useEventsData = () => {
  const data = useRef<EventsData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      data.current = eventsJSON;
    }, 4000);
  }, []); //

  return {
    events: data.current?._embedded?.events || [],
  };
};

export default useEventsData;
