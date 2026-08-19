# Zod

Zod es una biblioteca de TypeScript para declarar esquemas y validar datos. Permite definir la forma de los datos y validar que los valores de entrada coincidan con esos esquemas, generando tipos de TypeScript automáticamente.

## Características

- **TypeScript-first**: Genera tipos automáticamente a partir de esquemas.
- **Validación robusta**: Soporta validaciones complejas, transformaciones y errores personalizados.
- **Ligero y rápido**: Sin dependencias externas, optimizado para rendimiento.
- **Integración con frameworks**: Compatible con React, Next.js, etc., para validación de formularios y APIs.

## Instalación

Para instalar Zod en un proyecto de JavaScript o TypeScript:

```bash
npm install zod
```

Si usas React Hook Form con Zod, también instala el resolver:

```bash
npm install @hookform/resolvers
```

## Conceptos principales

- **Esquemas (Schemas)**: Objetos que definen la estructura y reglas de validación, por ejemplo `z.string()` o `z.object()`.
- **Validación**: Método `.parse()` para validar datos y lanzar errores si no coinciden.
- **Inferencia de tipos**: Usa `z.infer<typeof schema>` para obtener tipos a partir de un esquema.
- **Uniones y opcionales**: Soporta tipos complejos como `z.union()`, `z.optional()`, `z.nullable()`, `z.array()` y objetos anidados.
- **Transformaciones**: Con `z.preprocess()` y `.transform()` se pueden adaptar datos antes o después de la validación.
- **Refinamiento**: Con `.refine()` y `.superRefine()` se aplican validaciones personalizadas.

## Ejemplos

### Ejemplo de uso

```typescript
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  age: z.number().min(18, 'Debe ser mayor de 18'),
  email: z.string().email('Email inválido'),
});

try {
  const user = UserSchema.parse({
    name: 'Juan',
    age: 25,
    email: 'juan@example.com',
  });
  console.log('Usuario válido:', user);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error('Error de validación:', error.errors);
  }
}

type User = z.infer<typeof UserSchema>;
```

### Ejemplo de integración con React Hook Form

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  age: z.number().min(18, 'Debe ser mayor de 18'),
});

type FormValues = z.infer<typeof schema>;

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Datos válidos:', data);
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
        <input type="number" {...register('age', { valueAsNumber: true })} />
        {errors.age && <span>{errors.age.message}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Ejemplo de integración simple con React

```tsx
import React, { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
});

type FormData = z.infer<typeof schema>;

export function SimpleForm() {
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = schema.parse(formData);
      console.log('Datos válidos:', validatedData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path.length > 0) {
            errorMap[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(errorMap);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input name="name" value={formData.name || ''} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input name="email" value={formData.email || ''} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Ejemplo de validación asíncrona con React Hook Form

```tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const checkEmailUnique = async (email: string) => {
  const response = await fetch(`/api/check-email?email=${email}`);
  const data = await response.json();
  return data.isUnique;
};

const schema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido').refine(async email => {
    return await checkEmailUnique(email);
  }, 'El email ya está registrado'),
  age: z.number().min(18, 'Debe ser mayor de 18'),
});

type FormValues = z.infer<typeof schema>;

export function AsyncUserForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Usuario registrado:', data);
    } catch (error) {
      console.error('Error al registrar:', error);
    } finally {
      setIsSubmitting(false);
    }
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
        <input type="number" {...register('age', { valueAsNumber: true })} />
        {errors.age && <span>{errors.age.message}</span>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registrando...' : 'Registrar'}
      </button>
    </form>
  );
}
```

## Métodos de validación más usados

- `z.string()`: valida cadenas de texto.
- `z.number()`: valida números.
- `z.boolean()`: valida booleanos.
- `z.object({ ... })`: valida objetos.
- `z.array(z.string())`: valida arreglos.
- `z.union([z.string(), z.number()])`: valida uno de varios tipos.
- `z.optional(...)`: permite `undefined`.
- `z.nullable(...)`: permite `null`.
- `z.literal(value)`: valida un literal exacto.
- `z.enum([...])`: valida valores enumerados.
- `z.record(z.string(), z.number())`: valida objetos con llaves dinámicas.
- `.min() / .max()`: valida límites en strings, arrays o números.
- `.email()`: valida emails.
- `.url()`: valida URLs.
- `.regex(/.../)`: valida con expresiones regulares.
- `.transform(...)`: transforma datos antes o después de la validación.
- `.refine(...)`: valida con lógica personalizada.
- `.superRefine(...)`: valida con lógica personalizada y errores complejos.

## Errores comunes

- No usar `z.object()` para esquemas de objetos y validaciones de campos anidados.
- Olvidar convertir cadenas a números con `valueAsNumber: true` cuando se usan inputs `<input type="number" />`.
- No manejar `ZodError` en `try/catch`, lo que hace difícil entender los errores de validación.
- Usar `.refine(async ...)` sin manejar correctamente el comportamiento asíncrono en el resolver.
- Definir reglas en el esquema que no coinciden con los datos reales, por ejemplo `z.string().min(1)` en un campo que puede ser `null`.

## Buenas prácticas

- Define los esquemas en archivos separados, como `validationSchema.ts`, y reutilízalos en tus componentes.
- Usa `z.infer<typeof schema>` para mantener los tipos sincronizados con el esquema.
- Agrega mensajes de error claros y específicos en cada regla.
- Prefiere validaciones simples y explícitas antes que reglas demasiado complejas.
- Usa `z.preprocess()` para limpiar o normalizar datos antes de validarlos.
- Evita validaciones asíncronas dentro de `parse()` en casos simples; separa la validación de la lógica de negocio cuando sea posible.
- Si usas React Hook Form, combina `zodResolver(schema)` con `formState.errors` para mostrar mensajes de error directos.

