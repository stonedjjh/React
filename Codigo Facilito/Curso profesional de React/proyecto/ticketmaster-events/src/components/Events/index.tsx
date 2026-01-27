import { useState } from "react";
import EventItem from "./components/EventItem";
import eventJSON from "../../data/events.json";
import type { Event } from "../../utils/EventInterface";

interface EventsProps {
  searchTerm: string;
}

const Events: React.FC<EventsProps> = ({ searchTerm }) => {
  const [data] = useState(eventJSON);
  const {
    _embedded: { events },
  } = data;

  console.log({ searchTerm });
  const handlerEventItemClick = (id: string) => {
    console.log("Evento clickeado", id);
  };

  const eventsComponents = () => {
    let eventsFiltered = events;

    if (searchTerm.trim().length > 0) {
      console.log({ searchTerm });
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm),
      );
    }

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
