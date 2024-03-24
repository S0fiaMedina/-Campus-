# campusShop

Este es un proyecto de un frontend *eCommerce* que permite visualizar unos de los juegos mas populares.

Este sitio web se presenta como el examen para el filtro de html y css



## Información general de la pagina web

- Los lenguajes usados fueron:
  - **html**: Para establecer la maquetacion de todas las paginas de las desarrolladoras o categorias
  - **css**: Para agregar estilos y ubicar los respectivos elementos creados en los htmls
- Se utilizó la metodología *BEM* para el desarrollo, debido a la complejidad del codigo.



## Estructura del sitio web

El eCommerce consta de un total de 4 páginas/categorías, cada una de las cuales presenta 4 de sus juegos más famosos.

### index.html

- Esta es la página principal, donde se estableció la página de todos los productos como índice.
- Otros archivos HTML:
  - Son páginas individuales a las que se puede acceder desde el índice, y todas son responsivas.

### CSS

------

- #### variable.css

  Este archivo define variables que especifican los colores usados en el sitio web.

- #### styles.css

  Este archivo define la disposición de los elementos en las páginas de las categorías o desarrolladoras. E importa los otros archivos css

- #### visual-styles

  Se enfoca más en la parte visual de los elementos, como colores, sombreado y animaciones, en lugar de su posición en el sitio web.

  #### media.css

  Se enfoca más en la parte visual de los elementos, como colores, sombreado y animaciones, en lugar de su posición en el sitio web.

------

### Desarrollo del codigo de css

- **Grid y Flex:**
  - Se utiliza `grid` para estructurar el diseño de la página, donde cada sección (producto) está compuesta por un grid interno. Dentro de cada sección, también hay otro grid interno que organiza las imágenes.
  - La propiedad `flex` se emplea en la mayoría de los elementos del grid para simplificar el posicionamiento de sus elementos internos.
- **Position:**
  - Se emplea `position: sticky` para reservar un espacio para el menú/barra de navegación en la interfaz.
- **@media query:**
  - Se realizan consultas de media query para dispositivos con un ancho maximo de 500px y 960px.

## Autor

-----

**Nombre:** Sofia Marcela Medina Díaz - @S0fiaMedina

**Institucion:** Campuslands

**Team Leader**: @CampusLands