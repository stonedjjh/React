# React

## Notas de Aprendizaje de React

### JSX

- JSX es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript.

- JSX facilita la creación de componentes de interfaz de usuario en React al permitir una sintaxis declarativa.

#### Reglas

- Debe retornar un solo elemento raiz

- Los elementos deben cerrarse correctamente

- camelCase en casi todos los atributos HTML

#### Características

- Expresiones JavaScript dentro de llaves {}

- JSX es seguro contra ataques XSS (Cross-Site Scripting)

- Los nombres de los componentes son en notación Pascal Case

- JSX puede ser anidado y combinado con otros elementos JSX

## Hook

Un Hook (Gancho) es una función especial que te permite "enganchar" (utilizar) las características de estado (state) y ciclo de vida de React dentro de los componentes funcionales.

Antes de la existencia de los Hooks, estas características solo estaban disponibles en los componentes de clase. Con los Hooks, puedes escribir componentes de React que son más limpios, más concisos y más fáciles de probar.

### useState

El Hook useState es la forma más básica de agregar estado (datos que cambian y que afectan la vista) a un componente funcional de React.

Devuelve un par de valores:

1. El valor actual del estado.

2. Una función para actualizarlo (el setter).

Cuando llamas a la función setter, React re-renderiza el componente con el nuevo valor.

Sintaxis

```JavaScript
const [state, setState] = useState(initialState);
```

**state**: La variable que almacena el valor actual (ej: un número, un string, un objeto).

**setState**: La función que usas para actualizar state.

**initialState**: El valor inicial que tendrá state la primera vez que se renderice el componente.

Ejemplo

En este ejemplo, usamos useState para gestionar un contador. Cada vez que se hace clic en el botón, el estado se actualiza y el componente se re-renderiza para mostrar el nuevo número.

```JavaScript

import React, { useState } from 'react';

function Contador() {
  // Inicializamos 'conteo' a 0. 'setConteo' es la función para cambiarlo.
  const [conteo, setConteo] = useState(0);

  return (
    <div>
      <p>Hiciste clic {conteo} veces</p>
      <button onClick={() => setConteo(conteo + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}
```

### useEffect

El Hook useEffect te permite realizar efectos secundarios (side effects) en los componentes funcionales. Los efectos secundarios son cualquier trabajo que se realiza fuera del flujo normal de renderizado de React, como:

- Obtener datos de una API (Data Fetching).

- Configurar suscripciones o listeners de eventos manuales.

- Manipular directamente el DOM.

Funciona de manera similar a los métodos de ciclo de vida (componentDidMount, componentDidUpdate, componentWillUnmount) de los componentes de clase, pero en una única API.

Sintaxis

```JavaScript
useEffect(() => {
  // 1. Código del efecto secundario aquí

  return () => {
    // 2. Opcional: Función de limpieza (cleanup function)
    //    Se ejecuta antes de que el componente se desmonte o antes del próximo efecto
  };
}, [dependencias]); // 3. Array de dependencias
```

- Función de Efecto: El primer argumento (la callback) es donde pones el código que quieres ejecutar.

- Array de Dependencias: Es el segundo argumento crucial (un array). Le dice a React cuándo debe volver a ejecutar el efecto:

  - Array vacío ([]): El efecto se ejecuta solo una vez después del primer renderizado (similar a componentDidMount).

  - Sin array: El efecto se ejecuta después de cada renderizado.

  - Con valores ([prop1, state2]): El efecto se ejecuta solo cuando esos valores cambian.

Ejemplo

Este ejemplo usa useEffect para cambiar el título del documento (un efecto secundario) cada vez que el estado conteo cambia.

```JavaScript

import React, { useState, useEffect } from 'react';

function TituloDinamico() {
  const [conteo, setConteo] = useState(0);

  // Este efecto se ejecuta:
  // 1. Después del renderizado inicial
  // 2. Cada vez que 'conteo' cambia de valor
  useEffect(() => {
    document.title = `Hiciste clic ${conteo} veces`;

    // Opcional: Limpieza (no necesaria en este caso, pero importante)
    return () => {
      // Por ejemplo, aquí se limpia un temporizador o una suscripción
    };
  }, [conteo]); // La dependencia es 'conteo'

  return (
    <div>
      <p>El título de la pestaña está cambiando...</p>
      <button onClick={() => setConteo(conteo + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```
