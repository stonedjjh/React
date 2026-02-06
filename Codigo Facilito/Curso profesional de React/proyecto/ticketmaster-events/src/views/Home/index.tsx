import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

import Navbar from "../../components/Navbar";
import type { dataImperativeHandle } from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";
import styles from "./Home.module.css";

const Home = () => {
  const { events, page, isLoading, error, fetchEvents } = useEventsData();
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

  const handlePageClick = ({ selected }: { selected: number }) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

  const renderEventts = () => {
    if (isLoading) {
      <div>Cargando eventos...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.pre}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handlerNavbarSearch} ref={containerRef} />
      {renderEventts()}
    </>
  );
};

export default Home;
