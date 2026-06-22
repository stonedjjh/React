# Notas de Aprendizaje: Pruebas (Testing) de Componentes React

Este documento contiene notas detalladas en español sobre los principios modernos, herramientas recomendadas y mejores prácticas para realizar pruebas en componentes de React, basadas en el contenido de aprendizaje sobre testing de componentes de React.

---

## 1. Introducción al Testing Moderno en React

- **Enfoque centrado en el usuario:** Al igual que no abres el capó de un coche autónomo para revisar el motor cuando quieres probar su funcionamiento (sino que lo conduces en condiciones reales), el testing moderno de React se enfoca en la experiencia del usuario, las interacciones, los estados de carga y las actualizaciones asíncronas, en lugar de la mecánica interna del código.

- **Impacto de las nuevas características de React:** Características como el *Concurrent Rendering* (renderizado concurrente), *Automatic Batching* (agrupación automática de estados), *Transitions* (transiciones) y un *Suspense* mejorado optimizan la experiencia de usuario, pero cambian la forma en que escribimos las pruebas.

- **Foco de las pruebas:** Deben validar el comportamiento de cara al usuario, simular interacciones reales y validar los resultados en la interfaz de usuario (UI), no los detalles de implementación interna o los métodos del ciclo de vida del componente.

## 2. ¿Por qué cambió el Testing en React?

El nuevo renderizador concurrente de React permite pausar, reanudar o agrupar actualizaciones para mejorar el rendimiento. Esto implica tres puntos clave:
1. **Actualizaciones asíncronas:** Las actualizaciones del estado no siempre ocurren de forma síncrona.
2. **DOM no inmediato:** Es posible que el DOM (Document Object Model) no refleje los cambios inmediatamente después de una actualización de estado.
3. **Fallas en pruebas tradicionales:** Las pruebas que asumen un renderizado síncrono pueden fallar o comportarse de manera inconsistente (*flaky tests*).

- **Solución:** Las pruebas modernas deben esperar a que la UI se actualice en lugar de verificar el DOM inmediatamente después de una interacción.

## 3. Objetivos del Testing en React

Existen cuatro objetivos principales al probar componentes de React:
1. **Validar el comportamiento del usuario, no los detalles de implementación:** Probar cómo responde el componente a entradas de texto, clics o respuestas de red.
2. **Manejar el renderizado asíncrono de forma segura:** Dado que React puede agrupar o diferir las actualizaciones de estado, se deben usar métodos de consulta asíncronos como `findBy` o utilidades como `waitFor`.
3. **Simular el uso del mundo real:** Emplear librerías que imiten fielmente cómo interactúan los usuarios con el navegador (por ejemplo, `@testing-library/user-event`).
4. **Asegurar el comportamiento bajo concurrencia:** Probar componentes que utilicen `useTransition`, `Suspense` o peticiones de datos (*data fetching*) tanto en su estado de carga (*loading state*) como en su estado final.

## 4. Herramientas Recomendadas


- **React Testing Library (RTL):** El estándar para probar componentes de React. Prioriza la experiencia del usuario sobre la lógica interna, maneja automáticamente las llamadas a `act` y funciona perfectamente con el renderizado concurrente. Ofrece consultas asíncronas (`findBy`, `waitFor`) y consultas basadas en roles accesibles (que imitan cómo un usuario real percibe la página).

- **Jest:** El ejecutor de pruebas (*test runner*) y librería de aserciones más popular para React. Proporciona un entorno completo con mocks, snapshots y ganchos de configuración. Se integra perfectamente con RTL, soporta mocks de temporizadores y peticiones de red, y se mantiene activamente para ser compatible con las últimas versiones de React.

- **`@testing-library/jest-dom`:** Extiende Jest con comparadores personalizados (*custom matchers*) para el DOM, mejorando las aserciones (ej. `toBeInTheDocument`, `toHaveTextContent`, `toBeVisible`).

- **`@testing-library/user-event`:** Proporciona simulaciones realistas de interacciones de usuario (escribir, hacer clic, seleccionar texto). Altamente recomendada frente a los métodos de simulación básicos.

- **Mock Service Worker (MSW):** Intercepta y simula llamadas a APIs a nivel de red, simulando peticiones reales sin necesidad de mockear manualmente `fetch` o `axios`. Garantiza que los componentes con `Suspense` o carga asíncrona funcionen correctamente. Es la herramienta preferida para mockear APIs en React.

- **Vitest:** Un ejecutor de pruebas rápido con soporte para *Hot Module Replacement* (HMR) e integración nativa con RTL. Muy recomendado para proyectos basados en Vite.

## 5. Herramientas Obsoletas / Deprecadas


- **Enzyme:** Está obsoleta porque dependía fuertemente de las APIs internas de React, las cuales cambiaron por completo con el renderizado concurrente. No se lanzó ningún adaptador oficial para las versiones nuevas de React y no es compatible con la nueva API de renderizado raíz (`createRoot`).

## 6. Mejores Prácticas de Testing


- **Probar desde la perspectiva del usuario:** Enfocarse en el resultado visual y comportamiento observable, no en el estado interno del componente o en llamadas a funciones privadas.

- **Usar utilidades asíncronas:** Reemplazar `getBy` por `findBy` al interactuar con carga de datos, transiciones o `Suspense`. Utilizar `waitFor` para esperar cambios en el DOM tras eventos asíncronos.

- **Evitar probar detalles de implementación:** No evaluar variables de estado interno ni métodos privados. Probar el comportamiento resultante del componente ante interacciones.

- **Simular comportamiento real:** Usar `user-event` para clics, escritura y navegación con el teclado.

- **Manejar Suspense y Carga Diferida (Lazy Loading):** Probar tanto el estado alternativo (*fallback/loading*) como la interfaz resuelta una vez cargado el componente diferido.

- **Utilizar MSW para APIs:** Es más confiable y limpio interceptar el tráfico de red con MSW que mockear globalmente `fetch`.

- **Mantener las pruebas deterministas:** Evitar dependencias de red reales o temporizadores reales que puedan hacer que las pruebas sean inestables.

- **Usar herramientas E2E para integración total:** Para flujos complejos que involucren múltiples componentes interactuando entre sí, usar Cypress o Playwright en un navegador real.

---
### Resumen Clave
El testing moderno en React se basa en pruebas predictivas y deterministas que simulan fielmente las interacciones del usuario real, garantizando la estabilidad y el fácil mantenimiento del código a largo plazo.
