# Lucide React

Componentes de React para iconos de Lucide que se integran a la perfección en tus aplicaciones. Cada icono es un componente de React totalmente tipado que se renderiza como un SVG en línea (inline) optimizado, brindándote la flexibilidad de los componentes con el rendimiento de los gráficos vectoriales.

## Capacidades de Lucide React

- Soporte Total de TypeScript: Importa iconos como componentes de React con soporte completo de tipos, permitiendo el autocompletado y la validación de propiedades que ya estás aplicando en tus interfaces.

- Personalización mediante Props: Pasa propiedades para personalizar el tamaño, color, grosor del trazo (stroke width) y otros atributos de SVG de forma directa.

- Integración Nativa en JSX: Utiliza los iconos dentro de tu JSX con la misma facilidad que cualquier otro componente de React.

- Optimización mediante Tree-shaking: Benefíciate del tree-shaking automático para incluir en tu paquete final únicamente los iconos que realmente utilizas.

- Componentes de Iconos Dinámicos: Crea iconos que reaccionen al estado de la aplicación y a las interacciones del usuario en tiempo real.

## Instalación

```bash
pnpm add lucide-react
```

## Ejemplo

Se pueden pasar propiedades adicionales para ajustar el icono:

```jsx
import { Camera } from "lucide-react";

// Usage
const App = () => {
  return <Camera color="red" size={48} />;
};
export default App;
```

## props

| nombre              | tipo    | por defecto  |
| ------------------- | ------- | ------------ |
| size                | number  | 24           |
| color               | string  | currentColor |
| strokeWidth         | number  | 2            |
| absoluteStrokeWidth | boolean | false        |

## Aplicando props

Para personalizar la apariencia de un icono, puedes pasar propiedades personalizadas directamente al componente. El componente acepta todos los atributos de SVG como propiedades, lo que permite un estilo flexible de los elementos SVG. Consulta la lista de Atributos de Presentación SVG en MDN.

```jsx
// Usage
const App = () => {
  return <Camera size={48} fill="red" />;
};
```

## Accesibilidad

Por defecto, ocultamos los iconos de los lectores de pantalla usando aria-hidden="true". Puedes añadir atributos de accesibilidad usando aria-labels.

```jsx
import { Check } from "lucide-react";

const App = () => {
  return <Check aria-label="Task completed" />;
};
```

Para conocer las mejores prácticas sobre accesibilidad, consulta nuestra guía de accesibilidad.
