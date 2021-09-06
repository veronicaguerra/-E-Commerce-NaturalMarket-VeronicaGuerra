##Tienda virtual creada con React

Hola! este proyecto es una tienda virtual creada con la libreria de React y estilizada con React Bootstrap. Es de tipo SPA (single page application), usa Firestore como base de datos. Para mantener el estado del stock localmente y manipular el carrito de compras, se hace uso de "Context"; alli tambien verás funciones que son usadas desde varios componentes.

##

Para iniciar la app necesitas instalar estas dependencias:
\*\* Material-UI web oficial https://material-ui.com/

\*\* React Bootstrap web oficial https://react-bootstrap.netlify.app/

\*\* React Router DOM web oficial https://reactrouter.com/web/guides/quick-start

\*\* Axios web oficial https://axios-http.com/docs/intro

\*\* Firestore web oficial https://firebase.google.com/docs/firestore

### Inicia la app

corre el comando npm start y usalo modo desarrollo, abre [http://localhost:3000] en tu explorador web.

### Rutas, navegación y secciones

- Inicio
  Encontraras el catalogo con todos los productos disponibles en la tienda.

- Categorias
  Descubre los productos de la tienda filtrado por categorias.

- Elige un producto
  Sea a traves de la pagina principal o desde una categoria, vas a entrar a ver el producto que deseas y solo debes hacer click en "añadir al carrito", luego tendras la opcion de manipular las cantidades.

- Ofertas
  Mira en esta seccion todas las ofertas activas al momento.

- Carrito
  Una vez que hayas elegido uno o varios productos, tendras un desglose de la compra.

- Formulario de la compra
  Para completar la compra, deberas llenar un formularios con tus datos personales; luego ese formulario te muestra un boton para finalizar la compra y ¡Listo! la compra estará finalizada y se te entregará el numero de orden para que puedas dar seguimiento.

- Vista con el final de la compra o "check out"
  En esta seccion ya se muestra un resumen de la compra, los datos que dejaste en el formulario y tu numero de orden.

## Notas adicionales

Dentro de cada componente vas a tener comentarios que te guiaran acerca de la funcionalidad del mismo.
