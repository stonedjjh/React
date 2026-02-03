import { useState, useEffect } from "react";
import eventsJSON from "../data/events.json";

type EventsData = typeof eventsJSON;

const useEventsData = () => {
  const [data, setData] = useState<EventsData | null>(null);
  //se agregan estas variables para controlar la carga y erroes
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null | unknown>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?apikey=&countryCode=MX",
        );

        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchEvents();
  }, []);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventsData;
