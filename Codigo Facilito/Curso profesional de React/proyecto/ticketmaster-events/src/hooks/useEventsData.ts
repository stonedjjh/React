import { useState } from "react";
import eventsJSON from "../data/events.json";

type EventsData = typeof eventsJSON;

const useEventsData = () => {
  const [data, setData] = useState<EventsData | null>(null);
  //se agregan estas variables para controlar la carga y erroes
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null | unknown>(null);

  const fetchEvents = async (params?: string) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=&countryCode=MX${params?.length ? params : ""}`,
      );

      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
