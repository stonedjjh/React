import { useState } from "react";
import EventItem from "./components/EventItem";
import eventJSON from "../../data/events.json";
import type { Event } from "../../utils/eventInterface";

const Events = () => {
  const [data] = useState(eventJSON);
  const {
    _embedded: { events },
  } = data;

  const eventsComponents = events.map((event) => {
    const handlerEventItemClick = (id: string) => {
      console.log("Evento clickeado", id);
    };

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
        onEventClick={handlerEventItemClick}
      />
    );
  });

  return (
    <div>
      Events Component
      {eventsComponents}
    </div>
  );
};

export default Events;
