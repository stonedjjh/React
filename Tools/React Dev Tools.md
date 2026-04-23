# Guía: React Developer Tools

Las **React DevTools** son una extensión para el navegador que permite inspeccionar la jerarquía de componentes de React en una aplicación, facilitando el debugging y el profiling.

## 1. Pestaña de Componentes (Components)

Permite visualizar el árbol de componentes tal como React lo entiende, no solo como etiquetas HTML.

* **Inspección de Props y State**: Puedes ver y editar en tiempo real los valores de los `props` y el `state` de cualquier componente seleccionado.
* **Hooks**: Muestra una lista de todos los hooks usados (`useState`, `useEffect`, `useForm`, etc.) y sus valores actuales.
* **Source**: Te permite saltar directamente al archivo `.tsx` donde está definido el componente.


## 2. Pestaña de Rendimiento (Profiler)

Es la herramienta principal para realizar **Profiling** en el frontend.

* **Recording**: Permite grabar una sesión de interacción para analizar qué componentes se renderizaron.
* **Flame Chart**: Muestra una línea de tiempo donde las barras más largas y de colores cálidos (amarillo/naranja) indican los componentes que tardaron más en renderizarse.
* **Ranked Chart**: Ordena los componentes por el tiempo que consumieron, ideal para identificar cuellos de botella.



## 3. Depuración Amigable (The "Friendly" Debugging)
* **Render Why**: Si activas la opción "Highlight updates when components render" en la configuración (engranaje), verás un recuadro verde alrededor de los componentes que se actualizan en pantalla.
* **Consola ($r)**: Si seleccionas un componente en la pestaña "Components" y vas a la consola de Chrome, puedes escribir `$r` para acceder a la instancia de ese componente y sus propiedades actuales.

---

> **Tip de experto para tu proyecto**: 
> Si notas que tu formulario `Myinfo` se siente lento, usa el Profiler para ver si el hook `useForm` está causando re-renders innecesarios en componentes padres.


## Concepto: React Profiler API

A diferencia de las extensiones del navegador, la **API Profiler** nos permite medir el rendimiento de forma programática.

El componente <Profiler> mide qué tan seguido se renderiza una parte de tu aplicación y cuál es el "costo" de ese renderizado. A diferencia de las DevTools, este funciona mediante código.

**Propiedades Obligatorias**:
1. `id`: Identificador único para el bloque de código.
2. `onRender`: Callback que se ejecuta cada vez que los componentes dentro del árbol se "confirman" (commit).

**Métricas extraídas**:
- **Mount vs Update**: Permite saber si el costo es por la carga inicial o por cambios de estado.
- **Eficiencia**: Si `actualDuration` es mucho menor que `baseDuration`, tus optimizaciones están funcionando.

> **Nota Importante**: Por defecto, esta API está deshabilitada en las builds de producción de React. Para usarla en producción, se requiere una configuración especial en el bundler (Webpack/Vite).

### Sintaxis y Uso

Debes envolver la parte de tu árbol de componentes que quieres medir. Requiere dos props: un id (string) y una función onRender (callback).

```REACT
import { Profiler } from 'react';

const MyComponent = () => {
  const handleRender = (
    id, // el prop "id" del árbol Profiler que se acaba de enviar
    phase, // "mount" (primer render) o "update" (re-renders)
    actualDuration, // tiempo dedicado a renderizar la actualización
    baseDuration, // tiempo estimado de renderizado sin memoización
    startTime, // cuándo empezó React a renderizar esta actualización
    commitTime, // cuándo terminó React de aplicar los cambios
  ) => {
    console.log(`Componente [${id}] - Fase: ${phase}`);
    console.log(`Duración real: ${actualDuration}ms`);
  };

  return (
    <Profiler id="FormularioUsuario" onRender={handleRender}>
      <Myinfo />
    </Profiler>
  );
};
```

#### Explicación de las Métricas Clave

Para tu perfil de Analista, estas son las dos métricas que más te interesarán:

- **actualDuration**: Es el tiempo que React tardó realmente en renderizar el Profiler y sus hijos. Disminuye significativamente si usas React.memo o useMemo de forma correcta.

- **baseDuration**: Es el tiempo que tardaría el componente en renderizarse "desde cero" si no hubiera ningún tipo de caché o memoización. Sirve para comparar qué tan efectiva es tu optimización.