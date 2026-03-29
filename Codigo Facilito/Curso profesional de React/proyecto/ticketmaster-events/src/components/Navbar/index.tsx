//Se importa useState para controlar estados en este caso del Input
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
//Se importa Link para navegar a otras rutas
import { Link } from "react-router";

//se define una interface para las props
interface NavbarProps {
  onSearch: (term: string) => void;
}

//se define la estructura que tendra lo que se enviara con el useImperativeHandle
//como el padre necesitara esta interfaces como "guia" se hace exportable
export interface dataImperativeHandle {
  //se puede devolver tanto variables, como funciones
  search: string;
  setSearch: (term: string) => void;
}

/*
Como useImperativeHandle define qué propiedades se exponen al componente padre, 
usamos la interfaz dataImperativeHandle para tipar esa comunicación
*/
const Navbar = forwardRef<dataImperativeHandle, NavbarProps>(
  ({ onSearch }, ref) => {
    /*Se defina la variable que vinculara su estado con el input
  al ser inmutable React permite modificarla a traves del
  una funcion que por norma suele llevar el mismo nombre de la
  variable anteponiendo set
  Nota aqui estamos usando una destructuración
  */
    const [search, setSearch] = useState<string>("");

    /*ejemplos de <useEffect></useEffect>*/

    //se activa cuando detecta un cambio en onSearch
    useEffect(() => {
      console.log("onSearch cambio");
    }, [onSearch]);

    //se activa en el primer render
    useEffect(() => {
      console.log("componente listo");
    }, []);

    //se activa cuando search cambia
    useEffect(() => {
      console.log("search cambio");
    }, [search]);

    //se agrega el uso de useImperativeHandle
    useImperativeHandle(ref, () => ({
      search,
      setSearch,
    }));

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
      /*
        como ya no se devuelve un div cambiamos la estructura y se elimina el ref
        ya que ahora esta vinculado al useImperativeHandle
      */
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
        {/* Se agrega un link en el que se puede navegar a la ruta del perfil */}
        <Link to="/profile" style={{
          marginLeft: 24,
          color: '#fff',
          textDecoration: 'none',
        }}
        >Mi perfil </Link>
        
      </>
    );
  },
);

//como forwarRef envuelve una funcion anonima se le da un nombre que mostrar a la función
Navbar.displayName = "Navbar";

export default Navbar;
