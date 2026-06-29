---
difficulty: 1
tags: react
chapter: "Chapter 3: JSX"
training: true
---

# Crear una Aplicación de Calificación de Películas

## Descripción del Desafío

¡Es hora de construir una aplicación de calificación de películas! 🎬 Estarás trabajando con una colección de películas y mostrándolas en un formato limpio y organizado. Este desafío se enfoca en los fundamentos del renderizado en JSX y en trabajar con arreglos de datos para crear listas dinámicas.

Tu tarea es mostrar una lista de películas, sus descripciones, géneros y calificaciones.

## Requerimientos

- Mostrar todas las películas del arreglo `ALL_MOVIES.items`
- Mostrar el nombre, la descripción y la imagen de cada película
- Mostrar los géneros de cada película
- Mostrar la calificación de la película como estrellas, con un máximo de 5 estrellas. Puedes usar el componente `StarIcon` provisto o un simple emoji/texto para las estrellas.

> 💡 CONSEJO: La función `map()` es tu mejor amiga para renderizar listas en React; utilízala para transformar tus datos en elementos JSX.
>
> 💡 CONSEJO: Recuerda que cada elemento en una lista mapeada necesita una propiedad `key` única para que React pueda actualizar el DOM de manera eficiente.

## Otras Consideraciones

- TailwindCSS viene preinstalado con la configuración por defecto. Puede resultarte útil si deseas añadir algunos estilos. (No es obligatorio)
- 😀 La lista de películas se proporciona como plantilla en `./data/movies.js`, pero siéntete libre de añadir tu película favorita a la lista.
- 👀 No mires la solución hasta que hayas resuelto el ejercicio por ti mismo o hayas agotado tus recursos. Desafiarte a ti mismo te preparará mejor para el examen.

## Ejemplo de la Aplicación Terminada

Este es un ejemplo de cómo debería verse la funcionalidad para el ejercicio completado. Si deseas imitar este estilo, no dudes en hacerlo, pero no es obligatorio.

![Captura de pantalla de la aplicación terminada](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTMtMS9zY3JlZW5zaG90LnBuZw==)

## Guía de Ejecución y Pruebas

Para levantar este proyecto localmente y verificar que cumpla con los requisitos, utiliza los siguientes comandos:

### 1. Instalación de dependencias
Descarga e instala todos los paquetes necesarios del proyecto:
```bash
npm install
```

### 2. Ejecutar entorno de desarrollo
Inicia el servidor local de desarrollo con Vite:
```bash
npm run dev
```

### 3. Ejecutar pruebas unitarias
Ejecuta la suite de pruebas unitarias con Vitest para validar los requisitos del ejercicio:
```bash
npm run test
```
