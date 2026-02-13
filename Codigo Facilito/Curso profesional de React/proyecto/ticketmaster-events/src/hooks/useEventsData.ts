import useEventsResults from "../state/events-results";
import type { UseEventsDataReturn, PageData } from "../types/EventsData";

const useEventsData = (): UseEventsDataReturn => {
  //Se movio data, isLoading y error a un manejador de estado
  //state/events-results
  const { data, isLoading, error, fetchEvents } = useEventsResults();

  const auxPage: PageData = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    number: 0,
  };
  console.log(data);
  if (data && Object.keys(data).length > 0 && data.page) {
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
