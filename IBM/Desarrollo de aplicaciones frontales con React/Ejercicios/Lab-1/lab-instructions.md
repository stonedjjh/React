::page{title="Laboratorio: Aplicación de Calificación de Contenido para Gustar o No Gustar Contenido"}


<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-WD0231EN-SkillsNetwork/IDSN-logo.png" width="200" alt="logo de cognitiveclass.ai"  />

##

**Tiempo estimado necesario:** 40 minutos

## Lo que aprenderás

En este laboratorio, crearás un componente de React llamado 'ContentRating' donde el componente permitirá a los usuarios calificar el material haciendo clic en los botones de 'me gusta' o 'no me gusta'. Cuando el componente se renderiza por primera vez, tanto el conteo de 'me gusta' como el de 'no me gusta' se establecen en cero. Crearás un método que cambia el estado para añadir uno al número de 'me gusta' cuando un usuario selecciona el botón de 'me gusta'. De la misma manera, al hacer clic en el botón de 'no me gusta', el método añadirá uno al número de 'no me gusta'. Esta acción permite a los usuarios calificar el contenido de una manera interactiva utilizando el botón de 'me gusta' o 'no me gusta' y proporciona retroalimentación a los creadores de contenido.

## Objetivos de aprendizaje

Después de completar este laboratorio, podrás:

- Manejar el estado del componente en React utilizando variables de estado para llevar un registro del número de 'me gusta' y 'no me gusta'

- Ejecutar el manejo de eventos cuando un usuario selecciona un botón para gustar o no gustar contenido

- Crear componentes y reutilizarlos construyendo un componente Toggle que incluya tanto las características de contenido como de calificación

- Crear una interfaz de usuario interactiva con React que pueda manejar el estado y los eventos del usuario y renderizar elementos de UI complejos


## Requisitos previos

- Conocimientos básicos de HTML
- Conocimientos intermedios de JavaScript
- Conocimientos básicos de componentes de clase en React y gestión de estado

::page{title="Paso 1: Configuración del entorno"}

1. Desde el menú en la parte superior del laboratorio, haz clic en la pestaña **Terminal** en la parte superior derecha de la ventana mostrada en el número 1 de la captura de pantalla proporcionada, y luego haz clic en **Nuevo Terminal** como se muestra en el número 2.

	![SN screenshot](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/terminal.png)

2. Ahora, escribe el siguiente comando en el terminal para clonar la plantilla base para esta aplicación React y selecciona Enter.

	```html
	git clone https://github.com/ibm-developer-skills-network/content_rating.git
	```

 <!-- git clone https://github.com/RichaArora1989/content_rating.git -->


3. El comando anterior creará una carpeta, \"content_rating\" dentro de la carpeta \"Project\", y puedes ver la estructura en la captura de pantalla. Esto incluye el componente de clase llamado \"ContentRating.jsx\" y un archivo CSS llamado \"ContentRating.css\".

	![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/structure_2.png)

4. A continuación, necesitas entrar en la carpeta \"content_rating\" en la ruta del terminal. Para esto, debes escribir el comando dado en el terminal. Esta acción establecerá la ruta de tu terminal para ejecutar la aplicación React dentro de la carpeta content_rating.
	```html
	cd content_rating
	```
5. Para asegurarte de que el código que has clonado está funcionando correctamente, necesitas realizar los siguientes pasos:
	- Escribe el comando dado en el terminal y presiona Enter. Este comando instalará todos los paquetes necesarios para ejecutar la aplicación.

		```html
		npm install
		```
	- Luego, realiza el siguiente comando para ejecutar la aplicación, proporcionándote el número de puerto 4173.

		```html
		npm run preview
		```

6. Para ver tu aplicación React, haz clic en el icono de Skills Network a la izquierda (consulta el número 1). Esta acción abrirá la **HERRAMIENTA DE SKILLS NETWORK**. A continuación, haz clic en **Iniciar Aplicación** (consulta el número 2). Ingresa el número de puerto **4173** en **Puerto de Aplicación** (consulta el número 3) y haz clic en ![arrow pointing out of the right side of a box](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/6.png).

	![Launch Your Application](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/5_Launch.png)

7. La salida se mostrará como se indica en la captura de pantalla proporcionada.
	![Text Content Rating](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/first_output_2.png)

8. Puedes preservar tu trabajo más reciente en este laboratorio agregando, confirmando y enviándolo a tu repositorio de GitHub. Esto asegura que incluso si no estás trabajando en la tarea de manera continua, tu progreso se guardará, permitiéndote reanudar desde donde lo dejaste.

*Nota: El paso 8 es opcional.*

::page{title="Paso 2: Configurando el estado inicial"}

1. A continuación, abre el componente de calificación navegando al componente **ContentRating.jsx** ubicado en la carpeta **Components** del directorio **src** en tu carpeta clonada **content_rating**.

2. La estructura básica de este componente será como se muestra en la captura de pantalla.

	![react ss.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/ut8K_HZRIrwryJ8sObrxZg/react%20ss.png)

3. Necesitas inicializar los estados para la cantidad de "me gusta" y "no me gusta" dentro del constructor del componente actual después del método **super()**. Crea el objeto **this.state** e inicializa los valores de "me gusta" y "no me gusta" a `0` para el estado inicial.

	```javascript
	 this.state = {
		  likes: 0,
		  dislikes: 0
		};
	```

4. Puedes eliminar el elemento `<h1>Calificación de Contenido</h1>` y crear la etiqueta `div` con el nombre de clase **content-rating** dentro de `<>...</>` bajo `return` del componente de clase con la ayuda del comando dado.

	```javascript
	<div className='content-rating'></div>
	```
	Este `div` actuará como el div padre para otras etiquetas. Incluye el comando dado dentro de los fragmentos.
5. Luego crea una etiqueta `<p> Agrega texto aquí</p>` dentro de la etiqueta `div` con algún contenido relacionado con cualquier tema que los usuarios puedan gustar o no gustar.

	```javascript
	<div className='content-rating'>
		<p>
		//Agrega texto aquí
		</p>
	</div>
	```

6. Crea una etiqueta `<div>` más con el nombre de clase **rating-buttons** después de la etiqueta de párrafo dentro de la etiqueta div padre.

	```javascript
	<div className='content-rating'>
		<p>
		//Agrega texto aquí
        </p>
        <div className='rating-buttons'></div>
	</div>
	```
7. Crea dos botones dentro del div con el nombre de clase **rating-buttons**. Uno para "me gusta" y otro para "no me gusta". Luego, muestra los valores de las variables como texto dentro de estos botones, que has inicializado bajo el objeto `this.state`.

	```javascript
		<div className='content-rating'>
			<p>
			---Agrega texto aquí---
			</p>
			<div className='rating-buttons'>
			<button className="like-button">
				Me gusta ({this.state.likes})
			  </button>
			  <button className="dislike-button">
				No me gusta ({this.state.dislikes})
			  </button>
			</div>
		</div>
	```

::page{title="Paso 3: Crear manejo de eventos"}

1. En este paso, crearás eventos que manejarán los clics realizados en los botones de me gusta y no me gusta.

2. Crea dos manejadores de eventos dentro del objeto `this.state` con el nombre **handleLike** para el botón de me gusta y **handleDislike** para el botón de no me gusta.
	```javascript
	 constructor() {
		super();
		this.state = {
		  likes: 0,
		  dislikes: 0,
		  handleLike:() => {

		  },

		  handleDislike:() => {

		  }
	  }
		}
	```
3. Ahora, en estos dos manejadores de eventos, escribe la lógica del código para aumentar y disminuir los valores de los botones de me gusta y no me gusta.

	```javascript
	 constructor() {
		super();
		this.state = {
		  likes: 0,
		  dislikes: 0,
		  handleLike:() => {
			this.setState((prevState) => ({
			  likes: prevState.likes + 1
			}));
		  },

		  handleDislike:() => {
			this.setState((prevState) => ({
			  dislikes: prevState.dislikes + 1
			}));
		  }
	  }
		}

	```

	- En el código anterior, las funciones de flecha, handleLike y handleDislike, se llaman cuando el usuario hace clic en el botón de "me gusta" o "no me gusta", respectivamente.
	- Las funciones utilizan el método setState para actualizar el estado del componente. Dentro de setState, se accede al estado anterior (prevState), que contiene el estado previo del componente antes de la actualización.
	- Luego, el conteo de me gusta o no me gusta se incrementa en uno y se establece como el nuevo valor del estado.
	- Esto asegura que cada clic en el botón actualice con precisión el conteo correspondiente en el estado del componente.

::page{title="Paso 4: Llamar a los controladores de eventos"}

1. Ahora necesitas llamar a estos controladores de eventos utilizando el clic de los botones de me gusta y no me gusta.

2. Para esto, debes usar el evento `onClick` en los botones y llamar a **handleLike** y **handleDislike** en los botones de **Likes** y **Dislikes**, respectivamente, como se muestra en el código dado.

	```javascript
	 <button className="like-button" onClick={this.state.handleLike}>
				Me gusta ({this.state.likes})
			  </button>
			  <button className="dislike-button" onClick={this.state.handleDislike}>
				No me gusta ({this.state.dislikes})
	</button>
	```

::page{title="Paso 5: Verifica la salida"}

1. Ahora detén la ejecución de la aplicación React en la terminal presionando `ctrl+c` para salir.

2. Luego, escribe el comando dado en la terminal y presiona Enter.
	```javascript
	npm run preview
	```

3. Para ver tu aplicación React, actualiza la página web que ya está abierta para la aplicación React en tu navegador. Si no está abierta, haz clic en el ícono de Skills Network en el panel izquierdo. Esta acción abrirá la "SKILLS NETWORK TOOLBOX." A continuación, selecciona "Launch Application". Ingresa el número de puerto **4173** en "Application Port" y haz clic en ![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-CD0210EN-Coursera/images/6.png).

4. La salida se mostrará según la captura de pantalla dada.

	![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/sAfLkFwoe1LOFIQ8-OrrMw/output-like-dislike.png)

 	Esta captura de pantalla muestra el contenido de la biblioteca React. Puedes escribir tu propio contenido dentro de la etiqueta `<p>` en lugar del marcador de posición `//Add text here`. Tu salida se basará en el texto que hayas añadido en lugar del marcador de posición `//Add text here`.

5. Verifica la funcionalidad de los botones de "me gusta" y "no me gusta" haciendo clic en los botones. Si haces clic 5 veces en el botón de **me gusta** y tres veces en el botón de **no me gusta**, se verá según la captura de pantalla dada.

	![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/oaZdYjCLICPAyokCE4UzeQ/like-button.png)

6. Esto representa que este texto recibe 5 me gusta y 3 no me gusta.

7. <details>
<summary>Haz clic aquí para ver la solución completa del ejemplo para "ContentRating.jsx"</summary>


			import React, { Component } from 'react';
			import './ContentRating.css';

			class ContentRating extends Component {
			  constructor() {
				super();
				this.state = {
					likes: 0,
					dislikes: 0,
				  handleLike:() => {
					this.setState((prevState) => ({
						likes: prevState.likes + 1
					  }));
				  },
				  handleDislike:() => {
					this.setState((prevState) => ({
						dislikes: prevState.dislikes + 1
					  }));
				  }
				  };
			  }
			  render() {
				return (
				 <>
				 <h1>Calificación de Contenido de Texto</h1>
				 <div className='content-rating'>
					<p>Texto</p>
					<div className='rating-buttons'>
					<button className="like-button" onClick={this.state.handleLike}>
						Me gusta ({this.state.likes})
					  </button>
					  <button className="dislike-button" onClick={this.state.handleDislike}>
					>No me gusta ({this.state.dislikes})
					  </button>
					</div>

				 </div>
				 </>
				);
			  }
			}

			export default ContentRating;


</details>

8. <details>
<summary>Haz clic aquí para ver la solución completa del ejemplo para el componente padre "App.jsx".</summary>

       import ContentRating from "./Components/ContentRating"
		function App() {
		  return (
		   <>
		  <ContentRating/>
		   </>
		  )
		}
		export default App


</details>

::page{title="Paso 6: Ejercicio Práctico"}

1. En este ejercicio necesitas crear la lógica para calcular el número total de valoraciones combinando tanto los "me gusta" como los "no me gusta" dentro del componente `ContentRating.jsx`.
2. Para esto, necesitas declarar una variable más llamada `totalRatings` dentro de `this.state` e inicializarla con 0.
3. Ahora crea la lógica para calcular el número total de "me gusta" y "no me gusta" para el contenido y almacena el número total en la variable `totalRatings`.

	Pista: Incluye la variable `totalRatings` en ambas funciones de "me gusta" y "no me gusta" mientras incrementas el número total de valoraciones.

<details>
	<summary>Haz clic aquí para ver la respuesta</summary>

			 handleLike: () => {
					this.setState((prevState) => ({
					  likes: prevState.likes + 1,
					  totalRatings: prevState.totalRatings + 1
					}));
				  },
				  handleDislike: () => {
					this.setState((prevState) => ({
					  dislikes: prevState.dislikes + 1,
					  totalRatings: prevState.totalRatings + 1
					}));
				  }
</details>

4. Ahora muestra el total de valoraciones dentro de la sintaxis jsx después de la etiqueta de botones.
Pista: Usa `{}` para mostrar la variable de total de valoraciones usando **this.state**.

<details>
	<summary>Haz clic aquí para ver la respuesta</summary>

        <p>Total Ratings: {this.state.totalRatings}</p>
</details>

5. Verifica la salida ejecutando nuevamente la aplicación en la terminal.

6. La salida, como se muestra en la captura de pantalla proporcionada, mostrará el número total de valoraciones como 9 cuando hay 5 "me gusta" y 4 "no me gusta". Hacer clic en el botón de "me gusta" o "no me gusta" incrementará el total de valoraciones en consecuencia.

	![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/pFmAdz9TR4xttX32Z52JGQ/practice-output-likedislike.png)

7. <details>
<summary>Haz clic aquí para ver la solución completa del ejemplo para "ContentRating.jsx"</summary>


		import React, { Component } from 'react';
		import './ContentRating.css';

		class ContentRating extends Component {
		  constructor() {
			super();
			this.state = {
			  likes: 0,
			  dislikes: 0,
			  totalRatings: 0,
			  handleLike: () => {
				this.setState((prevState) => ({
				  likes: prevState.likes + 1,
				  totalRatings: prevState.totalRatings + 1
				}));
			  },
			  handleDislike: () => {
				this.setState((prevState) => ({
				  dislikes: prevState.dislikes + 1,
				  totalRatings: prevState.totalRatings + 1
				}));
			  }
			};
		  }
		  render() {
			return (
			  <>
				<h1>Valoración de Contenido de Texto</h1>
				<div className='content-rating'>
				  <p>Texto</p>
				  <div className='rating-buttons'>
					<button className="like-button" onClick={this.state.handleLike}>
					  Me gusta ({this.state.likes})
					</button>
					<button className="dislike-button" onClick={this.state.handleDislike}>
					  No me gusta ({this.state.dislikes})
					</button>
				  </div>
				  <p>Total Ratings: {this.state.totalRatings}</p>
				</div>
			  </>
			);
		  }
		}
		export default ContentRating;

</details>


***Nota:***- Para ver los últimos cambios, necesitas ejecutar `npm run preview` nuevamente en la terminal.

**¡Felicidades! Has creado tu segunda aplicación de React para dar valoraciones al contenido!**

::page{title="Conclusión"}


- En este laboratorio, has aprendido cómo configurar y crear variables de estado en el constructor de un componente de clase de React. Las variables de estado permiten que el componente maneje y realice un seguimiento de datos dinámicos como "me gusta" y "no me gusta".

- Has comprendido cómo hacer funciones de flecha en el estado de un componente, que contienen el código para cambiar ciertas variables de estado cuando el usuario realiza alguna acción, como hacer clic en un botón.

- Usando el manejo de eventos, has aprendido a conectar estas funciones de flecha a los eventos onClick en elementos de la interfaz de usuario relacionados en React. Las funciones permiten que el estado cambie dinámicamente según la interacción del usuario.

- También has adquirido la información para agregar datos de estado dinámico a la interfaz de usuario renderizada utilizando la marca JSX. Esto muestra los conteos actuales de me gusta y no me gusta junto con contenido descriptivo, ofreciendo a los usuarios una forma completa de calificar el contenido.


## Author(s)
Richa Arora
## <h3 align="center"> &#169; IBM Corporation. Todos los derechos reservados. <h3/>

<!--
## Changelog

| Date | Version | Changed by | Change Description |
|------|--------|--------|---------|
| 2024-03-28 | 1.1 | Richa Arora| Initial content created |
| 2024-04-01| 1.2 | Anita Narain | ID reviewed |
| 2024-04-01| 1.3 | Mary Stenberg| QA reviewed |
| 2025-04-24| 1.3 | Alima Akhter| Updated few typos |
-->