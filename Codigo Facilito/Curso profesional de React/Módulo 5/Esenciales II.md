# Esenciales II

En este módulo se vera otros aspectos fundamentales de React y JavaScript

## Renderizado condicional

El renderizado condicional es una técnica que nos permite mostrar u ocultar componentes o elementos en función de ciertas condiciones. En React, esto se puede lograr utilizando operadores lógicos, ternarios o estructuras de control como `if`.

### Ejemplo con operador ternario

El operador ternario es la forma más común de renderizar una de dos opciones (un `if/else` en línea). Es útil cuando necesitas que el componente siempre renderice algo, pero ese algo cambia según una condición.

```jsx
function Saludo({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenido de nuevo!</h1>
      ) : (
        <h1>Por favor, inicia sesión.</h1>
      )}
    </div>
  );
}
```

En el ejemplo anterior, el operador ternario siempre devuelve un elemento JSX, asegurando que el componente Saludo renderice una salida predecible.

### Ejemplo con operador lógico AND

El operador lógico AND se utiliza para renderizar un elemento solo si la condición es verdadera y no renderizar nada si la condición es falsa. Es la forma abreviada del `if` sin `else`.

```jsx
function Mensaje({ mensajes }) {
  return (
    <div>
      {mensajes.length > 0 && (
        <h2>Tienes {mensajes.length} nuevos mensajes.</h2>
      )}
    </div>
  );
}
```

### Ejemplo con condicional `if`

```jsx
function SaludoIf({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div>
        <h1>Bienvenido de nuevo!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Por favor, inicia sesión.</h1>
      </div>
    );
  }
}

function MensajeIf({ mensajes }) {
  if (mensajes.length > 0) {
    return (
      <div>
        <h2>Tienes {mensajes.length} nuevos mensajes.</h2>
      </div>
    );
  }
  return <div></div>;
}
```

## Renderizado de listas

El renderizado de listas en React se realiza utilizando el método `map()` para iterar sobre un array y devolver un elemento JSX para cada ítem. Es importante proporcionar una propiedad `key` única para cada elemento renderizado para ayudar a React a identificar qué elementos han cambiado, agregado o eliminado.

```jsx
function ListaDeTareas({ tareas }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>{tarea.nombre}</li>
      ))}
    </ul>
  );
}
```

En este ejemplo, `tareas` es un array de objetos donde cada objeto tiene una propiedad `id` única y una propiedad `nombre`. El método `map()` crea un elemento `<li>` para cada tarea, utilizando la propiedad `id` como clave.

## Manejador de Eventos

En React, los eventos se manejan de manera similar a como se hace en el DOM, pero con algunas diferencias. Los nombres de los eventos en React utilizan camelCase en lugar de minúsculas, y los manejadores de eventos son funciones que se pasan como props.

```jsx
function Boton() {
  function manejarClick() {
    alert("¡Botón clickeado!");
  }

  return <button onClick={manejarClick}>Clickeame</button>;
}
```

En este ejemplo, el evento `onClick` está asociado a la función `manejarClick`, que se ejecuta cuando el botón es clickeado.

> [!IMPORTANT]
> Se debe pasar una funcion `{manejarClick}` no llamar una funcion `{manejarClick()}`
 con una aleta seria `{() =>alert()}` no `{alert()}`
 Pasar código en línea así no lo ejecutara al hacer click; lo ejecutará cada vez que el componente se renderice.

> [!TIP]
> Si necesitas pasar argumentos a la función del manejador de eventos, puedes usar una
> función flecha:

## Pasando eventos como Props

```jsx
function BotonPersonalizado({ onCustomClick, label }) {
  return <button onClick={onCustomClick}>{label}</button>;
}

function App() {
  function handleButtonClick() {
    alert("¡Botón personalizado clickeado!");
  }

  return (
    <BotonPersonalizado
      onCustomClick={handleButtonClick}
      label="Haz clic aquí"
    />
  );
}
```

## Event Bubbling

El "event bubbling" (burbujeo de eventos) es un concepto del manejo de eventos del DOM donde un evento, como un clic, no solo afecta al elemento sobre el que ocurrió, sino que también se propaga (o "burbujea") hacia arriba a través de sus elementos padres en la jerarquía del DOM. Este proceso continúa hasta que llega al elemento `<html>` o hasta que la propagación del evento se detiene explícitamente.

En React, los eventos también siguen este patrón de burbujeo. Cuando un evento se dispara en un componente, los manejadores de eventos (`onClick`, `onMouseOver`, etc.) de los componentes padres también se ejecutarán, a menos que se detenga la propagación.

### Ejemplo de Event Bubbling

Considera un componente que tiene un botón dentro de un `div`. Ambos elementos tienen un manejador de eventos `onClick`.

```jsx
function ContenedorDeEventos() {
  const manejarClickPadre = () => {
    alert("Evento del contenedor (Padre) disparado");
  };

  const manejarClickHijo = () => {
    alert("Evento del botón (Hijo) disparado");
  };

  return (
    <div
      onClick={manejarClickPadre}
      style={{
        padding: "20px",
        backgroundColor: "lightblue",
        border: "1px solid blue",
      }}
    >
      <h2>Contenedor Padre</h2>
      <button onClick={manejarClickHijo} style={{ padding: "10px" }}>
        Haz clic aquí
      </button>
    </div>
  );
}
```

Al hacer clic en el botón "Haz clic aquí":

1. Se ejecuta `manejarClickHijo`, mostrando la alerta: "Evento del botón (Hijo) disparado".
2. El evento de clic "burbujea" hacia el `div` padre.
3. Se ejecuta `manejarClickPadre`, mostrando la alerta: "Evento del contenedor (Padre) disparado".

### Detener la Propagación

Si deseas evitar que el evento se propague a los elementos padres, puedes usar el método `stopPropagation()` en el objeto del evento.

```jsx
function ContenedorDeEventosStop() {
  const manejarClickPadre = () => {
    alert("Este evento no debería dispararse si se detiene la propagación.");
  };

  const manejarClickHijo = (event) => {
    // Detiene el burbujeo del evento
    event.stopPropagation();
    alert("Evento del botón (Hijo) disparado y propagación detenida.");
  };

  return (
    <div
      onClick={manejarClickPadre}
      style={{
        padding: "20px",
        backgroundColor: "lightgreen",
        border: "1px solid green",
      }}
    >
      <h2>Contenedor Padre (con stopPropagation)</h2>
      <button onClick={manejarClickHijo} style={{ padding: "10px" }}>
        Haz clic aquí para detener la propagación
      </button>
    </div>
  );
}
```

En este segundo ejemplo, al hacer clic en el botón, solo se mostrará la alerta del hijo ("Evento del botón (Hijo) disparado y propagación detenida."), porque `event.stopPropagation()` impide que el evento llegue al `div` padre.
