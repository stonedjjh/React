# Profiling

El **Profiling** es el proceso de investigar el rendimiento de una aplicación en tiempo de ejecución.

**Diferencia clave**:
- **Debugging**: "¿Por qué no funciona?"
- **Profiling**: "¿Por qué va lento?" o "¿Por qué consume tanta memoria?"

**Qué nos permiten el profiling**:

- **Identificació de cuellos de botella**.
- **Optimización de rendimiento**.
- **Mejora continua**.

**Herramientas recomendadas**:
1. **React DevTools**: Para analizar el ciclo de vida de componentes.
2. **Profiler Component**
3. **Node.js --inspect**: Para perfilar el backend (FastAPI o Express).
4. **Chrome Performance**: Para un análisis profundo del navegador.


> **Regla de oro**: No optimices por intuición. Haz profiling primero, encuentra el cuello de botella real, y luego optimiza.