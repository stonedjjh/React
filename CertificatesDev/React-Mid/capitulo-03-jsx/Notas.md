# Capítulo 3: JSX

Notas y ejemplos sobre la sintaxis de extensión de JavaScript (JSX).

## Agrupación de elementos con Fragmentos (`<>...</>`)

En JSX, un componente no puede retornar múltiples elementos raíz directamente. Para solucionar esto sin agregar nodos adicionales innecesarios al DOM (como un `<div>` extra), se utilizan los **Fragmentos** (`<>...</>`).

### Ejemplo: TodoList

```javascript
// Using a Fragment to group elements without adding extra nodes to the DOM
function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}
```

## JavaScript en JSX con llaves

JSX te permite insertar expresiones JavaScript dentro de tu código HTML encerrándolas entre llaves `{}`. Esto te permite incorporar valores dinámicos, variables y cálculos directamente en tu marcado.

Referencia oficial: [JavaScript en JSX con llaves (React.dev)](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

### Ejemplo

```javascript
// Using JavaScript expressions in JSX
const name = 'John';
const element = (
  <div>
    <h1>Hello, {name}!</h1>
    <p>2 + 2 = {2 + 2}</p>
    <p>Random number: {Math.random()}</p>
    <div className={isActive ? 'active' : 'inactive'}>
      {formatDate(new Date())}
    </div>
  </div>
);
```

## Listas de renderizado

En React, a menudo necesitarás mostrar varios componentes similares a partir de una colección de datos. Para lograr esto, los métodos de array de JavaScript resultan sumamente útiles, en particular `map()`.

Referencia oficial: [Renderizado de listas (React.dev)](https://react.dev/learn/rendering-lists)

### Ejemplo: NumberList

```javascript
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  
  // Transform array of numbers into array of React elements
  const listItems = numbers.map((number) =>
    <li key={number}>
      Number: {number}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

## Renderizado condicional

La representación condicional permite mostrar diferentes interfaces de usuario según ciertas condiciones. En esta lección, aprenderás a usar operadores de JavaScript como sentencias condicionales `if`, operadores ternarios y el operador lógico AND (`&&`) para crear elementos que representen el estado actual.

### Leer:
- [Documentación de React > Renderizado condicional](https://react.dev/learn/conditional-rendering)

### Ejemplo: WeatherInfo

```javascript
// Conditional rendering examples
function WeatherInfo({ temperature }) {
  // Method 1: If statements outside JSX
  let weatherMessage;
  if (temperature > 30) {
    weatherMessage = <p>It's hot outside!</p>;
  } else {
    weatherMessage = <p>It's cold, wear a jacket.</p>;
  }
  
  return (
    <div>
      {weatherMessage}
      
      {/* Method 2: Ternary operator */}
      <p>{temperature > 25 ? 'Too warm' : 'Comfortable'}</p>
      
      {/* Method 3: Logical AND */}
      {temperature > 32 && <p>Warning: Extreme heat!</p>}
    </div>
  );
}
```
