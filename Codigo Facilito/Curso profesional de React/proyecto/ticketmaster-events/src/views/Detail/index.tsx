import { useEffect, useState } from "react";
import { useParams } from "react-router";
import eventsJSON from "../../data/events.json";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import useEventsResults from "../../state/events-results";
import styles from "./Detail.module.css";

type EventsData = typeof eventsJSON;

type SingleEvent = EventsData["_embedded"]["events"][0];

const Detail = () => {
  const { eventId: id } = useParams<{ eventId: string }>();
  const [eventData, setEventData] = useState<SingleEvent>();
  const [error, setError] = useState<string | unknown | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data } = useEventsResults();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`,
        );
        const data = await response.json();
        setEventData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching event data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventData();
  }, []);

  if (isLoading) {
    return <div>Cargando evento...</div>;
  }

  if (error) {
    return <div>Error al cargar el evento: {String(error)}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <img
          src={eventData?.images[0]?.url}
          alt={eventData?.name}
          className={styles.eventImage}
        />
        <h4 className={styles.eventName}>{eventData?.name}</h4>
        <p className={styles.infoParagraph}>{eventData?.info}</p>
        {eventData?.dates?.start.dateTime ? (
          <p className={styles.dateParagraph}>
            {format(
              new Date(eventData?.dates?.start?.dateTime),
              "d LLLL yyyy H:mm",
              { locale: es },
            )}
            Hrs
          </p>
        ) : null}
      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.seatMapTitle}>Mapa de asientos</h6>
        <img src={eventData?.seatmap?.staticUrl} alt="Mapa de asientos" />
        <p className={styles.pleaseNoteLegend}>{eventData?.pleaseNote}</p>
        <p className={styles.priceRangeLegend}>
          {eventData?.priceRanges?.[0].min}-{eventData?.priceRanges?.[0].max}{" "}
          {eventData?.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData?.url} target="_blank" rel="noopener noreferrer">
        Ir por tus boletos
      </a>
    </div>
  );
};

export default Detail;
