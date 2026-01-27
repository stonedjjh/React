//Se importa useState para controlar estados en este caso del Input
import { useState } from "react";

//se define una interface par alas props
interface NavbarProps {
  onSearch: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  /*Se defina la variable que vinculara su estado con el input
  al ser inmutable React permite modificarla a traves del
  una funcion que por norma suele llevar el mismo nombre de la
  variable anteponiendo set
  Nota aqui estamos usando una destructuración
  */
  const [search, setSearch] = useState<string>("");

  const handlerInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /* cuando se dectecta un cambio en el input seteamos su valor a la variable
       que tenemos vinculada pero esta es inmutable por lo cual se hace a traves
       de la funcion set
    */
    setSearch(event.target.value);
    /*
    aqui se podria destructurar value pero para ser fiel al curso se dejo como esta
    const { value } = event.target; 
    setSearch(value);
    */
  };

  /*
  Este manejador, al presionar la tecla Enter, ejecuta la función pasada por props 
  con el valor actual de search.

  Esta prop es una función que, al ser llamada, actualiza el estado searchTerm 
  en el componente padre.
  */
  const handleInputKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <>
      <p>Eventos</p>
      {/* Controlled Component */}
      <input
        placeholder="Busca tu evento favorito"
        onChange={handlerInputchange}
        //Se agrega un manejador para controlar la busqueda
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </>
  );
};

export default Navbar;
