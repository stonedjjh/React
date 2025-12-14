import React from "react";
import type { Event } from "../../../../utils/eventInterface";

// 1. Definición de la Interfaz de Props Única
interface EventItemProps {
  event: Event;
  // Usamos el tipo correcto para un manejador de clic en un div
  // Nota: Lo cambié a HTMLDivElement porque estás usando un <div> en el render
  onEventClick: (id: string) => void;
}

// 2. Definición del Componente usando React.FC<T> (Recomendado)
//    y desestructurando todas las props del ÚNICO argumento
const EventItem: React.FC<EventItemProps> = ({ event, onEventClick }) => {
  return (
    // Adjuntamos la función 'onEventClick'
    <div>
      <h4>{event.name}</h4>
      <img src={event.image} alt={event.name} width={200} height={200} />
      <p>{event.info}</p>
      <button onClick={() => onEventClick(event.id)}>Ver más</button>
    </div>
  );
};

export default EventItem;
