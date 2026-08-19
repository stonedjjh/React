# yup

Yup es una biblioteca de JavaScript para validación de esquemas. Se utiliza comúnmente en aplicaciones React para validar formularios y datos de entrada.

## Características

- Validación declarativa y composable.
- Soporte para tipos de datos primitivos y complejos.
- Mensajes de error personalizables.
- Integración fácil con bibliotecas de formularios como Formik.

## Instalación

Para instalar Yup en un proyecto de JavaScript o TypeScript, ejecuta uno de los siguientes comandos según el gestor de paquetes que uses:

- Con npm:

```bash
npm install yup
```

- Con yarn:

```bash
yarn add yup
```

- Con pnpm:

```bash
pnpm add yup
```

Si usas React Hook Form con Yup, también puedes instalar el resolver:

```bash
npm install @hookform/resolvers
```

## Conceptos

- **Esquemas**: Objetos que definen las reglas de validación.
- **Validación**: Proceso de verificar si los datos cumplen con el esquema.
- **Transformaciones**: Modificaciones automáticas de los datos durante la validación.

## Ejemplos

### Ejemplo de uso

```javascript
import * as yup from 'yup';

// Definir un esquema
const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  age: yup.number().positive('La edad debe ser positiva').integer('La edad debe ser un entero'),
});

// Usar el esquema para validar
schema.validate({
  name: 'Juan',
  email: 'juan@example.com',
  age: 25,
}).then((value) => {
  console.log('Validación exitosa:', value);
}).catch((error) => {
  console.log('Error de validación:', error.message);
});
```

### Ejemplo con React y TypeScript

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
  name: string;
  email: string;
  age: number;
};

const schema = yup.object({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  age: yup
    .number()
    .typeError('La edad debe ser un número')
    .positive('La edad debe ser positiva')
    .integer('La edad debe ser un entero')
    .required('La edad es obligatoria'),
}).required();

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Validación exitosa:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre</label>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Edad</label>
        <input type="number" {...register('age')} />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Integración con React Hook Form

- `yupResolver`: adaptador que conecta un esquema de Yup con react-hook-form. Permite que `useForm` utilice las reglas de validación definidas en el esquema de Yup y devuelva los errores correspondientes.
- `yup.object`: crea un esquema de objeto para validar un conjunto de campos. Dentro de `yup.object({ ... })` se definen las propiedades y sus validaciones.

## Errores comunes

- No usar `yup.object()` o `.required()` en el esquema principal, lo que puede hacer que `yup` no valide toda la estructura.
- No llamar a `schema.validate()` o usar su resultado/errores correctamente.
- Validar campos numéricos sin `typeError`, lo que genera mensajes genéricos cuando llega un string.
- Usar `yup.string().required()` en un campo que debe permitir valores `null` sin `nullable()`.
- No manejar el `catch` de `schema.validate()`, perdiendo el detalle del error devuelto por Yup.

## Buenas prácticas

- Definir los esquemas en un lugar separado (por ejemplo, `validationSchema.ts`) para mantener el componente limpio.
- Reutilizar esquemas parciales con `yup.object().shape({ ... })` y `.concat()` para validaciones compartidas.
- Usar mensajes de error específicos y claros en cada regla de validación.
- Convertir valores con `transform()` cuando esperas datos que pueden venir como string o null.
- Validar sólo los campos necesarios y mantener las reglas lo más simple posible.

## Métodos de validación más usados

- `required('mensaje')`: marca el campo como obligatorio.
- `email('mensaje')`: valida que el valor sea un email válido.
- `min(valor, 'mensaje')`: valida el tamaño mínimo (para strings, arrays, números).
- `max(valor, 'mensaje')`: valida el tamaño máximo.
- `matches(/regex/, 'mensaje')`: valida con una expresión regular.
- `length(valor, 'mensaje')`: valida la longitud exacta de una cadena o arreglo.
- `positive('mensaje')`: valida que el número sea positivo.
- `integer('mensaje')`: valida que el número sea un entero.
- `typeError('mensaje')`: muestra un mensaje cuando el tipo no es el esperado.
- `oneOf([valores], 'mensaje')`: valida que el valor esté en una lista de opciones.
- `nullable()`: permite valores `null`.
- `transform(...)`: transforma el valor antes de la validación.

## Ejemplo rápido de esquema con Yup

```javascript
const schema = yup.object({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  age: yup
    .number()
    .typeError('La edad debe ser un número')
    .positive('La edad debe ser positiva')
    .integer('La edad debe ser un entero')
    .required('La edad es obligatoria'),
  accepted: yup.boolean().oneOf([true], 'Debes aceptar los términos'),
  tags: yup.array().of(yup.string()).min(1, 'Debe seleccionar al menos una etiqueta'),
}).required();
```

