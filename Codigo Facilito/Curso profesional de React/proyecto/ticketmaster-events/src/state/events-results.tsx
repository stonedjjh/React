import { create } from "zustand";
import type { UseEventsResults, EventsData } from "../types/EventsData";

const useEventsResults = create<UseEventsResults>()((set) => ({
  data: {} as EventsData,
  error: null,
  isLoading: false,
  fetchEvents: async (params?: string) => {
    try {
      set(() => ({ isLoading: true, error: null }));
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ""}`,
      );
      const data = await response.json();
      await set(() => ({ data, isLoading: false }));
    } catch (error) {
      set(() => ({ error }));
    }
  },
}));

export default useEventsResults;
