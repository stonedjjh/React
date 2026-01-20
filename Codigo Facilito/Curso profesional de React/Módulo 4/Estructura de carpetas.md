# Estructura de carpetas para el Proyecto

Una estructura de carpetas bien organizada es crucial para mantener un proyecto React limpio y manejable. A continuación, se presenta una estructura de carpetas recomendada para un proyecto React profesional.

- src: Es el directorio que contiene todo el código fuente de la aplicación. Es el lugar donde pasarás el 99% de tu tiempo desarrollando.
  - **Procesamiento**: A diferencia de la carpeta public, todo lo que pongas en src es procesado, optimizado y empaquetado por herramientas como Vite o Webpack.

  - **Contenido típico**: Aquí es donde organizas tus componentes, archivos de estilo (CSS/SASS), imágenes que serán importadas en el código, hooks personalizados, archivos de contexto y utilidades (como tu eventInterface.ts).

  - **Punto de entrada**: Generalmente contiene el archivo main.jsx (o index.js), que es el encargado de arrancar toda la lógica de React y renderizarla en el DOM.

## subcarpetas de src

- assests: Ubicada generalmente dentro de src, es el contenedor destinado a los recursos estáticos que forman parte de la identidad visual y funcional de tu aplicación.

- components: Aquí se almacenan todos los componentes reutilizables de la aplicación. Cada componente puede tener su propia carpeta si es complejo, incluyendo archivos CSS o pruebas relacionadas.

- views: Esta carpeta contiene las vistas o páginas principales de la aplicación. Cada vista puede representar una ruta diferente en la aplicación.

- routes: Esta carpeta contiene la configuración de las rutas de la aplicación, utilizando bibliotecas como React Router.

- utils: Aquí se almacenan funciones utilitarias y helpers que pueden ser utilizados en diferentes partes de la aplicación.

- state: Es el directorio destinado a centralizar toda la lógica de manejo de estado global de la aplicación.

- hooks: Aquí se almacenan los hooks personalizados que has creado para reutilizar lógica entre componentes.
