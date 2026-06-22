# Componentes

Las aplicaciones React se crean con ​fragmentos modulares de código llamados componentes. 

​Los componentes son los componentes básicos de ​las aplicaciones de React y ​facilitan la creación de interfaces de usuario complejas ​al dividir la interfaz de usuario en partes individuales. ​Luego, los combina en ​un componente principal que forma ​lo que el usuario ve y con lo que interactúa. 

​Los componentes de React le permiten dividir ​la interfaz de usuario en elementos separados. ​A continuación, se pueden reutilizar y manipular de forma independiente. 

## Proposito

- **Renderizar partes de una pagina web**.

- **Actualizar su estado cuando el usuario interactue con el**.

- **Manegar estados como la selección de un boton**.

## Características 

 - **Propiedades:** se utilizan para almacenar y pasar datos de un componente principal a un componente secundario, utilizan las principales funciones de react como los métodos de estado, propiedades y ciclo de vida.

 - **Eventos:** administran el modelo de objetos del documento(DOM).

 - **Estados:** actualizan la interfaz de usuario.

## Tipos de Componentes en React

- **Clase** pueden usar clases ES6 de JavaScript para crearlos, pueden pasar datos de un componete a otro componente de clase

- **Funcionales**: se escriben como funciones de javascript, toman argumentos, retornan jsx son fácil de leer y probar.

- **Oreden Superior**: reusan la logica de los componentes, pueden componer componentes juntos, se pueden pasar componentes como argumentos para otros componentes, representan el componente del parámetro junto con funciones adicionales.

### Componente de Clase

Es una clase de JavaScript que extiende el React.Component de la biblioteca React

```JS
import React, { Component } from 'react';

class MyComponent extends Component {
    render(){
        return (
            <div>
                <h1>Hola Mundo</h1>
            </div>
        )
    }
}

export default MyComponent;
```

```JS
//Manejo de Estado
import React, { Component } from 'react';

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { emp_id: '', emp_email: '' };
    }

    handleInputChange = event =>{
        const {name, value} = event.target;
        this.setState ( {[name]:value} );
    };
        

    render(){
        const { emp_id, empl_email } = this.state;
           return (
               <div className="EmpployeeDetails">
                   <input type="text" name="emp_id" value={emp_id}
                    onChange={ this.handleInputChange } placeholder='Enter Employee Id'
                   /> 
                   <input type="text" name="emp_email" value={emp_email}
                    onChange={ this.handleInputChange } placeholder='Enter Employee Email'
                   /> 
                   <button onClick={ () => alert(`Employee ID: ${emp_id}, Email: ${ emp_email }`)}>Show Details</button>                   
               </div>
           )        
    }
}

export default EmployeeDetails;
```

```JS
import React from 'react'
import EmployeeDetails from './EmployeeDetails'

function OrganizationDetails () {
    let employee_designation = 'Project Manager';
    return(
        <>
            <EmployeeDetails employee_designation = { employee_designation } />
        </>
    )
}

export default OrganizationDetails
```

### Ciclo de vida de un componente y sus métodos.

El ciclo de vida de un componente se compone de tres fases: **Mounting**(Montaje), **Updating**(Actualización) y **Unmounting**(Desmontaje).

- **Mounting**: se inicia el componente y el constructor con las props y el estado por defecto.

   - **componentWillMount()**: se llama antes de la primera ejecución de la función render.

   - **componentDidMount()**: se llama justo después de que la función render se ejecute por primera vez

   - **render()**

- **Updating**: los estados y propiedades del componente cambia debido a los eventos del usuario, el componente se vuelve a renderizar en esta fase.

   - **getDerivedStateFromProps()**: si ha actualizado las props y desea reflejarlos en el estado del componente 

   - **getSnapshotBeforeUpdate()**: da acceso a las propiedades y estados anteriores antes de la actualización.

   - **componentDidUpdate()**: permite crear efectos secundarios 

   - **render()**

- **Unmounting**: el componente se elimina de la vista

   - **componentWillUnmount()**: invoca esta función antes de eliminar el componente de la página, lo que indica el final de su ciclo de vida.