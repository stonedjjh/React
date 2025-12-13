# JSX

JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir código parecido a HTML dentro de archivos JavaScript, facilitando la creación de interfaces de usuario, especialmente con React, al describir la estructura visual de forma declarativa y luego ser transformado en llamadas a funciones JavaScript que React puede entender y renderizar en el DOM. Combina lógica y marcado, usa className en lugar de class, y permite incrustar expresiones JavaScript entre llaves {} para mayor dinamismo.

## Características de JSX

- Sintaxis similar a HTML: JSX utiliza una sintaxis que se asemeja al HTML, lo que facilita la comprensión y escritura del código para los desarrolladores familiarizados con HTML.

- Expresiones JavaScript: Permite incrustar expresiones JavaScript dentro de llaves `{}`, lo que facilita la integración de lógica y datos dinámicos en la interfaz de usuario.

- Componentes reutilizables: JSX facilita la creación de componentes reutilizables, lo que mejora la modularidad y el mantenimiento del código.

- Seguridad: JSX protege contra ataques de inyección de código al escapar automáticamente los valores incrustados, lo que ayuda a prevenir vulnerabilidades de seguridad.

- Compatibilidad con herramientas: JSX es compatible con herramientas de desarrollo modernas, como Babel, que pueden transformar el código JSX en JavaScript estándar para su ejecución en navegadores.

## Ejemplo de JSX

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

En este ejemplo, se crea un elemento JSX que representa un encabezado `<h1>` con una clase CSS "greeting" y el texto "Hello, world!". Luego, se utiliza `ReactDOM.render` para renderizar este elemento en un contenedor del DOM con el ID "root".

> [!IMPORTANT]
> El atributo class debe ser renombrado como className

## Ventajas de JSX

- Mejora la legibilidad del código al combinar la lógica y el marcado en un solo lugar.

- Facilita la creación y gestión de componentes en aplicaciones React.

- Permite una integración más fluida entre JavaScript y la estructura de la interfaz de usuario.

## Desventajas de JSX

- Puede requerir una curva de aprendizaje para desarrolladores que no están familiarizados con la sintaxis.

- La mezcla de lógica y marcado puede dificultar la separación de preocupaciones en algunos casos.

- Requiere herramientas de compilación adicionales para transformar JSX en JavaScript estándar, lo que puede agregar complejidad al proceso de desarrollo.

## Herramientas para trabajar con JSX

- Babel: Un compilador de JavaScript que puede transformar JSX en JavaScript estándar compatible con navegadores.

- Create React App: Una herramienta que configura automáticamente un entorno de desarrollo para aplicaciones React, incluyendo soporte para JSX.

- Vite: Un bundler moderno que proporciona una experiencia de desarrollo rápida y eficiente para aplicaciones React con soporte para JSX integrado.

- ESLint con plugins de React: Herramientas de linting que ayudan a mantener la calidad del código JSX y a seguir las mejores prácticas.

## Componentes

En React, los componentes son bloques de construcción fundamentales que permiten dividir la interfaz de usuario en partes reutilizables y manejables. Cada componente es una función o clase de JavaScript que puede aceptar entradas (props) y devolver elementos de React que describen lo que debe aparecer en la pantalla.

## Reactividad

La reactividad es uno de los conceptos más importantes en React. Se refiere a la capacidad de la interfaz de usuario para actualizarse automáticamente en respuesta a cambios en los datos o el estado de la aplicación.
