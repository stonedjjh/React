::page{title="Laboratorio: Renderizado de Datos de Comercio Electrónico usando Redux Toolkit"}

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-WD0231EN-SkillsNetwork/IDSN-logo.png" width="200" alt="logo de cognitiveclass.ai"  />

<br>

**Tiempo estimado necesario:** 60 minutos

## Introducción

En este laboratorio, aprenderás a usar Redux Toolkit para gestionar el estado en toda tu aplicación de tal manera que pueda ser accedido por cualquier componente sin seguir la jerarquía entre los componentes. Construirás una aplicación simple de Comercio Electrónico usando React y Redux, donde mostrarás una lista de productos con un botón de \"Agregar al Carrito\" para cada producto, mostrarás los artículos añadidos al carrito y permitirás a los usuarios eliminar artículos del carrito. Toda esta información estará disponible globalmente en toda la aplicación usando Redux Toolkit.

## Objetivos de aprendizaje

Después de completar este laboratorio, podrás:

- Integrar componentes de React con Redux para la gestión del estado
- Implementar características básicas de Comercio Electrónico, como agregar artículos al carrito, eliminar artículos del carrito y vaciar el carrito
- Practicar la composición de múltiples componentes de React para construir una interfaz de usuario cohesiva

## Requisitos previos

- Conocimientos básicos de la composición de componentes en React
- Conocimientos intermedios de JavaScript
- Conocimiento de componentes funcionales de React, gestión del estado usando el hook useState y Redux Toolkit

::page{title="Paso 1: Configuración del entorno"}

1. Desde el menú en la parte superior del laboratorio, haz clic en la pestaña **Terminal** en la parte superior derecha de la ventana mostrada en el número 1 de la captura de pantalla proporcionada, y luego haz clic en **Nuevo Terminal** como se muestra en el número 2.

	![SN screenshot](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/terminal.png)

2. Ahora, escribe el siguiente comando en el terminal para clonar la plantilla base para esta aplicación de React y presiona Enter.

```html
git clone https://github.com/ibm-developer-skills-network/ecommerce_rtk.git
```


3. El comando anterior creará una carpeta, \"ecommerce_rtk\" dentro de la carpeta \"Project\". Puedes ver la estructura en la captura de pantalla.

	![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/X01BbHmtDw5cAuy0pTFp6Q/rtk-structure.png)

4. A continuación, debes asegurarte de que la ruta de tu terminal tenga la carpeta clonada para realizar ciertas operaciones en esta aplicación de React. Usa el siguiente comando para navegar a la carpeta **ecommerce_rtk** en la terminal.

	```html
	cd ecommerce_rtk
	```
5. Para asegurarte de que el código que has clonado funciona correctamente, debes realizar los siguientes pasos:
	- Escribe el comando dado en la terminal y presiona Enter. Este comando instalará todos los paquetes necesarios para ejecutar la aplicación.

		```html
		npm install
		```
	- Luego ejecuta el siguiente comando para ejecutar la aplicación y esto te proporcionará el número de puerto 4173.

		```html
		npm run preview
		```

6. Para ver tu aplicación de React, haz clic en el ícono de Skills Network a la izquierda (consulta el número 1). Esta acción abrirá la **SKILLS NETWORK TOOLBOX**. A continuación, haz clic en **Launch Application** (consulta el número 2). Ingresa el número de puerto **4173** en **Application Port** (consulta el número 3) y haz clic en ![arrow pointing out of the right side of a box](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/6.png).

	![Launch Your Application](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/5_Launch.png)

7. La salida se mostrará como se indica en la captura de pantalla proporcionada.
	![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/5-57bz14NGa1QF6YKr2KVA/rtk-first-output.png)

::page{title="Paso 2: Implementación del componente ProductList"}

1. A continuación, navega al archivo **ProductList.jsx** ubicado en la carpeta **Components** del directorio **src** en tu carpeta clonada **ecommerce_rtk**.

2. La estructura básica de este componente será como se muestra en la captura de pantalla.

	![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/5yRpWWUOxjU5etJTyoNBhg/rtk-product--first.png)
 	

3. Ahora necesitas mostrar la lista de productos en el frontend. Para esto, debes aplicar el método map dentro de la etiqueta `<ul>` con el nombre de clase \"product-list-items\".

```javascript
{products.map(product => (
  <li key={product.id} className="product-list-item">
  <span>{product.name} - ${product.price}</span>
  <button>
    Add to Cart
  </button>
  </li>
))}
```


4. Detén la ejecución de la aplicación React en la terminal realizando `ctrl+c` para salir. Luego, escribe el comando dado en la terminal y presiona Enter.

	```javascript
	npm run preview
	```
5. Verifica la salida y se mostrará como se indica en la captura de pantalla dada.

![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/9lpO_sboQbR8R4FmQudMNg/rtk-product--second.png)

::page{title="Paso 3: Implementar la lógica de Redux"}

1. Necesitas aplicar la lógica para el toolkit de Redux para asegurar que cuando hagas clic en el botón Agregar al carrito para añadir un producto al carrito, la información de la cantidad de producto que ingresaste esté disponible globalmente para cualquier componente.

2. Ahora navega al archivo **CartSlice.jsx** ubicado en la carpeta **Components** del directorio **src** en tu carpeta clonada **ecommerce_rtk**.

3. Verás la estructura como se indica a continuación:

```javascript
const CartSlice = ({
 
});

```


4. Primero, inicializa un array vacío llamado **cartItems** fuera de **CartSlice**.

```javascript
const initialState = {
  cartItems: [],
};
```


5. Ahora inicializa **CartSlice** con una función **createSlice** de Redux Toolkit. Necesitas instalar `@reduxjs/toolkit` y `react-redux` como un módulo de terceros. Para este laboratorio, no necesitas instalarlo por separado ya que ya está proporcionado en el archivo `package.json` y **createSlice** es una función utilitaria proporcionada por Redux Toolkit, una biblioteca construida sobre Redux. Simplifica el proceso de creación de slices de Redux, que son porciones del estado de Redux, junto con los creadores de acciones y reductores asociados.

```javascript
const CartSlice = createSlice({
	
});
```


6. Asegúrate de que **createSlice** se importe en la parte superior de este componente.

```javascript
import { createSlice } from '@reduxjs/toolkit';
```


::page{title="Paso 4: Creación de acciones y reductores"}

1. Creación de Slice:
	- Llamas a **createSlice** con un objeto que contiene opciones de configuración para tu slice.
	- Las opciones de configuración incluyen:
		- name: Un valor de cadena que representa el nombre de tu slice. Se utiliza internamente por Redux Toolkit para la prefijación de tipos de acción y otros propósitos.
		- initialState: Un objeto que representa el estado inicial de tu slice.
		- reducers: Un objeto que contiene funciones reductoras. Cada par clave-valor representa un único reductor, donde la clave es el nombre de la acción y el valor es la función reductora.

			```javascript
			const CartSlice = createSlice({
			  name: 'cart',
			  initialState,
			  reducers: {
			  }
			});
			```

::page{title="Paso 5: Creación de reducers y exportación de acciones"}

1. Dentro del objeto **reducer**, necesitas crear cinco funciones, de las cuales dos se utilizan para manejar la adición y eliminación de productos en el carrito de compras, una para limpiar todos los artículos de una vez, y las otras dos son para aumentar y disminuir la cantidad.
	- `addItemToCart`:
		- Esta función reducer maneja la acción de agregar un artículo al carrito.
		- Toma dos parámetros: **state** (estado actual de la parte) y **action** (la acción despachada que contiene la carga útil).
		- Primero verifica si el artículo ya existe en el carrito buscando su ID dentro de **state.cartItems**.
		- Si el artículo existe (**existingItem** es verdadero), incrementa la cantidad del artículo existente en el carrito en 1.
		- Si el artículo no existe en el carrito, agrega el artículo al array **cartItems** con una cantidad de 1.
		```javascript
		addItemToCart(state, action) {
			  const existingItem = state.cartItems.find(item => item.id === action.payload.id);
			  if (existingItem) {
				existingItem.quantity += 1;
			  } else {
				state.cartItems.push({ ...action.payload, quantity: 1 });
			  }
			},
		```
	- `removeItemFromCart`:
		- Esta función reducer maneja la acción de eliminar un artículo del carrito.
		- Toma dos parámetros: **state** y **action**.
		- Actualiza el array **cartItems** filtrando el artículo con el ID proporcionado en la **carga útil de la acción**.
			```javascript
			removeItemFromCart(state, action) {
				  state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
				},
			```
	- `clearCart`:
		- Esta función reducer maneja la acción de limpiar todo el carrito.
		- Toma solo el parámetro de estado.
		- Establece el array **cartItems** como un array vacío, limpiando efectivamente todos los artículos del carrito.
		```javascript
		clearCart(state) {
			  state.cartItems = [];
			},
		```
	- `increaseItemQuantity`:
		- Esta función reducer maneja la acción de aumentar la cantidad de un artículo específico en el carrito.
		- Toma dos parámetros: **state** y **action**.
			- `state:` Esto representa el estado actual de la tienda Redux. Típicamente incluye los datos relevantes para la aplicación.
			- `action:` Este es un objeto que describe la acción que ocurrió. Las acciones de Redux son objetos de JavaScript simples que deben tener una propiedad de tipo que indique el tipo de acción que se está realizando. Además, pueden contener datos adicionales necesarios para llevar a cabo la acción. En este caso, action.payload probablemente contiene el identificador (id) del artículo cuya cantidad necesita ser aumentada.

		- La lógica de la función:
			- Encuentra el artículo en el carrito de compras cuyo identificador (id) coincide con el identificador pasado en la carga útil de la acción.

			- Si se encuentra el artículo (itemToIncrease no es indefinido), incrementa la propiedad de cantidad de ese artículo en 1.
			```javascript
			increaseItemQuantity(state, action) {
				  const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
				  if (itemToIncrease) {
					itemToIncrease.quantity += 1;
				  }
				},
			```
	- `decreaseItemQuantity`:
		- Esta función reducer maneja la acción de disminuir la cantidad de un artículo específico en el carrito.
		- Toma dos parámetros: **state** y **action**.
			- state: Esto representa el estado actual de la tienda Redux, típicamente conteniendo todos los datos relevantes para la aplicación.

			- action: Similar a la función anterior, es un objeto que describe la acción que se está realizando. Se espera que tenga una propiedad de tipo que indique el tipo de acción y puede incluir datos adicionales necesarios para llevar a cabo la acción. Aquí, action.payload probablemente contiene el identificador (id) del artículo cuya cantidad necesita ser disminuida.

		- La lógica de la función:

			- Intenta encontrar el artículo en el carrito de compras cuyo identificador (id) coincide con el identificador proporcionado en la carga útil de la acción.

			- Si se encuentra el artículo (itemToDecrease no es indefinido) y su cantidad es mayor que 1, disminuye la propiedad de cantidad de ese artículo en 1.


			```javascript
			decreaseItemQuantity(state, action) {
				  const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
				  if (itemToDecrease && itemToDecrease.quantity > 1) {
					itemToDecrease.quantity -= 1;
				  }
				},
			```
2. Exportando Creadores de Acciones y Reducer:
	- **createSlice** devuelve un objeto que contiene los creadores de acciones generados y la función reducer.
	- Luego puedes exportar estos creadores de acciones y la función reducer para usarlos en la configuración de tu tienda Redux y en toda tu aplicación.
	
		```javascript
		export const {
		  addItemToCart,
		  removeItemFromCart,
		  clearCart,
		  increaseItemQuantity,
		  decreaseItemQuantity,
		} = CartSlice.actions;
		export default CartSlice.reducer;
		```
	 Puedes incluir el código anterior al final del componente **CartSlice**.

::page{title="Paso 6: Crear el archivo store.js"}

1. A continuación, crea un archivo **store.js**.
2. Selecciona la carpeta **src** y haz clic derecho en la carpeta. Luego selecciona **Nuevo archivo** y escribe el nombre como **store.js**.

3. Dentro de este archivo realiza las siguientes operaciones:
	- Importar **configureStore** y **Reducer**:
		- El código importa la función **configureStore** de @**reduxjs/toolkit**, que se utiliza para crear la tienda Redux.
		- También importa la función del reductor, **cartReducer**, del archivo **CartSlice**, asumiendo que tienes un slice para gestionar el estado del carrito de compras definido en el archivo.
	- Configuración de la tienda:
		- **configureStore** se invoca con un objeto que contiene las opciones de configuración de la tienda.
		- La propiedad reducer se especifica como un objeto donde cada clave representa un slice de estado, y cada valor representa la función del reductor correspondiente.
		- En este caso, el **cartReducer** está asociado con el slice de estado del carrito. Esto significa que el estado gestionado por el **cartReducer** se almacenará bajo la clave cart en la tienda Redux.
	- Otras opciones de configuración de la tienda:
		- Se pueden incluir opciones adicionales de configuración de la tienda en el objeto pasado a **configureStore**.
		- Por ejemplo, puedes incluir middleware, mejoradores u otras opciones como la configuración de devtools.
   - Exportando la tienda:
		- Finalmente, la tienda Redux configurada (store) se exporta del módulo, haciéndola disponible para su uso en toda la aplicación.

			```javascript
			import { configureStore } from '@reduxjs/toolkit';
			import cartReducer from './Components/CartSlice';
			const store = configureStore({
			  reducer: {
				cart: cartReducer,
			  },
			});

			export default store;
			```

4. Ahora, para hacer que estos datos estén disponibles globalmente para cualquier componente en la aplicación, necesitas importar los datos en el componente **main.jsx**. Para ello, navega al archivo **main.jsx** y pega el siguiente código en el archivo.

	```javascript
	import React from 'react'
	import ReactDOM from 'react-dom/client'
	import App from './App.jsx'
	import './index.css'
	import { Provider } from 'react-redux'
	import store from './store.js'
	ReactDOM.createRoot(document.getElementById('root')).render(
	  <React.StrictMode>
	 <Provider store={store}>
		<App />
		</Provider>
	  </React.StrictMode>,
	)

	```

	- En el código anterior, el archivo **store.js** se importa dentro de `<React.StrictMode>`. `<Provider>` de react-redux suministra la tienda Redux a todos los componentes dentro de su jerarquía al pasar la tienda como props. Esto permite que los componentes, incluido `<App />`, accedan e interactúen con la tienda Redux para la gestión del estado.

::page{title="Paso 7: Agregar datos de producto y tienda globalmente"}

1. Dentro del componente **ProductList**, inicializa **dispatch** y utiliza **useSelector** para acceder a los cartItems desde la tienda Redux:

	```javascript
	const dispatch = useDispatch();
	const cartItems = useSelector(state => state.cart.cartItems); // Obtener artículos del carrito globalmente
	```
- Asegúrate de haber incluido la declaración dada en la parte superior del componente.

	```javascript
	import { useDispatch, useSelector } from 'react-redux';
	import { addItemToCart } from './CartSlice';// Acción para agregar producto al carrito
	```
	En el código anterior, **addItemToCart** se utiliza para obtener el detalle de la función del reductor para despachar qué producto se agrega al carrito en **store.js**.

2. En el componente **ProductList**, implementa la funcionalidad para agregar los datos al carrito y deshabilitar el botón "Agregar al carrito" utilizando el estado global de Redux. En la etiqueta `<button>` llama a una función **handleAddToCart** para el evento **onClick**.

```javascript
<button
  className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
  onClick={() => handleAddToCart(product)}
  disabled={cartItems.some(item => item.id === product.id)} // Disable if already in cart
>
  {cartItems.some(item => item.id === product.id) ? 'Added' : 'Add to Cart'}
</button>

```


- Este botón, al hacer clic, invoca la función `handleAddToCart` con el producto como argumento.
	- La apariencia del botón se determina dinámicamente según si el producto está incluido en el array `disabledProducts`, lo que desactiva el botón si el producto está en el array o si el producto ha sido añadido.
	- Esta funcionalidad evita agregar artículos duplicados al carrito y proporciona retroalimentación visual al estilizar el botón como deshabilitado cuando es necesario.

3. Inicializa una función llamada **handleAddToCart**.

```javascript
const handleAddToCart = product => {
    dispatch(addItemToCart(product));// Add product to cart
  };
```


<details>
	<summary>Haz clic aquí para el código de ProductList.jsx</summary>
	
	
	import React from 'react';
	import './ProductList.css'; 
	import { useDispatch, useSelector } from 'react-redux';
	import { addItemToCart } from './CartSlice';// Acción para agregar producto al carrito

	const ProductList = () => {
		const dispatch = useDispatch();
		const cartItems = useSelector(state => state.cart.cartItems); // Obtener artículos del carrito globalmente

	  const products = [
		{ id: 1, name: 'Producto A', price: 60 },
		{ id: 2, name: 'Producto B', price: 75 },
		{ id: 3, name: 'Producto C', price: 30 },
	  ];

	  const handleAddToCart = product => {
		dispatch(addItemToCart(product));// Agregar producto al carrito
	  };

	  return (
		<div className="product-list">
		  <h2 className="product-list-title">Productos</h2>
		  <ul className="product-list-items">
			{products.map(product => (
				<li key={product.id} className="product-list-item">
				<span>{product.name} - ${product.price}</span>
				<button
					className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
					onClick={() => handleAddToCart(product)}
					disabled={cartItems.some(item => item.id === product.id)} // Deshabilitar si ya está en el carrito
				  >
					{cartItems.some(item => item.id === product.id) ? 'Agregado' : 'Agregar al Carrito'}
				</button>
				</li>
			))}

		  </ul>
		</div>
	  );
	};

	export default ProductList;


</details>

::page{title="Paso 8: Mostrar productos en el carrito de compras"}

1. Ahora en el componente **ShoppingCart.jsx**, crearás la lógica que muestra los artículos que el usuario ha agregado al carrito de compras. Utiliza una herramienta especial llamada Redux para gestionar el carrito y mantener un seguimiento de lo que el usuario está comprando. El componente permite al usuario ver los artículos en el carrito, sus precios y cuántos de cada artículo ha agregado. Los usuarios también pueden eliminar artículos del carrito o cambiar la cantidad de cada artículo. Es como tener una cesta de compras virtual que ayuda al usuario a llevar un registro de lo que comprará.

2. Para implementar esto, navega al componente **ShoppingCart.jsx** en la carpeta src.

3. La estructura básica de este componente será como se muestra en la captura de pantalla.

	![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/XSPBKGRffoacnk17YCyAuw/rtk-product--shoppingCart.png)

4. Implementa las funcionalidades dadas:-
	- *Importar*: El componente importa las dependencias necesarias: React, useDispatch, useSelector de react-redux, y creadores de acciones (removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity) de CartSlice.
		```javascript
		import { useDispatch, useSelector } from 'react-redux';
		import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Suponiendo que tienes creadores de acciones para aumentar y disminuir la cantidad de artículos
		```
	- *Componente Funcional*: El componente ShoppingCart es un componente funcional declarado utilizando la sintaxis de función de flecha.
	- *Hooks de Redux*: El componente utiliza los hooks **useDispatch** y **useSelector** de react-redux para interactuar con la tienda de Redux. **useDispatch** se utiliza para despachar acciones, y **useSelector** se utiliza para extraer datos de la tienda de Redux.
	- *Recuperación de Estado*: La variable **cartItems** recupera el array de artículos del estado de la tienda de Redux seleccionando **state.cart.cartItems**. **totalAmount** calcula el monto total iterando a través de **cartItems** y multiplicando el precio de cada artículo por su cantidad, luego sumándolos.
		```javascript
		const dispatch = useDispatch();
		  const cartItems = useSelector(state => state.cart.cartItems);
		  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
		```
		Incluye el código anterior antes del return del componente funcional.
	- *Manejadores de Eventos*: **handleRemoveItem** despacha la acción **removeItemFromCart** con el ID del artículo a eliminar. **handleClearCart** despacha la acción **clearCart** para limpiar todos los artículos del carrito. **handleIncreaseQuantity** despacha la acción **increaseItemQuantity** para aumentar la cantidad de un artículo específico. **handleDecreaseQuantity** despacha la acción **decreaseItemQuantity** para disminuir la cantidad de un artículo específico.
		```javascript
		const handleRemoveItem = itemId => {
			dispatch(removeItemFromCart(itemId));
		  };

		  const handleClearCart = () => {
			dispatch(clearCart());
		  };

		  const handleIncreaseQuantity = itemId => {
			dispatch(increaseItemQuantity(itemId));
		  };

		  const handleDecreaseQuantity = itemId => {
			dispatch(decreaseItemQuantity(itemId));
		  };
		```
	- *Renderizado*: El componente renderiza una interfaz de carrito de compras, listando cada artículo en el carrito dentro de una etiqueta `<ul>` con la clase **cart-items** con su nombre, precio, controles de cantidad (botones para aumentar o disminuir la cantidad) y un botón de eliminar para cada artículo. El monto total se muestra debajo del carrito si es mayor que 0.
		```javascript
		{cartItems.map(item => (
					<li key={item.id} className="cart-item">
					  <span>{item.name} - ${item.price}</span>
					  <div className="quantity-controls">
						<button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
						<span> {item.quantity}</span>
						<button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
					  </div>
					  <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
					</li>
				  ))}
		```
	- *Controles de Botón*: Se proporcionan controles de cantidad (botones - y +) para disminuir o aumentar la cantidad de cada artículo. Hacer clic en el botón - invoca **handleDecreaseQuantity** con el ID del artículo. Hacer clic en el botón + invoca **handleIncreaseQuantity** con el ID del artículo.
	
	- Se proporciona un botón etiquetado **Clear Cart** para eliminar todos los artículos del carrito cuando se hace clic. Esto activa la función handleClearCart.
	
		```javascript
	    <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
		```
		- si se han agregado productos, entonces solo se muestra totalAmount, de lo contrario, no se renderiza nada.
		```javascript
		<div>{totalAmount ? <div>'El monto total es {totalAmount}</div> : ''}</div>
		```

		- Desglosemos:

			- El elemento div más externo contiene una expresión dentro de llaves {}.

			- Dentro de la expresión, hay un operador ternario (condición ? expresión1 : expresión2) utilizado para el renderizado condicional en JSX.

			- Si totalAmount es verdadero, se renderiza un elemento div anidado. Este div anidado contiene una cadena 'El monto total es {totalAmount}', donde {totalAmount} se pretende que sea el valor de la variable totalAmount interpolado en la cadena.

			- Si totalAmount es falso, se renderiza una cadena vacía.

			- El resultado de la operación ternaria se renderiza dentro del elemento div externo.

Haz clic a continuación para ver el código de **CartSlice.jsx**.


<details>
	<summary>Haz clic aquí para el código de CartSlice.jsx</summary>
	
	import { createSlice } from '@reduxjs/toolkit';
    const initialState = {
        cartItems: [],
      };
    const CartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            addItemToCart(state, action) {
                const existingItem = state.cartItems.find(item => item.id === action.payload.id);
                if (existingItem) {
                  existingItem.quantity += 1;
                } else {
                  state.cartItems.push({ ...action.payload, quantity: 1 });
                }
              },
              removeItemFromCart(state, action) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
              },
              clearCart(state) {
                state.cartItems = [];
              },
              increaseItemQuantity(state, action) {
                const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
                if (itemToIncrease) {
                  itemToIncrease.quantity += 1;
                }
              },
              decreaseItemQuantity(state, action) {
                const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
                if (itemToDecrease && itemToDecrease.quantity > 1) {
                  itemToDecrease.quantity -= 1;
                }
              },
        }
    });
    export const {
        addItemToCart,
        removeItemFromCart,
        clearCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      } = CartSlice.actions;
      export default CartSlice.reducer;
    
</details>

Haz clic a continuación para ver el código del componente **ShoppingCart.jsx**.

<details>
	<summary> Haz clic aquí para el código de ShoppingCart.jsx</summary>

	
	import React from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Suponiendo que tienes creadores de acciones para aumentar y disminuir la cantidad de artículos
    import './ShoppingCart.css'; // Importar archivo CSS para estilos específicos del componente
    
    const ShoppingCart = () => {
      const dispatch = useDispatch();
      const cartItems = useSelector(state => state.cart.cartItems);
      const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
      const handleRemoveItem = itemId => {
        dispatch(removeItemFromCart(itemId));
      };
    
      const handleClearCart = () => {
        dispatch(clearCart());
      };
    
      const handleIncreaseQuantity = itemId => {
        dispatch(increaseItemQuantity(itemId));
      };
    
      const handleDecreaseQuantity = itemId => {
        dispatch(decreaseItemQuantity(itemId));
      };
    
      return (
        <>
          <div className="shopping-cart">
            <h2 className="shopping-cart-title">Carrito de Compras</h2>
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <span>{item.name} - ${item.price}</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    <span> {item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  </div>
                  <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <button className="clear-cart-btn" onClick={handleClearCart}>Limpiar Carrito</button>
          </div>
          <div>{totalAmount ? <div>'El monto total es {totalAmount}</div> : ''}</div>
        </>
      );
    };
    
    export default ShoppingCart;
</details>

::page{title="Paso 9: Verifica la salida"}


1. Detén la ejecución de la aplicación React en la terminal presionando `ctrl+c` para salir.

2. Luego, escribe el comando dado en la terminal y presiona Enter.
	```javascript
	npm run preview
	```

3. Para ver tu aplicación React, actualiza la página web ya abierta de la aplicación React en tu navegador. Si no está abierta, haz clic en el ícono de Skills Network en el panel izquierdo. Esta acción abrirá la \"SKILLS NETWORK TOOLBOX.\" A continuación, selecciona \"Launch Application\". Ingresa el número de puerto **4173** en \"Application Port\" y haz clic en ![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/6.png).

4. La salida se mostrará según la captura de pantalla dada después de agregar productos al carrito.
![rtk-product--shoppingCart-1stProdAdded.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/PiVoZL37VGAoaxMwG5IaEw/rtk-product--shoppingCart-1stProdAdded.png)

5. Agrega un producto más y verás el cambio en el monto total.
![rtk-product--shoppingCart-2ndProdAdded!.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/eg_di5UxgWkP5qG2gJ-kmw/rtk-product--shoppingCart-2ndProdAdded-.png)
> Ten en cuenta que el botón `Add to Cart` solo se puede usar una vez para agregar un producto. Después de esto, se desactivará y no añadirá el mismo producto si haces clic en él nuevamente.

***Nota***- Para ver los últimos cambios, necesitas ejecutar `npm run preview` nuevamente en la terminal.

**¡Felicidades! Has creado una aplicación React para la representación de datos de comercio electrónico!**

::page{title="Paso 10: Tarea de Práctica"}

1. Ahora en este ejercicio de práctica crearás un componente más donde implementarás el concepto de super moneda.
	- Las super monedas son una forma de puntos de lealtad o recompensa ofrecidos por algunas plataformas de comercio electrónico o minoristas como parte de sus programas de lealtad para clientes. Para ver cuánto ha ganado el usuario en función del monto total del carrito, necesitas crear esta funcionalidad.
2. Para esto, crea un componente de Super Moneda llamado `SuperCoin.jsx` haciendo clic derecho en la carpeta **Components** después de seleccionarla.

3. Ahora inicializa la variable **superCoins** utilizando el hook **useState** junto con su función correspondiente antes del retorno del componente.

	Pista: usa el hook **useState** para inicializar la variable con `0`.

<details>
	<summary>Haz clic aquí para ver la solución de muestra</summary>

```js
const [superCoins, setSuperCoins] = useState(0);
```


</details>

4. Ahora necesitas recuperar los cartItems del slice del carrito del estado de la tienda Redux para obtener la cantidad total de productos utilizando el hook useSelector.

	Pista: usa el hook **useSelector** para obtener el estado de los artículos del carrito.

<details>
	<summary>Haz clic aquí para ver la solución de muestra</summary>
	


```js
const cartItems = useSelector(state => state.cart.cartItems);
```


</details>

5. A continuación, calcula el monto total sumando el producto del precio y la cantidad de cada artículo en la `cartItems` array utilizando el método **reduce**.

	Pista: usa el hook **useSelector** para obtener el estado de los artículos del carrito.

<details>
	<summary>Haz clic aquí para ver la solución de muestra</summary>

```js
const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
```


</details>

6. Ahora necesitas actualizar el estado de `superCoins` basado en el totalAmount: configurándolo en 10, 20 o 30 monedas para diferentes rangos del total, y en 0 si el monto es inferior a 100. Este efecto se ejecuta cada vez que cambia el totalAmount.

	Pista: usa el hook **useEffect** para actualizar el estado de superCoins.

<details>
<summary>Haz clic aquí para ver la solución de ejemplo</summary>

```js
useEffect(() => {
  if (totalAmount >= 100 && totalAmount < 200) {
    setSuperCoins(10);
  } else if (totalAmount >= 200 && totalAmount < 300) {
    setSuperCoins(20);
  } else if (totalAmount >= 300) {
    setSuperCoins(30);
  } else {
    setSuperCoins(0);
  }
}, [totalAmount]);
```


</details>

	
7. Ahora crea un `<div>` dentro del retorno de la función componente utilizando la sintaxis jsx e integra la variable de estado `superCoins` dentro de la etiqueta `<div>`.
	
	Pista: Usa {} para incluir la variable superCoins
<details>
	<summary>Haz clic aquí para ver la solución de ejemplo</summary>

```
<div className="super-coins" style={{textAlign:'center'}}>
  <h2 className="super-coins-title">Super Coins</h2>
  <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
</div>
```


</details>

8. Conecta el componente a la aplicación importando el componente SuperCoin en `App.jsx` - el archivo principal de la aplicación y incluye el componente `<SuperCoin />` dentro del JSX para que se renderice en la página.

<details>
	<summary>Haz clic aquí para ver la solución de ejemplo</summary>

```
// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import './App.css'
import SuperCoin from './Components/SuperCoin'
const App = () => {
  return (

      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
        <SuperCoin />
      </div>

  );
};
```


</details>
	
9. Verifica la salida
	- Guarda los cambios y vuelve a ejecutar la aplicación.
	- Agrega el producto al carrito y cuando llegue a un monto de **$100** se mostrará que has ganado **10 Super Coins**.
	
![image (14).png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/gWMpMQy2XCk9Ij9xwAWKcQ/image%20-14-.png)

10. Puedes aumentar el monto y, dependiendo de la lógica, también aumentará el valor de los supercoins.

::page{title="Conclusión"}

**¡Felicidades! Has creado una aplicación de E-Commerce en React!**

En este laboratorio, has:
- Implementado Redux Toolkit para la gestión de estado universal en toda la aplicación.
- Desarrollado una plataforma básica de comercio electrónico utilizando React y Redux.
- Presentado una lista de productos con un botón "Agregar al Carrito" para cada artículo.
- Permitido a los usuarios ver y gestionar los elementos añadidos al carrito, incluyendo la eliminación de artículos.
- Utilizado los hooks useDispatch y useSelector para interactuar con Redux, proporcionando accesibilidad a datos globales.
- Asegurado una gestión de estado fluida en toda la aplicación, mejorando la experiencia del usuario y la escalabilidad.

## Author(s)
Richa Arora
<center><footer>&#169; IBM Corporation. Todos los derechos reservados.</footer></center>