import "./styles.css";
import React from "react";
import type { Event } from "../../../../utils/EventInterface";

// 1. Definición de la Interfaz de Props Única
interface EventItemProps {
  event: Event;
  // Usamos el tipo correcto para un manejador de clic en un div
  onEventClick: (id: string) => void;
}

// 2. Definición del Componente usando React.FC<T> (Recomendado)
//    y desestructurando todas las props del ÚNICO argumento
const EventItem: React.FC<EventItemProps> = ({ event, onEventClick }) => {
  const handleSeeMoreClick = (
    evt: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    evt.stopPropagation();
    onEventClick(event.id);
  };

  return (
    // Se adjunta la función 'onEventClick'
    <div className="event-item-container">
      <img src={event.image} alt={event.name} width={200} height={200} />
      <div className="event-info-container">
        <h4 className="event-name">{event.name}</h4>
        <p className="event-info">{event.info}</p>
        <button className="see-moro-btn" onClick={handleSeeMoreClick}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
