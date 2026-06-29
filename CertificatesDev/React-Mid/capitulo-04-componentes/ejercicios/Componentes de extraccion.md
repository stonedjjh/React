# Componentes de extracción 🎬

## Descripción del desafío
¡Es hora de organizar tu app de calificación de películas! 🔧 Refactorizarás tu código extrayendo componentes del sistema monolítico y creando componentes separados y reutilizables. Este desafío se centra en la arquitectura de componentes y en dividir la interfaz de usuario en código organizado y fácil de mantener.

Tu tarea consiste en crear una jerarquía de componentes bien estructurada.

## Requisitos y Objetivos
- [ ] **Crear componente `MovieItem`:** Mueve la plantilla actual para una película a un nuevo componente dentro de `MovieItem.jsx`.
- [ ] **Reemplazar renderizado en `App`:** Reemplaza la parte actual de `App.jsx` donde se muestran las películas con el componente `MovieItem`.
- [ ] **Uso de Props:** El componente `MovieItem` debe recibir los datos a través de una prop `movie`.
- [ ] **Dividir en subcomponentes:** Divide el componente `MovieItem` en subcomponentes más pequeños para una mejor organización (puedes ubicarlos dentro de `MovieItem.jsx` o en archivos separados).
- [ ] **Preservar funcionalidad:** Asegúrate de que toda la funcionalidad y apariencia visual permanezcan exactamente iguales después de la refactorización.

## Consejos

> [!TIP]
> - Imagina dibujar cuadros alrededor de cada componente y subcomponente de la interfaz de usuario y ponles nombres (ej: `MovieImage`, `MovieRating`, `MovieGenres`).
> - Idealmente, cada componente debería hacer una sola cosa (Principio de Responsabilidad Única).
> - Piensa para qué usarías selectores de clases CSS; esos son excelentes candidatos para convertirse en componentes.
