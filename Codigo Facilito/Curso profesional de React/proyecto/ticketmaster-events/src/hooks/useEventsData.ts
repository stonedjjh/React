import { useState } from "react";
import eventsJSON from "../data/events.json";

type EventsData = typeof eventsJSON;

interface PageData {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

interface UseEventsDataReturn {
  events: EventsData["_embedded"]["events"];
  page: PageData;
  isLoading: boolean;
  error: string | null | unknown;
  fetchEvents: (params?: string) => Promise<void>;
}

const useEventsData = (): UseEventsDataReturn => {
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

  const auxPage: PageData = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    number: 0,
  };

  if (data) {
    auxPage.size = data.page.size;
    auxPage.totalElements = data.page.totalElements;
    auxPage.totalPages = data.page.totalPages;
    auxPage.number = data.page.number;
  }
  return {
    events: data?._embedded?.events || [],
    page: auxPage,
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
