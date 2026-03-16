//para importar modulo se usa la sigueinte sintaxis
import styles from "./EventItem.module.css";
import type { Event } from "../../../../utils/EventInterface";

// importamos imagene para usarla en el componente

import HearthFilled from "../../../../assets/hearth-filled.png";
import HearthUnfilled from "../../../../assets/hearth-unfilled.png";

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
    <div className={styles.eventItemContainer}>
      {/* se agrega un div para mostrar el icono de favorito */}
      <div className={styles.imageContainer}>
        <img src={HearthFilled} alt="Hearth Button" className={styles.heartImage}/>
        <img src={event.image} alt={event.name} width={200} height={200} />

      </div>
      
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{event.name}</h4>
        <p className={styles.eventInfo}>{event.info}</p>
        <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
