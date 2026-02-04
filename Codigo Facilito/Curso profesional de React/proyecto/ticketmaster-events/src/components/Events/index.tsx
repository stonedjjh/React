import EventItem from "./components/EventItem";
import type { Event } from "../../utils/EventInterface";
import { useNavigate } from "react-router";

import eventsJSON from "../../data/events.json";

type EventsData = typeof eventsJSON;

interface EventsProps {
  searchTerm: string;
  events: EventsData["_embedded"]["events"];
}

const Events: React.FC<EventsProps> = ({ searchTerm, events }) => {
  //se destructuran las nuevas variables

  const navigate = useNavigate();
  const handlerEventItemClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const eventsComponents = () => {
    let eventsFiltered = events;
    return eventsFiltered.map((event) => {
      const eventData: Event = {
        id: event.id,
        info: event.info ?? "",
        name: event.name,
        image: event.images?.[0]?.url ?? "",
      };
      return (
        <EventItem
          key={`event-item-${event.id}`}
          event={eventData}
          /*Por buena practica se recomienda colocar el prefijo on a los 
        eventos pasados como prop
        */
          onEventClick={handlerEventItemClick}
        />
      );
    });
  };

  return (
    <div>
      Eventos
      {eventsComponents()}
    </div>
  );
};

export default Events;
