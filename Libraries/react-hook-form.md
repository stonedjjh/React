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

```JavaScript
<input name="nombre" type="text" {...register(nombre, {required:true})}
```

- **watch**: Este método permite observar el valor de uno o varios campos en tiempo real. Es muy útil para mostrar vistas previas o condicionar el renderizado de otros elementos según lo que el usuario escriba, comportándose de manera amigable al no re-renderizar todo el formulario si no es necesario.

```JavaScript
const watchField = watch("fieldName");
```

- **handleSubmit (onHandlerSubmit)**: Es el mediador que procesa el formulario. Recibe tu función personalizada (la que tú llamas habitualmente onHandlerSubmit) y solo la ejecuta si las validaciones han pasado con éxito. Automáticamente previene el comportamiento por defecto del navegador (e.preventDefault()).

```JavaScript
<form onSubmit={handleSubmit(onHandlerSubmit,onError)}>
```

- **setValue**: Se utiliza para establecer dinámicamente el valor de un campo registrado. Esto puede ser útil para actualizar valores basados en cierta lógica o en respuesta a eventos que no son directamente cambios en el input.

```JavaScript
setValue("fieldName", newValue);
```

- **reset**: Permite resetear los campos del formulario a sus valores por defecto o a nuevos valores proporcionados. Es útil para limpiar el formulario después de un envío o para inicializar el formulario con nuevos valores.

```JavaScript
reset({fieldName: newValue});
```

- **control**: Este objeto se utiliza principalmente para control avanzado de componentes, como integrar con componentes de UI de
terceros que no utilizan `ref` para el registro.

```JavaScript
<Controller control={control}  name="fieldName" render= {({field}) => <input {...field} />} />

```

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

### useFielfArrary

Es un hook que se utiliza para trabajar con arrays de campos. Esto es especialmente útil cuando tienes que manejar formularios dinámicos donde el número de campos puede cambiar, como una lista de habilidades o un formulario con partes que el usuario puede agregar o quitar.

### formState: { errors }

`formState` es un objeto que contiene información sobre el estado global del formulario. Una de sus propiedades más importantes es `errors`, un objeto que almacena los errores de validación de cada campo registrado. React Hook Form actualiza este objeto de forma amigable, permitiendo mostrar mensajes de error específicos sin necesidad de gestionar estados de error manuales.

Sintaxis con TypeScript

Al usar interfaces, TypeScript nos ofrece autocompletado para los mensajes de error, asegurando que no intentemos acceder a un error de un campo que no existe.

```typescript
const {
  formState: { errors },
} = useForm<FormInputs>();
```

**Propiedades del objeto errors:**

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

## GIST

En este ejemplo, utilizaremos Yup para validar las entradas, lo que nos permite obtener un código más legible. Sin embargo, aplicaremos el patrón Adapter para asegurar que, si en un futuro decidimos cambiar la librería de validación, no sea necesario modificar toda la base del código (desacoplamiento).

```tsx
// src/adapters/validator.interface.ts

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>; // Un objeto donde la clave es el campo y el valor es el mensaje
}

// Definimos qué debe hacer cualquier adaptador que creemos
export type ValidatorAdapter<T> = (data: T) => ValidationResult;
```

```tsx
// src/adapters/yup-adapter.ts
// Este se encargará de transformar (mapear) los errores complejos de Yup al formato simple de nuestra interfaz ValidationResult
import { type AnyObjectSchema, ValidationError } from "yup";
import type { ValidationResult } from "./validator.interface";

export const yupAdapter = (schema: AnyObjectSchema) => {
  return (data: any): ValidationResult => {
    try {
      // Intentamos validar de forma síncrona
      schema.validateSync(data, { abortEarly: false });
      return { isValid: true, errors: {} };
    } catch (error) {
      const e = error as ValidationError;
      const errors: Record<string, string> = {};

      // Mapeamos los errores de Yup a nuestro formato estándar
      e.inner.forEach((err) => {
        if (err.path) {
          errors[err.path] = err.message;
        }
      });

      return { isValid: false, errors };
    }
  };
};
```

```tsx
// src/schemas/user-schema.ts
// Se crea el esquema de validación usando la librería de `yup`
import * as yup from "yup";

export const userSchema = yup.object({
  username: yup
    .string()
    .required("El nombre de usuario es obligatorio")
    .min(3, "Mínimo 3 caracteres"),
  email: yup
    .string()
    .required("El correo es obligatorio")
    .email("Formato de correo inválido"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(6, "Mínimo 6 caracteres"),
});
```

```tsx
import { useForm } from "react-hook-form";
import type  { ValidatorAdapter } from "./adapters/validator.interface";

// Definimos los campos que espera este formulario
interface UserFormData {
  username?: string;
  email?: string;
  password?: string;
}

interface Props {
  // Aquí inyectamos el adaptador que creamos antes
  validator: ValidatorAdapter<UserFormData>;
}

export function Form({ validator }: Props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserFormData>();

  const onSubmit = (data: UserFormData) => {
    // 1. Usamos el adaptador (Desacoplado de Yup)
    const { isValid, errors: validationErrors } = validator(data);

    if (!isValid) {
      // 2. Mapeamos los errores del contrato al estado de RHF
      Object.entries(validationErrors).forEach(([field, message]) => {
        setError(field as keyof UserFormData, { type: "manual", message });
      });
      return;
    }

    // 3. Si es válido, procedemos con la lógica de negocio
    console.log("Formulario válido, enviando datos:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Nombre de Usuario</label>
        <input id="username" {...register("username")} />
        <p style={{ color: "red" }}>{errors.username?.message}</p>
      </div>

      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input id="email" type="email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" {...register("password")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
}
```