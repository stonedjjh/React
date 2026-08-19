# Supabase

Supabase es una plataforma de backend como servicio (BaaS) de código abierto que proporciona una alternativa moderna y escalable a servicios como Firebase. Está construida sobre PostgreSQL y ofrece herramientas para desarrollar aplicaciones web y móviles con autenticación, base de datos en tiempo real, almacenamiento de archivos y más, todo sin necesidad de gestionar servidores.

## Características

- **Base de datos PostgreSQL**: Una base de datos relacional potente y extensible.
- **Autenticación**: Soporte para autenticación por email, OAuth (Google, GitHub, etc.), y gestión de usuarios.
- **Almacenamiento de archivos**: Subida y gestión de archivos con políticas de acceso.
- **Funciones en tiempo real**: Suscripciones en tiempo real para cambios en la base de datos.
- **API REST y GraphQL**: Generación automática de APIs para interactuar con la base de datos.
- **Edge Functions**: Funciones serverless ejecutadas en el borde.
- **Dashboard intuitivo**: Interfaz web para gestionar la base de datos y usuarios.
- **Código abierto**: Gratuito y personalizable.

## Conceptos

- **Proyecto**: Una instancia de Supabase que incluye la base de datos, configuración y servicios.
- **Tabla**: Estructuras de datos en PostgreSQL donde se almacenan los registros.
- **Row Level Security (RLS)**: Políticas de seguridad que controlan el acceso a filas específicas en las tablas.
- **Buckets**: Contenedores para almacenamiento de archivos.
- **Triggers y Functions**: Automatización de tareas mediante triggers en la base de datos y funciones SQL.
- **Realtime**: Capacidad para recibir actualizaciones en tiempo real mediante WebSockets.

## Ejemplos

### Inicialización de Supabase en JavaScript
```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)
```

### Autenticación de usuario
```javascript
const { user, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'password'
})
```

### Consulta a la base de datos
```javascript
const { data, error } = await supabase
  .from('users')
  .select('*')
```

### Suscripción en tiempo real
```javascript
const subscription = supabase
  .from('messages')
  .on('INSERT', payload => {
    console.log('Nuevo mensaje:', payload.new)
  })
  .subscribe()
```

