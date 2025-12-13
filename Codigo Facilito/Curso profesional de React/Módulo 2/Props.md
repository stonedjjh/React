# Props

Los **props** (abreviatura de "properties") son un mecanismo en React que permite pasar datos desde un componente padre a un componente hijo. Son inmutables, lo que significa que un componente hijo no puede modificar los props que recibe.

## Uso de Props

Para utilizar props en un componente, simplemente se definen como
atributos en el componente hijo cuando se utiliza en el componente padre. Luego, el componente hijo puede acceder a estos props a través del objeto `props`.

```jsx
// Componente Padre
function ComponentePadre() {
  return <ComponenteHijo nombre="Juan" edad={30} />;
}
// Componente Hijo
function ComponenteHijo(props) {
  return (
    <div>
      <h1>Nombre: {props.nombre}</h1>
      <h2>Edad: {props.edad}</h2>
    </div>
  );
}
```

En este ejemplo, el `ComponentePadre` pasa dos props (`nombre` y `edad`) al `ComponenteHijo`, que luego los utiliza para mostrar la información.

## Destructuración de Props

También es común utilizar la destructuración para acceder a los props de manera más concisa:

```jsx
function ComponenteHijo({ nombre, edad }) {
  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <h2>Edad: {edad}</h2>
    </div>
  );
}
```

En este caso, los props `nombre` y `edad` se extraen directamente en los parámetros de la función del componente hijo.

## Props por Defecto

Puedes definir valores por defecto para los props utilizando `defaultProps`:

```jsx
ComponenteHijo.defaultProps = {
  nombre: "Desconocido",
  edad: 0,
};
```

En este ejemplo, si el `ComponenteHijo` no recibe los props `nombre` o `edad`, utilizará los valores por defecto especificados.

> [!IMPORTANT]
> Los props son inmutables y no deben ser modificados dentro del componente hijo. Si necesitas cambiar el estado, considera usar el estado local del componente o un gestor de estado global.
> Si pasamos una variable como props y se modifica en el padre en el hijo se actualizara el valor automaticamente.
