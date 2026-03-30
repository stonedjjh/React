# Guía de Tipos de Eventos en React (TypeScript)

Esta lista detalla los tipos de eventos sintéticos que proporciona React para asegurar un tipado estricto y amigable en tus componentes.

| Tipo de Evento | Descripción |
| :--- | :--- |
| **AnimationEvent** | Eventos relacionados con Animaciones CSS. |
| **ChangeEvent** | Cambio en el valor de elementos `<input>`, `<select>` y `<textarea>`. |
| **ClipboardEvent** | Eventos de portapapeles: copiar, pegar y cortar. |
| **CompositionEvent** | Eventos de entrada indirecta de texto (ej. composición de caracteres japoneses en teclados occidentales). |
| **DragEvent** | Interacción de arrastrar y soltar (Drag and Drop) con un dispositivo puntero. |
| **FocusEvent** | Ocurre cuando un elemento gana o pierde el foco. |
| **FormEvent** | Se dispara cuando un formulario o elemento de formulario gana/pierde foco, cambia su valor o se envía. |
| **InvalidEvent** | Se activa cuando fallan las restricciones de validez de un input (ej. `<input type="number" max="10">` con valor 20). |
| **KeyboardEvent** | Interacción del usuario con el teclado. Describe una interacción de tecla individual. |
| **InputEvent** | Ocurre justo antes de que el valor de un `<input>`, `<select>` o `<textarea>` cambie. |
| **MouseEvent** | Interacciones con un dispositivo apuntador (ej. ratón/mouse). |
| **PointerEvent** | Interacción con diversos dispositivos (ratón, lápiz óptico, pantallas táctiles). Recomendado sobre MouseEvent para navegadores modernos. |
| **TouchEvent** | Interacción específica con dispositivos táctiles (móviles/tabletas). |
| **TransitionEvent** | Eventos de Transiciones CSS. (Nota: Soporte de navegador limitado). |
| **UIEvent** | Evento base para eventos de Mouse, Touch y Pointer. |
| **WheelEvent** | Desplazamiento de la rueda del ratón o dispositivo de entrada similar. |
| **SyntheticEvent** | El evento base para todos los anteriores. Úsalo como último recurso si no estás seguro del tipo específico. |



## Cómo usar estos tipos en tus notas


```typescript
// Ejemplo amigable de un evento de cambio
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

// Ejemplo para el envío de formulario (FormEvent)
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // ... lógica de envío
};