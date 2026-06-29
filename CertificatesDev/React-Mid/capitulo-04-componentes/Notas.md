# Capítulo 4: Componentes

Los componentes son la base del diseño de React. Un componente de React es simplemente una función de JavaScript que devuelve código HTML. En esta lección, aprenderás qué son los componentes, qué papel desempeñan en las aplicaciones de React y cómo escribir tu primer componente de React.

## Leer:
- [Documentación de React > Tu primer componente](https://react.dev/learn/your-first-component)

## Ejemplo: Profile

```javascript
// A simple React component
function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <img src="avatar.png" alt="My profile picture" />
      <p>Hello, I'm a React developer!</p>
    </div>
  );
}
```

## Importación y exportación de componentes

A medida que tus aplicaciones React crecen, organizar los componentes se vuelve fundamental. Dividir la interfaz de usuario en archivos separados ayuda a mantener la claridad del código y fomenta la reutilización. En esta lección, aprenderás a dividir los componentes en varios archivos, a hacerlos accesibles mediante exportaciones y a incorporarlos a otros componentes mediante importaciones.

### Leer:
- [Documentación de React > Importación y exportación de componentes](https://react.dev/learn/importing-and-exporting-components)

### Ejemplo:

```javascript
// In Profile.js file
export default function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <img src="avatar.png" alt="My profile picture" />
      <p>Hello, I'm a React developer!</p>
    </div>
  );
}

// In Gallery.js file
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing developers</h1>
      <Profile />
    </section>
  );
}
```

## Pasar propiedades a un componente

Los componentes de React utilizan props para comunicarse entre sí. Cada componente padre puede pasar información a sus componentes hijos mediante props. En esta lección, aprenderás cómo funcionan las props y cómo puedes pasarles cualquier valor de JavaScript, incluyendo objetos, arrays y funciones.

### Leer:
- [Documentación de React > Pasar propiedades a un componente](https://react.dev/learn/passing-props-to-a-component)

### Ejemplo:

```javascript
// Creating a component that accepts props
function Profile({ name, imageUrl, profession }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <img src={imageUrl} alt={`${name}'s profile`} />
      <p>{profession}</p>
    </div>
  );
}

// Using the component with different props
export default function Gallery() {
  return (
    <section>
      <h1>Notable Scientists</h1>
      <Profile 
        name="Maria Skłodowska-Curie" 
        imageUrl="https://i.imgur.com/szV5sdG.jpg" 
        profession="Physicist and Chemist" 
      />
      <Profile 
        name="Albert Einstein" 
        imageUrl="https://i.imgur.com/8B7NwTY.jpg" 
        profession="Theoretical Physicist" 
      />
    </section>
  );
}
```

## Manteniendo la pureza de los componentes

Los componentes de React funcionan mejor cuando son funciones puras. Una función pura siempre devuelve el mismo resultado con los mismos parámetros y no modifica nada externo a sí misma. En esta lección, aprenderás qué define a un componente puro, cómo `StrictMode` detecta los componentes impuros y cómo React llama a los componentes y hooks para mantener un comportamiento predecible.

### Leer:
- [Documentación de React > Manteniendo los componentes puros](https://react.dev/learn/keeping-components-pure)
- [Documentación de React > StrictMode](https://react.dev/reference/react/StrictMode)
- [Documentación de React > Los componentes y los hooks deben ser puros](https://react.dev/reference/rules/components-and-hooks-must-be-pure)
- [Documentación de React > React llama a componentes y hooks](https://react.dev/reference/rules/react-calls-components-and-hooks)
- [Certificates.dev > Pureza de componentes y StrictMode en React](https://certificates.dev/blog/component-purity-and-strictmode-in-react)

### Ejemplo:

```javascript
// Pure component - always returns the same output for the same props
function TeaCup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

// Impure component - modifies external variable (side effect)
let guestCount = 0;
function ImpureTeaCup({ guest }) {
  guestCount++; // ❌ This modifies a variable outside the component
  return <h2>Tea cup for guest #{guest}</h2>;
}

// Using StrictMode to help detect impurity
import React from 'react';

export default function App() {
  return (
    <React.StrictMode>
      <TeaCup guest={1} />
    </React.StrictMode>
  );
}
```

## Comprender la interfaz de usuario como un árbol

Tu aplicación React está tomando forma con muchos componentes anuidos. React modela la interfaz de usuario como un árbol, donde los componentes tienen relaciones padre-hijo. En esta lección, aprenderás cómo pensar en tu aplicación como un árbol te ayuda a comprender las relaciones entre componentes y te preparará para depurar el rendimiento y los conceptos de gestión de estado.

### Leer:
- [Documentación de React > Entendiendo tu interfaz de usuario como un árbol](https://react.dev/learn/understanding-your-ui-as-a-tree)

### Ejemplo:

```javascript
// Root component
function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

// Top-level component - affects rendering performance of components beneath
function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

// Leaf component - no child components, often frequently re-rendered
function Logo() {
  return <img src="logo.png" alt="Company Logo" />;
}
```



