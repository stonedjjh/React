# Capítulo 5: Manejo de eventos

React ofrece una forma declarativa de gestionar las interacciones del usuario mediante manejadores de eventos. En esta lección, aprenderás a añadir manejadores de eventos a los elementos, a trabajar con el objeto de evento y a comprender cómo se comportan los eventos en React.

## Leer:
- [Documentación de React > Respuesta a eventos](https://react.dev/learn/responding-to-events)
- [Documentación de React > Objeto de evento de React](https://react.dev/reference/react-dom/components/common#react-event-object)

## Ejemplo: Button

```javascript
// Adding an event handler to a button
function Button() {
  // Handler with event parameter
  function handleClick(event) {
    // event.target refers to the DOM element that triggered the event
    alert('You clicked: ' + event.target.tagName);
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## Trabajar con formularios

Los formularios son esenciales para recopilar información del usuario en las aplicaciones web. En esta lección, aprenderás a trabajar con elementos de formulario, capturar la información del usuario y comprender las diferencias entre los campos de entrada controlados y no controlados.

### Leer:
- [Documentación de React > input](https://react.dev/reference/react-dom/components/input)
- [Documentación de React > select](https://react.dev/reference/react-dom/components/select)
- [Documentación web de MDN > Datos de formulario](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [Documentación de React > Componentes controlados y no controlados](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
- [Certificates.dev > Componentes controlados frente a componentes no controlados en React](https://certificates.dev/blog/controlled-vs-uncontrolled-components-in-react)

> 💡 **NOTA:** Los términos "controlado" y "no controlado" se aplican tanto a los campos de formulario como a los patrones de diseño de componentes en general.

### Ejemplos:

#### 1. Formulario Controlado (El valor es controlado por el estado de React)
```javascript
function ControlledForm() {
  const [name, setName] = React.useState('Aurora');
  
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted name: ${name}`);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

#### 2. Formulario No Controlado (El valor es manejado por el DOM y accedido vía FormData)
```javascript
function UncontrolledForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    alert(`Submitted name: ${name}`);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" defaultValue="Aurora" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

