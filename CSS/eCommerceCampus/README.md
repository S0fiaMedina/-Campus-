# proyecto eCommerce de HTML y CSS

## Descripcion 
- Este es un proyecto de un frontend *eCommerce* que permite visualizar unos de los juegos mas populares de las siguientes dessarrolladoras:
    - Rockstar Games
    - Electronic Arts (EA)
    - Activision
    - Ubisoft
    - Nintendo
    - Xbox
    - Naughty Dog
    - Capcom
    - Bethesda Softworks
    - Square Enix

- Este proyecto se presenta como el segundo de dos proyectos para el filtro de HTML y CSS
-----
## Autoría

Este proyecto fue creado por:

- **Nombre**: Sofia Marcela Medina Díaz - [S0fiaMedina](https://github.com/S0fiaMedina)
- **Grupo**: M1
- **Institución**: CampusLands

Revisado por 
- [@CampusLands](https://github.com/CampusLands)

-----
## Visualizacion

### Escritorio

![visualizacion en escritorio](gif/proyecto2video.gif)

-----
### Movil

![visualizacion en movil](gif/grabacionMovilProyecto2.gif)

## Información general de la pagina web

- Los lenguajes usados fueron:
    - **html**: Para establecer la maquetacion de todas las paginas de las desarrolladoras o categorias
    - **css**: Para agregar estilos y ubicar los respectivos elementos creados en los htmls
    - **JavaScript**: Usado para la funcionalidad de los elementos `<dialog>` 

- Se utilizó la metodología *BEM* para el desarrollo, debido a la complejidad del codigo.

- Se optó por la técnica *First Mobile* en el proceso de desarrollo debido a su flexibilidad y adaptabilidad.


  

## Estructura del sitio web

El eCommerce consta de un total de 10 páginas/categorías, cada una de las cuales presenta 4 de sus juegos más famosos, lo que suma un total de 40 productos.

### index.html
- Esta es la página principal, donde se estableció la página de Rockstar Games como índice.
- **Otros archivos HTML:**
  - Son páginas individuales a las que se puede acceder desde el índice, y todas son responsivas.

### CSS

---

- #### variable.css

    Este archivo define variables que especifican los tamaños de fuente para cada consulta de media query. Estas variables se importan en el archivo styles.css para asegurar la consistencia y fácil modificación de los estilos en todo el sitio.
    
- #### conf-producto

    Este archivo define la disposición de los elementos en las páginas de las categorías o desarrolladoras.
    
- #### styles.css

    Este archivo es el principal en CSS, ya que importa a los otros dos. Se enfoca más en la parte visual de los elementos, como colores, sombreado y animaciones, en lugar de su posición en el sitio web.

-----
### Desarrollo del codigo de css

  - **Grid y Flex:**
    - Se utiliza `grid` para estructurar el diseño de la página, donde cada sección (producto) está compuesta por un grid interno. Dentro de cada sección, también hay otro grid interno que organiza las imágenes.
    - La propiedad `flex` se emplea en la mayoría de los elementos del grid para simplificar el posicionamiento de sus elementos internos.

  - **Position:**
    - Se emplea `position: fixed` para reservar un espacio para el menú/barra de navegación en la interfaz.
    - También se utiliza `position: fixed` para mejorar la visualización de los diálogos.

  - **@media query:**
    - Se sigue la metodología *Mobile First* en el desarrollo del contenido en general.
    - Se realizan consultas de media query para dispositivos con un ancho mínimo de 768px y 1600px.

---


### STORAGE

El directorio storage contiene una carpeta llamada img, que alberga todas las imágenes utilizadas en el sitio web. Esta carpeta se organiza en 10 subcarpetas, cada una representando una categoría o desarrolladora de videojuegos. Dentro de cada una de estas subcarpetas hay otras 4 subcarpetas correspondientes a los videojuegos, cada una conteniendo 4 imágenes que representan las portadas y el gameplay, totalizando así 160 imágenes.

### js
Esta carpeta contiene dos archivos de JavaScript. Ambos cumplen la función de abrir y cerrar el menú de compras y el diálogo de la información del producto, respectivamente, mediante event listeners.

### Fuentes de los recursos usados

- **Imágenes:** 
    - Muchas de las imágenes fueron obtenidas de Steam y de búsqueda en Google en general. Se atribuyen créditos a sus respectivos autores.
- **Iconos:** 
    - Utilizados desde [FontAwesome](https://fontawesome.com).