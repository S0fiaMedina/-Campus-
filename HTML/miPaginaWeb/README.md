# Glosario HTML

## INDICE
- [Semantica web](#semantica-web)
- [Etiquetas contenedoras](#contenedores-en-html)
- [formularios en html](#formularios-en-html)

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

```<input type="datetime-local">```: Permite al usuario seleccionar una fecha y hora local.

```<input type="email">:``` Requiere que el usuario ingrese un valor válido de dirección de correo electrónico.

```<input type="file">: ```Permite al usuario seleccionar uno o varios archivos para cargar.

```<input type="hidden">:``` Oculta el campo del usuario, pero envía su valor cuando se envía el formulario.

 ```<input type="image">:``` Crea un botón de imagen que envía las coordenadas del clic junto con el formulario.
 
```<input type="month">:``` Permite al usuario seleccionar un mes y un año.

```<input type="number">:``` Requiere que el usuario ingrese un valor numérico.

```<input type="password">:``` Máscara el texto ingresado, usualmente utilizado para contraseñas.

```<input type="radio">:``` Permite al usuario seleccionar una sola opción de un conjunto de opciones.

```<input type="range">:``` Crea un control deslizante que permite al usuario seleccionar un valor de un rango numérico.

```<input type="reset">``` : Restablece los valores del formulario a sus valores predeterminados.

``` <input type="search">``` : Proporciona un campo de texto para ingresar términos de búsqueda.

``` <input type="submit">``` : Crea un botón para enviar el formulario.

``` <input type="tel">``` : Requiere que el usuario ingrese un número de teléfono.

``` <input type="text">``` : Crea un campo de texto de una línea, que permite al usuario ingresar texto.

``` <input type="time">``` : Permite al usuario seleccionar una hora.

``` <input type="url">``` : Requiere que el usuario ingrese una URL válida.

``` <input type="week">:```  Permite al usuario seleccionar una semana y un año.


