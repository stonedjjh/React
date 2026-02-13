import eventsJSON from "../data/events.json";

export type EventsData = typeof eventsJSON;

export interface PageData {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface UseEventsDataReturn {
  events: EventsData["_embedded"]["events"];
  page: PageData;
  isLoading: boolean;
  error: string | null | unknown;
  fetchEvents: (params?: string) => Promise<void>;
}

export interface UseEventsResults {
  isLoading: boolean;
  fetchEvents: (params?: string) => Promise<void>;
  error: string | null | unknown;
  data: EventsData;
}
