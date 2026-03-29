# React Hook Form

Es una librería diseñada para gestionar formularios en React de manera eficiente. Su filosofía es reducir la cantidad de código que escribes (boilderplate) y mejorar el rendimiento de la aplicación al evitar que toda la página se "renderice" cada vez que el usuario presiona una tecla.

## Instalación

```bash
npm install react-hook-form
```

## Uso

```typescript
import {useForm} from 'react-hook-form'

...

const {register, handleSubmit} = useForm();

...
<form>
    <input {...register("name")} required />
</form>
```

En este ejemplo se usa el operador de propagación(Operador Spread) con la función register y esta se encarga de asignar, controlar y actualizar el estado de la variable vinculada al input

## Componentes

- **register**: Es la función que vincula un input al estado del formulario. Al aplicarla (usando el operador spread ...register('nombre')), React Hook Form registra el elemento y le asigna automáticamente los manejadores de eventos necesarios (onChange, onBlur) y la referencia para la validación.

**Ejemplo:**

```JavaScript
<input name="nombre" ttype="text" {...register(nombre, {required:true})}
```

- **watch**: Este método permite observar el valor de uno o varios campos en tiempo real. Es muy útil para mostrar vistas previas o condicionar el renderizado de otros elementos según lo que el usuario escriba, comportándose de manera amigable al no re-renderizar todo el formulario si no es necesario.

- **handleSubmit (onHandlerSubmit)**: Es el mediador que procesa el formulario. Recibe tu función personalizada (la que tú llamas habitualmente onHandlerSubmit) y solo la ejecuta si las validaciones han pasado con éxito. Automáticamente previene el comportamiento por defecto del navegador (e.preventDefault()).

### useForm()

`useForm` es el hook personalizado base de **React Hook Form** para gestionar formularios. Su objetivo es centralizar el estado de todos los inputs, las validaciones y el manejo de errores sin necesidad de crear un `useState` manual por cada campo, lo que lo hace mucho más amigable y eficiente en términos de rendimiento.

Sintaxis con TypeScript

```typescript
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
  setValue,
} = useForm<FormInputs>({
  defaultValues: {
    busqueda: "",
    categoria: "conciertos",
  },
});
```

-- **Generic (`<FormInputs>`):** Al pasarle tu interfaz o tipo, TypeScript te garantiza que los nombres que uses en register sean correctos y que los datos en el onSubmit tengan la estructura esperada.

- **defaultValues:** Es una buena práctica (y muy amigable para el usuario) definir los valores iniciales. Esto ayuda a que el formulario sea predecible desde el primer renderizado.

- **formState:** Un objeto que contiene información sobre el estado del formulario (si está "sucio", si se está enviando o si tiene errores de validación).

**Ejemplo de Integración:**

En este ejemplo, vemos cómo useForm orquestra todo el proceso de captura de datos de manera limpia.

```TypeScript
import { useForm } from "react-hook-form";

// Definimos la estructura de nuestro formulario
interface SearchForm {
  keyword: string;
  location: string;
}

const SearchEventsForm = () => {
  // Inicializamos el hook con nuestro tipo
  const { register, handleSubmit, formState: { errors } } = useForm<SearchForm>();

  const onHandlerSubmit = (data: SearchForm) => {
    // Aquí recibimos los datos ya validados y tipados
    console.log("Procesando búsqueda...", data);
  };

  return (
    <form onSubmit={handleSubmit(onHandlerSubmit)}>
      {/* Registro amigable con validación integrada */}
      <input
        {...register("keyword", { required: "Este campo es necesario" })}
        placeholder="Evento..."
      />
      {errors.keyword && <p>{errors.keyword.message}</p>}

      <input
        {...register("location")}
        placeholder="Ciudad..."
      />

      <button type="submit">Buscar</button>
    </form>
  );
};
```

### formState: { errors }

`formState` es un objeto que contiene información sobre el estado global del formulario. Una de sus propiedades más importantes es `errors`, un objeto que almacena los errores de validación de cada campo registrado. React Hook Form actualiza este objeto de forma amigable, permitiendo mostrar mensajes de error específicos sin necesidad de gestionar estados de error manuales.

Sintaxis con TypeScript

Al usar interfaces, TypeScript nos ofrece autocompletado para los mensajes de error, asegurando que no intentemos acceder a un error de un campo que no existe.

```typescript
const {
  formState: { errors },
} = useForm<FormInputs>();
```

**Propiedades del objeto errors**

- **type:** Indica el tipo de validación que falló (ej. required, minLength, pattern).

- **message:** Contiene la cadena de texto con el mensaje de error que definiste en el register. Es ideal para mostrarlo directamente en la UI.

- **ref:** Referencia al elemento del DOM que tiene el error, útil para poner el foco automáticamente en el campo fallido.

Ejemplo amigable

En este ejemplo, vemos cómo acceder a los errores para guiar al usuario de manera clara.

```typescript
import { useForm } from "react-hook-form";

interface SearchForm {
  keyword: string;
}

const SearchEventsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SearchForm>();

  const onHandlerSubmit = (data: SearchForm) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onHandlerSubmit)}>
      <input
        {...register("keyword", {
          required: "El nombre del evento es obligatorio",
          minLength: { value: 3, message: "Mínimo 3 caracteres" }
        })}
      />

      {/* Acceso amigable a los errores:
          Si existe un error en 'keyword', mostramos su mensaje personalizado.
      */}
      {errors.keyword && (
        <span style={{ color: 'red' }}>
          {errors.keyword.message}
        </span>
      )}

      <button type="submit">Buscar</button>
    </form>
  );
};
```

### Validation rule

**List of validation rules supported:**

- **`required`**
- **`min`**
- **`max`**
- **`minLength`**
- **`maxLength`**
- **`pattern`**
- **`validate`**
