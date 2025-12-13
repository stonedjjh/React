# Cómo funcionan los archivos principales de React

En una aplicación React, hay varios archivos principales que juegan un papel crucial en la estructura y funcionamiento de la aplicación. A continuación, se describen los archivos más importantes y su función los cual encontraremos en la carpeta src:

## index.html

El archivo `index.html` es el punto de entrada de la aplicación web. Es un archivo HTML estándar que contiene un elemento `<div>` con un `id` específico (generalmente `root`) donde se montará la aplicación React. Este archivo también puede incluir enlaces a hojas de estilo y scripts necesarios para la aplicación.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ticketmaster-events</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## main.tsx / main.jsx

El archivo `main.tsx` o `main.jsx` es el punto de entrada principal de la aplicación React. Aquí es donde se monta el componente raíz (generalmente llamado `App`) en el DOM. Este archivo también puede incluir configuraciones adicionales, como proveedores de contexto o enrutadores.

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## App.tsx / App.jsx

El archivo `App.tsx` o `App.jsx` es el componente raíz de la aplicación. Aquí es donde se define la estructura principal de la aplicación, incluyendo otros componentes, rutas y lógica de estado global si es necesario.

```tsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

Estos archivos trabajan juntos para crear la estructura básica de una aplicación React. El `index.html` proporciona el contenedor para la aplicación, `main.tsx` monta el componente raíz en el DOM, y `App.tsx` define la estructura y funcionalidad principal de la aplicación.
