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

### Nota: Ejecución doble de Hooks en Desarrollo

### 📝 Observación

En el entorno de desarrollo, notarás que los **Hooks** (como `useEffect`, `useState` o el cuerpo de la función del componente) se ejecutan **dos veces** consecutivas. Esto es normal y no ocurre en la versión de producción.

### ❓ ¿Por qué sucede?

Esto es causado por el componente **`<StrictMode>`**, que suele envolver la aplicación en el archivo `main.tsx` o `index.tsx`.

- **Propósito:** React fuerza este doble renderizado para ayudarte a encontrar **efectos secundarios no deseados** (side effects).

- **Detección de impurezas:** React asume que tus componentes deben ser "funciones puras". Al llamar al componente dos veces, React verifica si el resultado cambia o si dejas procesos abiertos (como suscripciones o timers) sin limpiar.

- **Prueba de Resiliencia:** Ayuda a asegurar que tu lógica de "limpieza" (el `return` en un `useEffect`) funcione correctamente.

### ⚠️ Reglas para manejarlo

1. **No entres en pánico:** Si ves dos `console.log` en la consola, no significa que tu código esté mal.

2. **Efectos Secundarios:** Asegúrate siempre de limpiar tus efectos. Si abres un `EventListener` o un `setInterval`, debes cerrarlo en la función de retorno del `useEffect`.

3. **No uses `useEffect` para lógica de negocio crítica:** Si algo solo debe ocurrir UNA vez (como una compra o un envío de formulario), esa lógica debería estar en un manejador de eventos (como el `onClick` de tu botón personalizado) y no en el `useEffect`.

---

**Tip de Arquitectura:** Si el doble renderizado rompe tu aplicación, es una señal clara de que tu componente tiene una **impureza** o un **efecto secundario** que no está bien gestionado. ¡Es mejor que falle en desarrollo a que falle con el usuario final!

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

### Fragment

El **React Fragment** (o simplemente **Fragment**) es una característica de React que permite **agrupar una lista de elementos hijos sin introducir nodos adicionales al DOM (Document Object Model)**.

---

#### Propósito

El principal propósito del Fragment es actuar como un elemento contenedor invisible.

- **Evitar el error de "elemento único":** En React, un componente debe retornar un único elemento padre. El Fragment permite que un componente retorne múltiples elementos (como dos `<h1>` y un `<p>`) sin tener que envolverlos en un `<div>` extra e innecesario.

- **Limpieza del DOM:** Previene el exceso de elementos contenedores (`<div>`s) en el DOM final, lo cual es beneficioso para el estilo (ej. usar Flexbox o CSS Grid) y para la semántica del HTML (ej. listas y tablas válidas).

---

#### Sintaxis

1. **Sintaxis Abreviada (Recomendada):**

   ```jsx
   return (
     <>
       <h1>Elemento 1</h1>
       <p>Elemento 2</p>
     </>
   );
   ```

2. **Sintaxis Completa (Necesaria si se usa `key`):**

   ```jsx
   import React, { Fragment } from "react";

   return (
     <Fragment key={item.id}>
       <td>Celda 1</td>
       <td>Celda 2</td>
     </Fragment>
   );
   ```

### 1. Render (Renderizado)

**Definición:**
El **renderizado** es el proceso por el cual React toma la descripción de la interfaz de usuario que has definido en tu componente (el código JSX) y determina **qué debe mostrarse en la pantalla (el DOM)**.

**Proceso:**

1. **Llamada a la función:** React llama a la función de tu componente (o al método `render` en clases).

2. **Devolución de JSX:** La función devuelve un árbol de elementos de React.

3. **Comparación (Virtual DOM):** React compara este nuevo árbol con el anterior (guardado en el **Virtual DOM**).

4. **Actualización del DOM:** Si hay diferencias, React aplica los cambios al **DOM real**.

**Clave:** El renderizado **se dispara** cuando cambian el **Estado** (`state`) o las **Propiedades** (`props`).

---

### 2. Estado (State)

**Definición:**
El **estado** (`state`) es un objeto interno de un componente de React que contiene **datos que pueden cambiar con el tiempo** y que definen lo que el componente debe renderizar.

**Características Clave:**

- **Privado:** Es gestionado solo por el componente que lo posee.
- **Mutable (Controlado):** Es la forma en que un componente cambia dinámicamente su propia salida. **El cambio de estado dispara un nuevo renderizado.**
- **Gestión:**
  - **Funcional:** Se usa el Hook `useState`.
  - **Clases:** Se usa `this.state` y se actualiza con `this.setState()`.

---

### 3. Propiedades (Props)

**Definición:**
Las **Propiedades** (`props`) son un conjunto de **datos de solo lectura** que se pasan de un componente **padre** a un componente **hijo**.

**Características Clave:**

- **Flujo Unidireccional:** Los datos siempre fluyen **hacia abajo** (del Padre al Hijo).
- **Inmutables:** El componente hijo que recibe las `props` **no puede modificarlas**.
- **Rol:** Funcionan como argumentos o configuraciones que personalizan la instancia del componente hijo.

**Sintaxis:**

- **Padre:** `<Hijo nombre="Ana" />`
- **Hijo:** `function Hijo(props) { return <p>{props.nombre}</p>; }`

> [!IMPORTANT]
> si son string se pasan entre comilla `url="www.google.com` sin son número o variables usamos llaves {} `placeholder={placeHolder}`

---

### Resumen Comparativo

| Característica      | Estado (State)                      | Propiedades (Props)              |
| :------------------ | :---------------------------------- | :------------------------------- |
| **Fuente de Datos** | Interna (propiedad del componente). | Externa (pasada por el padre).   |
| **Mutabilidad**     | Mutable (diseñado para cambiar).    | Inmutable (solo lectura).        |
| **Flujo**           | Local (solo afecta al componente).  | Descendente (del Padre al Hijo). |

## `children` (Propiedad Especial)

**Definición:**
`children` es una **propiedad (`prop`) especial** de React que permite a un componente recibir y renderizar **contenido anidado** pasado entre sus etiquetas de apertura y cierre.

**Propósito:**
Es el mecanismo fundamental para la **Composición de Componentes**, permitiendo crear contenedores flexibles y reutilizables (como _layouts_, paneles, o tarjetas) que no necesitan saber de antemano qué contenido específico van a mostrar.

---

### Mecanismo de Funcionamiento

Cuando defines un componente en JSX de esta forma:

```jsx
<ComponenteContenedor atributo="valor">
  {/* ESTE CONTENIDO ES children */}
  <ListaDeItems />
  <p>Texto de prueba</p>
</ComponenteContenedor>
```

### Syntethic Event

En React, cuando manejas eventos, los eventos que recibes no son exactamente los eventos nativos de JavaScript, sino eventos sintéticos.

React abstrae los eventos nativos y crea un objeto llamado SyntheticEvent (Evento Sintético) para proporcionar una interfaz unificada y garantizar un comportamiento consistente en todos los navegadores.

### Event Bubbling

El "event bubbling" (burbujeo de eventos) en React se refiere al comportamiento en el que un evento se propaga desde el elemento hijo que lo originó hacia arriba en la jerarquía de componentes. React implementa el "event bubbling" de manera similar a cómo funciona en el DOM estándar de JavaScript.

Se puede detener la propagación de eventos con el siguiente comando

```JavaScript
event.stopPropagation();
```

### Event Propagation

La propagación de eventos en React sigue el mismo principio del "bubbling" (burbujeo) que se mencionó anteriormente, donde un evento se propaga desde el elemento hijo que lo originó hacia arriba en la jerarquía de componentes.

#### Captura de Eventos (Capturing)

"capturing" (captura) de eventos, que es el proceso opuesto al "bubbling" y ocurre cuando el evento se propaga desde el elemento padre hacia el elemento hijo.

### Event target

En React, al igual que en el DOM estándar de JavaScript, puedes acceder al event.target para obtener información sobre el elemento que desencadenó el evento.

event.target en React te proporciona el elemento que desencadenó el evento y se puede utilizar de manera
similar a como lo harías en el DOM estándar de JavaScript.

### useRef

useRef es un hook de React que se utiliza para crear y mantener una referencia mutable que persiste a lo largo
del ciclo de vida del componente.

A diferencia de las variables de estado (useState), los cambios en el objeto ref no provocan una nueva
renderización del componente. useRef es comúnmente utilizado para acceder y manipular el DOM directamente, o
para almacenar valores que no provocan una renderización cuando cambian.

### forwardRef

forwardRef es una función en React que te permite pasar un ref a un componente hijo directamente al componente
hijo, sin tener que pasar por el componente intermedio.

En situaciones normales, cuando tienes un componente intermedio que envuelve otro componente y quieres pasar
un ref al componente interno, puedes encontrarte con problemas. forwardRef soluciona este problema
permitiéndote pasar el ref directamente al componente hijo.

forwardRef es una función en React que te permite pasar un ref a un componente hijo directamente al componente hijo, sin tener que pasar por el componente intermedio.

### useImperativeHandle

useImperativeHandle es un hook de React que te permite personalizar los valores que son expuestos cuando un
componente padre accede al ref de un componente hijo.

Este hook es útil cuando necesitas exponer métodos o propiedades específicas de un componente hijo al componente padre, pero deseas ocultar otras partes de su interfaz pública.

### Nota sobre React.FC

Usar `React.FC<Props>` (donde FC significa Function Component) es la forma más estándar de decirle a TypeScript: "Este es un componente de React y estas son sus propiedades".

### Custom Hooks: La navaja suiza de React

Es una función de JavaScript que encapsula lógica reutilizable y puede llamar a otros Hooks de React. Su objetivo principal es la **Separación de Responsabilidades** (Separation of Concerns).

#### Características clave

- **Nombre:** Siempre debe empezar con la palabra `use` (ej. `useEvents`, `useForm`). Esto le indica a React que debe aplicar las "Reglas de los Hooks".

- **Compositor de lógica:** Permite extraer el "cómo se hace algo" (lógica de estado, fetch, validación) para que el componente solo se encargue del "qué se muestra" (JSX).

- **Aislado pero reactivo:** Cada vez que un componente usa el Hook, obtiene un estado **independiente**, pero si el estado dentro del Hook cambia, el componente se re-renderiza automáticamente.

#### Cuándo crearlos (El criterio del Arquitecto)

1. **DRY (Don't Repeat Yourself):** Cuando ves que estás repitiendo el mismo `useEffect` o lógica de validación en varios componentes (como tus `Inputs`).

2. **Componentes Gigantes:** Cuando un componente tiene más lógica de JS que código HTML/JSX. Sacar la lógica a un Hook lo hace legible.

3. **Testabilidad:** Es mucho más fácil probar una función de lógica pura (el Hook) que probar un componente visual entero.
