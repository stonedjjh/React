# Patrones de Diseño de React

En el ecosistema de React, los patrones de diseño son soluciones probadas y reutilizables para problemas comunes que surgen al construir interfaces de usuario. No son reglas rígidas, sino estrategias de arquitectura que ayudan a que el código sea más limpio, escalable y fácil de mantener.

Categorías de Patrones en React
Los patrones se suelen agrupar según el problema que resuelven:

1. Patrones de Estructura y Composición

Se enfocan en cómo organizar los componentes para que sean flexibles.

- **Compound Components**: Como vimos, permiten que varios componentes colaboren compartiendo un estado implícito (ej. Tabs y Tab).

- **Control Props**: Permiten que el usuario del componente "tome el control" del estado interno (similar a cómo funciona un input controlado).

2. Patrones de Reutilización de Lógica

Buscan evitar la duplicación de código cuando varios componentes necesitan la misma funcionalidad.

- **Custom Hooks**: Es el estándar moderno para extraer lógica (ej. useForm).

- **Higher-Order Components (HOC)**: Una función que recibe un componente y devuelve uno nuevo con "superpoderes" (cada vez menos usado en favor de los hooks).

- **Render Props**: Pasar una función como prop que le dice al componente qué renderizar.

3. Patrones de Renderizado

Se encargan de optimizar la eficiencia y la carga de la interfaz.

- **Container/Presentational Pattern**: Separar los componentes que manejan datos (lógica) de los que solo muestran la interfaz (estética).

- **Layout Components**: Componentes dedicados únicamente a organizar el espacio (ej. un componente Grid o Stack).

## Compund Components

El objetivo de este patrón es ofrecer una API limpia y expresiva. En lugar de pasar un objeto gigante de configuración a un solo componente, divides la responsabilidad en sub-componentes que "saben" cómo comunicarse entre sí.

1. El Concepto (La Analogía del Menú)
Imagina un componente de Tabs (pestañas). Sin este patrón, tendrías algo feo como:
`<Tabs data={[{label: 'Tab 1', content: '...'}, {label: 'Tab 2', content: '...'}]} />`.

Con Compound Components, el código es mucho más legible:

```TypeScript
<Tabs>
  <Tabs.List>
    <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="1">Contenido 1</Tabs.Content>
</Tabs>
```

2. ¿Cómo funciona bajo el capó? (El toque de Context)

La magia ocurre gracias a React Context. El componente padre envuelve a sus hijos en un `Provider` que guarda el estado (por ejemplo, qué pestaña está activa), y los hijos consumen ese estado internamente.

**Estructura básica:**

- **Contexto:** Para compartir el estado.

- **Componente Padre:** El que contiene el estado y el Provider.

- **Componentes Hijos:** Los que consumen el contexto y renderizan partes específicas.

3. Ventajas de este patrón

- **Flexibilidad:** El usuario del componente puede decidir el orden de los hijos o añadir otros elementos entre ellos sin romper la lógica.

- **Separación de responsabilidades:** Cada sub-componente se encarga de una sola cosa (el trigger de la acción, la lista, el contenido).

- **Adiós al "Prop Drilling":** No tienes que pasar el estado de "activo" manualmente a cada hijo.

- **Ejemplo Técnico:** Un Acordeón Simple

```tsx
import React, { useState, createContext, useContext } from 'react';

// 1. Creamos el contexto
const AccordionContext = createContext(null);

// 2. Componente Padre
const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion-container">{children}</div>
    </AccordionContext.Provider>
  );
};

// 3. Componentes Hijos (se suelen asignar como propiedades del padre)
Accordion.Item = ({ index, title, children }) => {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div className="item">
      <button onClick={() => setOpenIndex(isOpen ? null : index)}>
        {title}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
```
## Higher-Order Components (HOC)

Un Higher-Order Component es una función que toma un componente y devuelve un nuevo componente con funcionalidades adicionales. Es una forma de reutilizar lógica sin modificar el componente original.

**Ejemplo clásico: withAuth**

```tsx
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useAuth(); // Supongamos que este hook verifica la autenticación
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };
};
```

## Polymorphic Components

Los Polymorphic Components son componentes que pueden cambiar el tipo de elemento HTML que renderizan, manteniendo la misma funcionalidad y estilo. Esto es especialmente útil para crear componentes reutilizables que se adapten a diferentes contextos sin perder su esencia.

```tsx
#Title.tsx
import{FC ,HTMLAttributes, ReactNode} from 'react';

type TitleProps = HTMLAttributes<HTMLElement> & {
  as?: string; // Permite especificar el tipo de elemento HTML
  children: ReactNode;
};

const Title: FC<TitleProps> = ({ children, as, ...props }) => {
  const Component = as || 'h1';
  
  return (
    <Component {...props}>
      {children}
    </Component>
  );
};
```


Uso del componente:

```tsx
import Title from './Title';
const App = () => {
  return (
    <div>
      <Title as="h1">Título Principal</Title>
      <Title as="h2" style={{ color: 'blue', fontSize: '20px' }}>
        Subtítulo
      </Title>
      <Title>Otro Título (por defecto h1)</Title>
    </div>
  );
};
```