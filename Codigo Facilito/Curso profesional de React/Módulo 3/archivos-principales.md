# Archivos Principales React

En un proyecto de React, hay varios archivos principales que son fundamentales para el funcionamiento de la aplicación. A continuación, se describen los archivos más importantes y su propósito:

## index.html

El archivo `index.html` es el punto de entrada de la aplicación web. Contiene un elemento `<div>` con un `id` específico (generalmente `root` o `app`)

donde React monta la aplicación. Este archivo también puede incluir enlaces a hojas de estilo y scripts necesarios para la aplicación.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Aplicación React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="main.js"></script>
  </body>
</html>
```

## main.jsx / index.jsx

El archivo `main.jsx` o `index.jsx` es el punto de entrada principal de la aplicación React
. Aquí es donde se importa React, ReactDOM y el componente raíz de la aplicación, y se monta la aplicación en el DOM.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- **createRoot**: Es un método introducido en React 18 (que se encuentra en el paquete react-dom/client) y sirve como el punto de entrada para renderizar tu aplicación.

Función: Crea una "raíz" (root) vinculada a un elemento del DOM de HTML (usualmente un `<div id="root"></div>`) donde se mostrará toda tu aplicación de React.

- **React.StrictMode**: Es un componente especial que actúa como un envoltorio (wrapper) de desarrollo para ayudar a escribir mejor código.
  - **Función**: No renderiza ningún elemento visible en el navegador (es "invisible" para el usuario), pero activa verificaciones y advertencias adicionales para todos los componentes que estén dentro de él.

  - **Qué hace exactamente**
    - Detecta efectos secundarios inesperados: En el entorno de desarrollo, React ejecutará dos veces (doble invocación) los efectos (useEffect), los constructores y las funciones de estado para ayudarte a encontrar problemas de lógica o fugas de memoria.

    - Advierte sobre APIs obsoletas: Te avisará en la consola si estás usando métodos que React planea eliminar en el futuro.

    - Identifica advertencias de ciclo de vida: Ayuda a asegurar que tus componentes sigan las mejores prácticas de la programación funcional.

## App.jsx

El archivo `App.jsx` es el componente raíz de la aplicación
. Aquí es donde se definen las rutas principales y se estructuran los componentes hijos de la aplicación.

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
```
