# Glosario HTML

## INDICE
- [Glosario HTML](#glosario-html)
  - 
  - [INDICE](#indice)
  - [enlaces](#enlaces-en-html)
  - [SEMANTICA WEB](#semantica-web)
  - [Contenedores en HTML](#contenedores-en-html)
    - [Div](#div)
    - [Span](#span)
  - [Formularios en html](#formularios-en-html)
    - [Input](#input)
  - [Etiquetas de multimedia](#etiquetas-de-multimedia)
  - [listas](#listas)
  - [tablas](#tablas)


## enlaces en HTML
  ```<a>```: se utiliza para crear enlaces a otros documentos o recursos en la web.
  - **Ejemplo**
    ```html 
      <a href="https://www.ejemplo.com" target="_blank" title="Visitar Ejemplo">Ir a Ejemplo</a>
    ```
    ```href```: Especifica la URL del destino del enlace.
    ```target```: Especifica dónde abrir el destino del enlace.
      - *_self* : Abre el enlace en la misma ventana o pestaña en la que se hizo clic.
      - *_parent*: Abre el enlace en el marco primario (si el documento HTML está dentro de un conjunto de marcos).
      - *_blank*: Abre el enlace en una nueva ventana o pestaña del navegador.
      - *_top*: Abre el enlace en la ventana superior, es decir, en la ventana principal del navegador, ignorando los marcos si los hay.


## SEMANTICA WEB
**header**
```HTML
<header>
    <!-- Contenido del encabezado, como títulos, logotipos, enlaces de navegación, etc. -->
</header>
```
**Nav**
```HTML
<nav>
    <!-- Contenido del nav, como enlaces a secciones de la pagina o a otros documentos -->
</nav>
```
**main**
```HTML
<main>
    <!-- Representa el contenido que trata el tema principal de la pagina. No debe haber más de uno -->
</main>
```
**article**
```HTML
<article>
    <!-- Representa un contenido independiente y que tiene sentido por si mismo -->
</article>
```
**section**
```HTML
<section>
    <!-- Representa una seccion generica, relacionada a algún contenido -->
</section>
```
**Aside**
```HTML
<aside>
    <!-- Contiene contenido relacionado pero que está tangencial al contenido principal como información adicional, enlaces relacionados, publicidad, etc. -->
</aside>
```
**footer**
```HTML
<aside>
    <!--Contiene el pie de pagina para el contenido más cercano, tiene cosas como inf del autor, enlaces a docs relacionados, etc -->
</aside>
```


## Contenedores en HTML

### Div
- Agrupa  contenidos (A diferencia de section, este no debe representar algo particular en el contenido de la pagina. Usado para plicar estilos)
  - Es un elemento en bloque
  - Puede contener cualquier elemento adentro
### Span
  - Al igual que div, sirve especialmente para dar estilos, pero a diferencia de este, se aplica a contenidos de una sola linea


## Formularios en html
Los formularios permiten a los usuarios la introducción de datos, que generalmente se envían a un servidor web para su procesamiento y almacenamiento
- Se decalara con la sintaxis ```<form action="url-del-sitio-que-recibe-los-datos" method="post / get"></form>```

**label**
elemento en una interfaz de usuario. Este puede estar asociado con un control, el atributo "for" que este posee es para relacionarlo con otro elemento, generalmente un input.

### Input
define un elemento que permite la entrada de los datos del usuario

```<input type="button">```: Crea un botón que puede ser utilizado para activar scripts u otros eventos en la página web.

```<input type="checkbox">```: Permite al usuario seleccionar una o varias opciones de una lista de opciones.

```<input type="color">:``` Proporciona un control para seleccionar un color.

```<input type="date">:``` Presenta un calendario o un campo de texto para seleccionar una fecha.

```<input type="datetime-local">```: Permite al usuario seleccionar una fecha y hora local

```<input type="email">:``` Requiere que el usuario ingrese un valor válido de dirección de correo electrónico.

```<input type="file">: ```Permite al usuario seleccionar uno o varios archivos para cargar.

```<input type="hidden">:``` Oculta el campo del usuario, pero envía su valor cuando se envía el formulario.

```<input type="image">:``` Crea un botón de imagen que envía las coordenadas del clic junto con el formulario.

```<input type="month">:``` Permite al usuario seleccionar un mes y un año.

```<input type="number">:``` Requiere que el usuario ingrese un valor numérico.

```<input type="password">:``` Máscara el texto ingresado, usualmente utilizado para contraseñas

```<input type="radio">:``` Permite al usuario seleccionar una sola opción de un conjunto de opciones.

```<input type="range">:``` Crea un control deslizante que permite al usuario seleccionar un valor de un rango numérico.

```<input type="reset">``` : Restablece los valores del formulario a sus valores predeterminados.

``` <input type="search">``` : Proporciona un campo de texto para ingresar términos de búsqueda.

``` <input type="submit">``` : Crea un botón para enviar el formulario.

``` <input type="tel">``` : Requiere que el usuario ingrese un número de teléfono.

``` <input type="text">``` : Crea un campo de texto de una línea, que permite al usuario ingresar texto.

``` <input type="time">``` : Permite al usuario seleccionar una hora.

``` <input type="url">``` : Requiere que el usuario ingrese una URL válida.

``` <input type="week">:```  Permite al usuarar unio selecciona semana y un año.



## Etiquetas de multimedia

- ### Imagenes
  - #### img 
  ```<img src="ruta_de_la_imagen.jpg" alt="Descripción de la imagen">```: 
  - ```src=""```: indica la ruta de la imagen
  - ```alt =""```: proporciona un texto alternativo que se muestra si la imagen no se puede cargar
  
  - #### picture
    - Esta etiqueta es aplicada cuando se quieren varias versiones de una imagen
  ```html
  <picture>
      <source srcset="imagen_grande.jpg" media="(min-width: 800px)">
      <img src="imagen_pequena.jpg" alt="Descripción de la imagen">
  </picture>
  ```
    - ```source```: Especifica un origen de una imagen
    - ```media```: Establece unas condiciones  de ancho de pantalla para la imagen
    - ```alt```: proporciona un texto alternativo que se muestra si la imagen no se puede cargar
  
  - #### figure
  ```html
    <figure>
        <img src="imagen.jpg" alt="Descripción de la imagen">
        <figcaption>Descripción de la imagen</figcaption>
    </figure>
    ```
    - ```figure```: envuelve la imagen y su descripción.
    - ```figcaption```: proporciona una descripción para la imagen. 

  - ### video
      - Ejemplo:
        ```html
          <video controls width="480" height="270">
            <source src="ruta_del_archivo_de_video.mp4" type="video/mp4">
            Tu navegador no soporta la reproducción de video.
          </video>
        ```
      - **atributos de la etiqueta video**
      | Nombre del atributo | funcion  | 
      |---------------------|-------------------------|
      | src             |Especifica la URL del archivo de video a cargar. |
      | autoplay        | Especifica si el video debe comenzar a reproducirse automáticamente al cargar la página. | 
      | controls        | Agrega controles de reproducción (reproducir, pausar, volumen, etc.) elda 2, fila 2         | 
      | height          | Establece altura        |
      | width           | Establece el ancho        |  
      | loop            | Especifica si el video debe reiniciarse automáticamente una vez que llegue al final.        | 
      | muted           | ndica si el audio del video debe estar silenciado o no.         | 
      | poster          | Especifica una imagen que se mostrará mientras se carga el video o antes de que comience la reproducción.         | 
      | preload         | Indica cómo debe cargarse el video cuando la página se carga. Puede ser "auto", "metadata" o "none".        |
  
  - ### Audio
    Ejemplo:

     ```html
      <audio controls>
        <source src="ruta_del_archivo_de_audio.mp3" type="audio/mpeg">
        Tu navegador no soporta la reproducción de audio.
      </audio>
     ```
    - **atributos de la etiqueta audio**
      | Nombre del atributo | funcion  | 
      |---------------------|----------|
      | src       | Especifica la URL del archivo de audio que se va a reproducir.   |
      | controls  | Agrega controles de reproducción estándar al reproductor de audio. |
      | autoplay  | Indica al navegador que reproduzca automáticamente el audio tan pronto como esté disponible.|
      | loop      | Indica al navegador que reproduzca el audio en un bucle continuo.|
      | preload   | Especifica cómo se debe precargar el audio cuando la página se carga.  |
      | muted     | Indica si el audio debe iniciarse en modo silencioso (mute) o no.|
      | volume    | Especifica el nivel de volumen inicial del audio, con un valor entre 0.0 (silencio) y 1.0 (volumen máximo). |   

- ## Listas
    - **Listas ordenadas** : Cada elemento de la lista se representa con un número o un símbolo ordenado, como números, letras o romanos.
        ```html
        <ol>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ol>
        ```     
    - **Listas de definición** :  Se utilizan para definir términos junto con sus definiciones. 
        - <dt> : (término de definición)
        - <dd> : (definición de término).
        ```html
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
        ```
    - **Listas desordenadas** :  Cada elemento de la lista se representa con un marcador, como un punto, un círculo o un cuadrado.
        ```html
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
        ```
  - ## Tablas
  - ```<table>```: En html las tablas se definen con esta etiqueta

  - ### Partes principales de una tabla
    - ```<thead>```: Encabezado de la tabla
    - ```<tbody>```: cuerpo de la tabla (representan los datos principales de la tabla)
    - ```<tfood>```: Encabezado de la tabla
  
  - ### Fila
    - ```<tr>```: Etiqueta de fila. Representa celdas organizadas de forma horizontal

      - #### celdas
      - ```<th>```: Usado para las celdas de encabezado
      - ```<td>```: Usado para las celdas regulares
  
  - **Ejemplo de tabla**
  ```html
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Juan</td>
          <td>25</td>
          <td>Madrid</td>
        </tr>
        <tr>
          <td>Maria</td>
          <td>30</td>
          <td>Barcelona</td>
        </tr>
        <tr>
          <td>Pedro</td>
          <td>28</td>
          <td>Sevilla</td>
        </tr>
      </tbody>
  </table>
  ```


