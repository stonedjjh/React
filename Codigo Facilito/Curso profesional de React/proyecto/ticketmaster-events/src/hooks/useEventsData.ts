import { useState, useEffect } from "react";
import eventsJSON from "../data/events.json";

type EventsData = typeof eventsJSON;

const useEventsData = () => {
  const [data, setData] = useState<EventsData | null>(null);
  //se agregan estas variables para controlar la carga y erroes
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null | unknown>(null);

  useEffect(() => {
    setTimeout(() => {
      //se maneja error con try
      try {
        setData(eventsJSON);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 4000);
  }, []); //

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventsData;
