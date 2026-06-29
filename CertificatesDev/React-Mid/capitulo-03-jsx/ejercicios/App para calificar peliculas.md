# App para calificar películas 🎬

## Descripción del desafío
Trabajarás con una colección de películas y las mostrarás en un formato limpio y organizado. Este desafío se centra en los fundamentos del renderizado JSX y el manejo de matrices de datos para crear listas dinámicas.

Tu tarea consiste en mostrar una lista de películas, sus descripciones, géneros y calificaciones.

## Requisitos y Objetivos (Parte 1)
- [x] **Mostrar películas:** Renderiza todas las películas presentes en el arreglo `ALL_MOVIES.items`.
- [x] **Información básica:** Muestra el nombre, la descripción y la imagen de cada película.
- [x] **Mostrar géneros:** Muestra los géneros asignados a cada película.
- [x] **Calificación en estrellas:** Muestra la calificación de la película en estrellas (con un máximo de 5 estrellas). Puedes usar un componente de estrellas provisto o simplemente emojis/texto.
- [x] **Uso de keys únicas:** Asegúrate de asignar una prop `key` única a cada elemento mapeado en la lista para que React optimice las actualizaciones del DOM.

## Requisitos y Objetivos (Parte 2: Mejorar la experiencia del usuario)
- [ ] **Icono de estrella de calificación:** Muestra la calificación de cada película dentro de un gran icono de estrella amarillo en la esquina superior derecha de los carteles de las películas.
- [ ] **Películas sin calificación:** Para las películas sin clasificación (rating nulo), muestra un guion (`-`) en lugar del número y colorea el icono de la estrella de gris.
- [ ] **Insignia "En cartelera":** Añade una insignia de "En cartelera" a las películas que se encuentran actualmente en los cines (propiedad `inTheaters`).
- [ ] **Marcador de posición de imagen:** Muestra un marcador de posición que diga "Sin imagen" para las películas que no tienen imagen.

## Consejos

> [!TIP]
> - La función `.map()` es tu mejor aliada para renderizar listas dinámicas en React.
> - La lista de películas se proporciona en `./data/movies.js`. ¡Siéntete libre de añadir tu película favorita!
> - Puedes usar las clases de TailwindCSS `text-yellow-500` y `text-gray-500` para colorear las estrellas según corresponda.
> - Puedes asignar un valor nulo (`null`) a la calificación de alguna película en `movies.js` para probar la correcta visualización de una película sin calificación.
> - Puedes eliminar o comentar la URL de imagen de una película en `movies.js` para probar la correcta visualización de una película sin imagen.


