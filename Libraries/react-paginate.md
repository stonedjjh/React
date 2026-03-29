#

## Instalación

`npm install react-paginate --save`

## Componentes principales

- `<ReactPaginate>`: Componente principal para la paginación. Acepta varias props para personalizar su comportamiento y apariencia.

- **breakLabel**: Texto que se muestra como separador entre páginas.

- **nextPage**: Etiqueta para el botón de la siguiente página.

- **previousLabel**: Etiqueta para el botón de la página anterior.

- **pagaRangeDisplayed**: Número de páginas que se muestran en la paginación.

- **pageCount**: Número total de páginas.

- **onPageChange**: Función que se llama cuando se selecciona una página. Recibe un objeto con la propiedad `selected` que indica el índice de la página seleccionada.

- **renderOnZeroPageCount**: Controla si se debe renderizar el componente cuando el conteo de páginas es cero.

- **forcePage**: Índice de la página que se debe mostrar como seleccionada. Útil para controlar la paginación desde un componente padre.

- **containerClassName**: Clase CSS para el contenedor de la paginación.

```javascript
<ReactPaginate
  breakLabel="..."
  nextLabel="next >"
  onPageChange={handlePageClick}
  pageRangeDisplayed={5}
  pageCount={pageCount}
  previousLabel="< previous"
  renderOnZeroPageCount={true}
/>
```
