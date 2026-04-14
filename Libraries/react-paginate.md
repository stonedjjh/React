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

## Gist

```react
import React, { useState, useEffect } from 'react';
import ReactPaginateModule from "react-paginate";
import styles from './Pagination.module.css'; // Usando CSS Modules

 const ReactPaginate = (ReactPaginateModule as any).default || ReactPaginateModule;

const users = [
  { id: 1, nombre: "Daniel", apellido: "López", edad: 30, sexo: "M" },
  { id: 2, nombre: "Luna", apellido: "Contrera", edad: 6, sexo: "F" },
  { id: 3, nombre: "Andrés", apellido: "Castro", edad: 25, sexo: "M" },
  { id: 4, nombre: "Sofía", apellido: "Rodríguez", edad: 22, sexo: "F" },
  { id: 5, nombre: "Carlos", apellido: "Pérez", edad: 35, sexo: "M" }, 
  { id: 6, nombre: "Elena", apellido: "Gómez", edad: 28, sexo: "F" },
  { id: 7, nombre: "Ricardo", apellido: "Sánchez", edad: 40, sexo: "M" },
  { id: 8, nombre: "Lucía", apellido: "Díaz", edad: 19, sexo: "F" },
  { id: 9, nombre: "Fernando", apellido: "Torres", edad: 31, sexo: "M" },
  { id: 10, nombre: "Marta", apellido: "Ruiz", edad: 27, sexo: "F" },
  { id: 11, nombre: "Javier", apellido: "López", edad: 33, sexo: "M" },
  { id: 12, nombre: "Claudia", apellido: "Hernández", edad: 24, sexo: "F" },
  { id: 13, nombre: "Sergio", apellido: "García", edad: 29, sexo: "M" },
  { id: 14, nombre: "Isabel", apellido: "Martínez", edad: 26, sexo: "F" },
  { id: 15, nombre: "Miguel", apellido: "Ángel", edad: 38, sexo: "M" },
  { id: 16, nombre: "Patricia", apellido: "Morales", edad: 32, sexo: "F" },
  { id: 17, nombre: "Roberto", apellido: "Vargas", edad: 45, sexo: "M" },
  { id: 18, nombre: "Gabriela", apellido: "Ortiz", edad: 21, sexo: "F" },
  { id: 19, nombre: "Alejandro", apellido: "Silva", edad: 34, sexo: "M" },
  { id: 20, nombre: "Beatriz", apellido: "Ramos", edad: 30, sexo: "F" },
  { id: 21, nombre: "Hugo", apellido: "Mendoza", edad: 23, sexo: "M" },
  { id: 22, nombre: "Victoria", apellido: "Castillo", edad: 37, sexo: "F" },
  { id: 23, nombre: "Óscar", apellido: "Guzmán", edad: 41, sexo: "M" },
  { id: 24, nombre: "Natalia", apellido: "Ibarra", edad: 20, sexo: "F" },
  { id: 25, nombre: "Felipe", apellido: "Navarro", edad: 36, sexo: "M" }
];

const UserList = ({ itemsPerPage = 5 }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Simulamos la consulta: obtenemos el final del rango
    const endOffset = itemOffset + itemsPerPage;
    
    // "Consulta" sobre los datos ficticios
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Función que recibe el evento de react-paginate
  const handlePageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.container}>
      {/* Renderizado de los datos */}
      <ul className={styles.userList}>
        {currentItems.map((user) => (
          <li key={user.id} className={styles.userItem}>
            {user.nombre} {user.apellido} - {user.edad} años ({user.sexo})
          </li>
        ))}
      </ul>

      {/* Implementación del Paginate */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Siguiente >"
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Anterior"
        renderOnZeroPageCount={null}
        // Clases para CSS Modules
        containerClassName={styles.pagination}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink}
        nextClassName={styles.pageItem}
        nextLinkClassName={styles.pageLink}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default UserList;
```

Estilos sugeridos

```css
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 8px;
  justify-content: center;
  margin-top: 20px;
}

.pageItem {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pageLink {
  padding: 8px 12px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: #333;
}

.active {
  background-color: #007bff;
  border-color: #007bff;
}

.active .pageLink {
  color: white;
}

.userList {
  list-style: none;
  padding: 0;
}

.userItem {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
```
