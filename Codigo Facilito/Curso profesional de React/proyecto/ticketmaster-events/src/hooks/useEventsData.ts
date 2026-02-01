//Se cambio useState a useRef
import { useRef } from "react";
import eventsJSON from "../data/events.json";

const useEventsData = () => {
  //se quito la destructuración
  const data = useRef(eventsJSON);
  const {
    _embedded: { events },
  } = data.current;

  return {
    events,
  };
};

export default useEventsData;
