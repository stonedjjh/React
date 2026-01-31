import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
// import Form from "./component/esencial2/Form.tsx";
import Input from "./component/ejercicios/1/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Form></Form> */}
    <form>
      <Input name="title" id="title" placeholder="titulo" maxLength={50} />
      <Input
        name="description"
        id="description"
        placeholder="descripcion"
        minLength={20}
        required={true}
      />
    </form>
  </StrictMode>,
);
