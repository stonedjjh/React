import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handlerInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <p>Eventos</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handlerInputchange}
        value={search}
      />
    </>
  );
};

export default Navbar;
