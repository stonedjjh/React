# Axios

Es un cliente HTTP basado en promesas. Su trabajo es simplificar la comunicación entre tu aplicación (el frontend) y el servidor (el backend). Básicamente, es el mensajero que lleva tus peticiones de datos y trae las respuestas.

## Características de Axios

Axios es un cliente HTTP basado en promesas que simplifica las peticiones asíncronas en Node.js y el navegador. Sus funciones principales incluyen:

- **Basado en Promesas:** Facilita el uso de la sintaxis `async/await` para un código más limpio y legible.

- **Transformación Automática de JSON:** Convierte automáticamente los datos de respuesta JSON en objetos de JavaScript.

- **Interceptores:** Permite interceptar solicitudes o respuestas para modificarlas antes de que lleguen a su destino.

- **Cancelación:** Soporta la cancelación de solicitudes si ya no son necesarias.

- **Manejo de Errores:** Proporciona funciones integrales y detalladas para la gestión de errores en las peticiones.

## Instalación

`npm i axios`

## Uso

Ejemplo de get

```javascript
const axios = require("axios");

// Hacer una petición para un usuario con ID especifico
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

// Opcionalmente, la solicitud anterior también se puede realizar como
axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // siempre sera ejecutado
  });

// ¿Quieres usar async/await? Añade la palabra reservada `async` a tu función/método externo.
async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

Ejemplo de post

```javascript
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
