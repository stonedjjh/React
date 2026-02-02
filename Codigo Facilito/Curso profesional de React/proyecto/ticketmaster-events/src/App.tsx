import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handlerNavbarSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handlerNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
