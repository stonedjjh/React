# Redux Toolkit (RTK) - Guía Explicativa Paso a Paso

**Redux Toolkit** es el conjunto de herramientas oficial, de opinión fuerte y recomendado por el equipo de Redux para escribir lógica de Redux de manera eficiente. Fue creado para solucionar las tres quejas más comunes sobre Redux:

1. "Configurar un store de Redux es demasiado complicado".
2. "Tengo que añadir un montón de paquetes para que Redux haga algo útil".
3. "Redux requiere demasiado código repetitivo (boilerplate)".

---

## 1. Glosario: Conceptos Clave en Redux Toolkit

Para entender Redux, primero debemos comprender sus bloques de construcción básicos. Imagina que el estado de tu aplicación es un **banco**:

* **Store (El Banco Central):**
  Es el lugar único donde se guarda todo el estado (datos) de tu aplicación. Ningún componente puede modificar este estado directamente. Es la "única fuente de la verdad".
* **Action (El Formulario de Solicitud):**
  Es un objeto plano de JavaScript que describe *qué* quieres hacer. No cambia el estado por sí mismo, solo transporta la información (ej. "Quiero depositar $10" o "Quiero cambiar mi nombre de usuario").
* **Reducer (El Cajero del Banco):**
  Es una función pura que recibe el estado actual y la acción (el formulario), y decide cómo actualizar el estado. En base a las reglas de negocio, calcula y devuelve un **nuevo** estado.
* **Slice (Una Sucursal o Departamento del Banco):**
  En lugar de tener un archivo gigante para todo el banco, un **Slice** divide el estado en secciones más pequeñas y lógicas (ej. un Slice para "Finanzas", otro para "Usuarios"). Un Slice empaqueta en un solo lugar:
  1. El estado inicial de esa sección.
  2. Los reducers que gestionan esa sección.
  3. Las acciones que los componentes pueden llamar.

---

## 2. Los Hooks de React-Redux (Comunicación entre UI y Store)

Para conectar tu interfaz de React con el Store de Redux, usamos dos herramientas principales (Hooks):

### `useSelector` (El Lector/Consultor)
* **¿Qué hace?** Te permite extraer y leer datos del estado global (Store) desde cualquier componente.
* **¿Cómo funciona?** Le pasas una función selectora que indica qué parte del estado necesitas. Cada vez que ese dato cambie en el Store, tu componente se volverá a renderizar automáticamente con el nuevo valor.
* **Ejemplo simple:** `const nombre = useSelector((state) => state.usuario.nombre);`

### `useDispatch` (El Mensajero/Despachador)
* **¿Qué hace?** Te permite enviar (despachar) acciones al Store. Es la única forma de avisar a Redux que debe ejecutar un reducer para cambiar el estado.
* **¿Cómo funciona?** Devuelve una función `dispatch` a la que le pasas la acción que quieres ejecutar.
* **Ejemplo simple:** `const dispatch = useDispatch(); dispatch(cambiarNombre("Carlos"));`

---

## 3. Ejemplo Práctico 1: El Contador (Paso a Paso)

Vamos a crear un contador simple. Aquí veremos cómo se define el estado, cómo se configuran las acciones y cómo se usa en la interfaz.

### Paso A: Crear el Slice (`contadorSlice.js`)
Aquí definimos el comportamiento y el estado de nuestro contador.

```javascript
import { createSlice } from '@reduxjs/toolkit';

// 1. Definimos cómo empieza nuestro estado (Estado Inicial)
const initialState = { 
  valor: 0 
};

// 2. Creamos el Slice. createSlice genera automáticamente las acciones y reducers por nosotros.
const contadorSlice = createSlice({
  name: 'contador', // Nombre que identificará a este pedazo del estado global
  initialState,     // Estado inicial definido arriba
  reducers: {
    // Reducer para incrementar
    incrementar: (state) => {
      // NOTA: Aunque parece que estamos "mutando" (modificando) el state directamente (state.valor += 1),
      // Redux Toolkit usa una librería interna llamada "Immer" que protege el estado
      // y crea una copia inmutable por debajo de forma segura.
      state.valor += 1;
    },
    // Reducer para decrementar
    decrementar: (state) => {
      state.valor -= 1;
    },
    // Reducer que recibe datos externos (payload)
    incrementarPorMonto: (state, action) => {
      // action.payload contiene el número o dato que enviemos desde el componente al llamar a la acción
      state.valor += action.payload;
    }
  }
});

// 3. Exportamos las Acciones (Action Creators) que se generaron solas.
// Estas funciones se usarán en los componentes para decirle al store qué hacer.
export const { incrementar, decrementar, incrementarPorMonto } = contadorSlice.actions;

// 4. Exportamos el Reducer para poder agregarlo a la tienda global (Store)
export default contadorSlice.reducer;
```

### Paso B: Configurar el Store (`store.js`)
Aquí juntamos todos nuestros reducers (Slices) en un solo lugar.

```javascript
import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from './contadorSlice'; // Importamos el reducer del paso anterior

// Creamos el Store global
export const store = configureStore({
  reducer: {
    // Registramos nuestro contadorReducer bajo la propiedad 'contador'
    // A partir de ahora, todo el estado de este slice estará en state.contador
    contador: contadorReducer
  }
});
```

### Paso C: Conectar y usar en React (`ContadorComponent.jsx`)
Ahora usamos los hooks `useSelector` y `useDispatch` en nuestro componente React.

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, decrementar, incrementarPorMonto } from './contadorSlice';

export function Contador() {
  // 1. Usamos useSelector para leer la propiedad 'valor' del estado 'contador' del Store global
  const valor = useSelector((state) => state.contador.valor);

  // 2. Usamos useDispatch para obtener la función despachadora de acciones
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Mostramos el valor que leímos del Store */}
      <h1>Contador: {valor}</h1>

      {/* Al hacer clic, enviamos la acción de incrementar() al Store */}
      <button onClick={() => dispatch(incrementar())}>
        Incrementar (+1)
      </button>

      {/* Enviamos la acción de decrementar() al Store */}
      <button onClick={() => dispatch(decrementar())} style={{ marginLeft: '10px' }}>
        Decrementar (-1)
      </button>

      {/* Enviamos la acción incrementarPorMonto pasando 5 como 'payload' */}
      <button onClick={() => dispatch(incrementarPorMonto(5))} style={{ marginLeft: '10px' }}>
        Sumar 5
      </button>
    </div>
  );
}
```

---

## 4. Ejemplo Práctico 2: Petición Asíncrona (API) (`usuariosSlice.js`)

Redux Toolkit simplifica las peticiones HTTP (asíncronas) usando `createAsyncThunk`. 
Cuando hacemos una llamada asíncrona, esta tiene tres fases o estados:
1. **Pending (Pendiente):** La petición comenzó (ej. mostrar un cargando/loading).
2. **Fulfilled (Completada):** La petición terminó con éxito (ej. guardar los datos recibidos).
3. **Rejected (Rechazada):** Hubo un error en la red o servidor (ej. mostrar mensaje de error).

### Paso A: Crear el Thunk asíncrono y el Slice
```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Creamos el Thunk. Primer parámetro es la firma/nombre de la acción,
// el segundo es una función asíncrona que hace la petición.
export const fetchUsuarioPorId = createAsyncThunk(
  'usuarios/fetchPorId',
  async (usuarioId) => {
    const response = await fetch(`https://api.ejemplo.com/usuarios/${usuarioId}`);
    if (!response.ok) {
      throw new Error('No se pudo encontrar al usuario');
    }
    // Lo que retorne esta función será el 'payload' que recibirá la acción 'fulfilled'
    return await response.json(); 
  }
);

const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: { 
    datos: null, 
    cargando: false, 
    error: null 
  },
  reducers: {},
  // extraReducers nos permite escuchar y reaccionar a acciones que no fueron
  // creadas directamente dentro de los reducers comunes de este slice (como el Thunk de arriba).
  extraReducers: (builder) => {
    builder
      // A. Cuando la petición está pendiente (esperando respuesta)
      .addCase(fetchUsuarioPorId.pending, (state) => {
        state.cargando = true;
        state.error = null;
      })
      // B. Cuando la petición tiene éxito
      .addCase(fetchUsuarioPorId.fulfilled, (state, action) => {
        state.cargando = false;
        state.datos = action.payload; // action.payload tiene los datos del usuario retornado por la API
      })
      // C. Cuando la petición falla
      .addCase(fetchUsuarioPorId.rejected, (state, action) => {
        state.cargando = false;
        state.error = action.error.message; // action.error.message contiene el mensaje de error
      });
  }
});

export default usuariosSlice.reducer;
```

---

## Flujo de Datos en Redux Toolkit

El flujo sigue siendo estrictamente unidireccional y se comporta así:

```mermaid
graph TD
    UI[Componente React] -->|1. dispatch(incrementar())| Store[Store global]
    Store -->|2. Envía acción al Slice correcto| Slice[contadorSlice]
    Slice -->|3. Reducer ejecuta lógica e Immer actualiza de forma inmutable| State[Nuevo Estado]
    State -->|4. useSelector detecta el cambio| UI
    
    style Store fill:#764abc,stroke:#333,stroke-width:2px,color:#fff
    style Slice fill:#e15b64,stroke:#333,stroke-width:2px,color:#fff
    style UI fill:#61dafb,stroke:#333,stroke-width:1px,color:#000
    style State fill:#abb8c3,stroke:#333,stroke-width:1px
```

---

## Comparación Rápida: Clásico vs. Toolkit

| Aspecto | Redux Clásico | Redux Toolkit |
| :--- | :--- | :--- |
| **Boilerplate** | Alto (Constantes, Action Creators, Reducers por separado). | Bajo (Todo unificado en `createSlice`). |
| **Inmutabilidad** | Manual (Uso de operadores spread `...` o librerías como Immer a mano). | Automática (Immer viene integrado en los reducers). |
| **Configuración Store** | Complejo (Requiere configurar middleware, devtools y combinar reducers a mano). | Simple (`configureStore` configura todo por defecto). |
| **Operaciones Asíncronas** | Requiere configurar middlewares adicionales como `redux-thunk` o `redux-saga`. | Thunk integrado y automatizado con `createAsyncThunk`. |
