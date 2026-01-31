//Se crea un hook personalizado para importar la data que se usara
import { useState } from "react";
import eventsJSON from "../data/events.json";

const useEventsData = () => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;

  return {
    events,
  };
};

export default useEventsData;
