import EventItem from "./components/EventItem";
import useEventsData from "../../hooks/useEventsData";
import type { Event } from "../../utils/EventInterface";
import { useNavigate } from "react-router";

interface EventsProps {
  searchTerm: string;
}

const Events: React.FC<EventsProps> = ({ searchTerm }) => {
  //se destructuran las nuevas variables
  const { events, isLoading, error } = useEventsData();

  const navigate = useNavigate();

  console.log({ searchTerm });
  const handlerEventItemClick = (id: string) => {
    navigate(`/detail/${id}`);
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

  if (error) {
    return <div>Ocurrió un error: {String(error)}</div>;
  }

  if (isLoading) {
    return <div>Cargando eventos...</div>;
  }

  return (
    <div>
      Eventos
      {eventsComponents()}
    </div>
  );
};

export default Events;
