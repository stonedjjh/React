# Zustand

Zustand es una solución de gestión de estado pequeña, rápida y escalable. Tiene una API muy cómoda basada en hooks. No es verbosa (boilerplatey) ni impuesta, pero mantiene la suficiente convención para ser explícita y seguir el patrón Flux.

No la subestimes por ser sencilla, ¡tiene garras! Se dedicó mucho tiempo a resolver problemas comunes, como el temido _zombie child problem_, la concurrencia de React y la pérdida de contexto entre renderizadores mixtos. Es, probablemente, el único gestor de estado en el ecosistema de React que maneja todos estos puntos correctamente.

## Instalación

```batch
# NPM
npm install zustand
# Or, use any package manager of your choice.
```

## Ejemplo

```JavaScript
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
```

```TypeScript
import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
```
