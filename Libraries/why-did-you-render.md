# Herramienta: why-did-you-render (WDYR)

why-did-you-render es una librería que "monitorea" a React y te avisa en la consola cuando un componente se vuelve a renderizar sin que haya un cambio real en sus datos (por ejemplo, cuando recibe un objeto que se ve igual pero tiene una referencia de memoria diferente).

1. Instalación y Configuración

Normalmente se configura en un archivo aparte (como wdyr.ts) y se importa al inicio de tu main.tsx o index.tsx.

```TypeScript
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  const { default: whyDidYouRender } = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true, // Rastrea componentes automáticos
  });
}
```

2. Activación en un Componente

No rastrea todo por defecto para no saturar la consola. Para activarlo en tu componente de formulario, por ejemplo, añades una propiedad estática:

```TypeScript
const Myinfo = () => {
  // ... tu lógica de useForm
};

// El toque mágico para habilitar el rastreo
Myinfo.whyDidYouRender = true;

export default Myinfo;
```

3. ¿Qué te dice WDYR en la consola?

Cuando detecta un renderizado innecesario, lanza un aviso amigable pero directo:

- **"Re-rendered because of props changes"**: Te muestra el valor anterior y el nuevo.

- **"Different objects that are deep equal"**: Este es el más importante. Te avisa que el componente se renderizó porque recibió un objeto `{}` o un array `[]` que "parece" igual al anterior pero React cree que es distinto por su dirección de memoria.