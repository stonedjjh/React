# Formulario para crear una película 🎬

## Descripción del desafío
¡Es hora de sentar las bases de tu app de calificación de películas! 🎬 Crearás un formulario que recopile información de películas de los usuarios. Este desafío se centra en formularios no controlados, `FormData`, su manejo y la preparación para futuras operaciones CRUD.

Tu tarea consiste en crear un formulario de películas que recopile información de los usuarios y procese esos datos adecuadamente. Por ahora, solo recopilamos y registramos los datos; en futuros desafíos, usaremos este formulario para agregar y editar películas.

Verás un componente `Modal` (`components/ui/Modal.jsx`) que muestra el formulario usando su propiedad `children`. Por ahora, el modal permanece abierto en todo momento; en futuros desafíos, implementaremos la lógica para abrirlo y cerrarlo.

## Requisitos y Objetivos
- [ ] **Modificar `MovieForm.jsx`:** Añadir la funcionalidad del formulario en `components/MovieForm.jsx`.
- [ ] **Recibir prop `movie`:** El componente debe aceptar la propiedad `movie`, que puede ser `null` o un objeto de película.
- [ ] **Exponer manejadores `onSave` y `onCancel`:** El formulario debe exponer las funciones `onSave` y `onCancel` como props.
- [ ] **Campos requeridos en el formulario:**
  - Nombre de la película (`name`).
  - Descripción de la película (`description`).
  - URL de la imagen del póster de la película (`imageUrl`).
  - Uno o más géneros a partir de una selección (`genres`).
  - Si la película está actualmente en los cines (`inTheaters`).
- [ ] **Registrar datos al enviar:** Al hacer clic en enviar, invocar `onSave` y registrar en consola el objeto resultante desde `App.jsx`.
- [ ] **Registrar cancelación:** Al hacer clic en cancelar, invocar `onCancel` y registrar en consola `"cancel"` desde `App.jsx`.
- [ ] **Soporte de edición:** Si se pasa un objeto `movie` existente, el formulario debe mostrar los valores actuales como valores iniciales (utiliza `defaultValue` y `defaultChecked`).

## Consejos

> [!TIP]
> - Utiliza `defaultValue` para campos de texto y `defaultChecked` para casillas de verificación para establecer valores iniciales al editar.
> - Utiliza el método `.getAll()` de `FormData` para recuperar todos los géneros seleccionados en tu formulario.
> - Puedes probar el comportamiento de edición cambiando el estado `currentMovie` en `App.jsx` por una de las películas de tu lista.
