import { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import type { dataImperativeHandle } from "../../components/Navbar";
import Events from "../../components/Events";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const containerRef = useRef<dataImperativeHandle>(null);

  const handlerNavbarSearch = (term: string) => {
    /*
    aunque no es de uso frecuente aqui se ve que cambiar el estado
    desde el padre funciona igual que hacerlo desde el hijo
    */
    console.log(containerRef.current?.setSearch(""));
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handlerNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </>
  );
};

export default Home;
