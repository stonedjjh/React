import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import type { dataImperativeHandle } from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";

const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventsData();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const containerRef = useRef<dataImperativeHandle>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const handlerNavbarSearch = (term: string) => {
    /*
    aunque no es de uso frecuente aqui se ve que cambiar el estado
    desde el padre funciona igual que hacerlo desde el hijo
    */
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  return (
    <>
      <Navbar onSearch={handlerNavbarSearch} ref={containerRef} />
      {isLoading ? (
        <div>Cargando eventos...</div>
      ) : (
        <Events searchTerm={searchTerm} events={events} />
      )}
      {!!error && <div>Ha ocurrido un error</div>}
    </>
  );
};

export default Home;
