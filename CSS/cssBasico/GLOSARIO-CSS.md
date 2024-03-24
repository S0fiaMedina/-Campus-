
- [teoria de cajas](#teoria-de-cajas)
- [Diseño responsive](#diseño-responsive)
- [flex-box](#flex-box)
- [grid](#grid-css)
- [position](#positions)
- [jerarquia de especificidad](#especifidad-jerarquia)
-[pseudo elementos y pseudo clases](#pseudo-elementos)
- [transition](#transition)

## Selectores

`#id`	Selecciona el elemento con el id

`.clase` 	Selecciona a los elementos con esa clase

`div div__hijo ` 	selecciona a los hijos de div__hijo

`div > div__hijo`	selecciona al hijo directo

`div + div` 	selecciona a un hermano (puede no ser adyacente)

 `div ~ div`	selecciona a un hermano ADYACENTE

-----------
## Especifidad (jerarquia)
----------
¿Como css define que es mas relevante?

1. **POR CASCADA - DOS ELEMENTOS DEL MISMO TIPO**
    - si hay estilos del mismo tipo o nivel de jerarquia que entran en conflictos, CSS generalmente escoge el ultimo

2. **POR JERARQUIA(orden de importancia)**
    - para diferentes tipos. Anula la regla de CASCADA
    - Las propiedades del mayor tipo, anulan las siguientes
        - CLASE >> ID >> TIPO

        1 - *!important* --> propiedad:valor !important 
        2 - *estilos en linea* --> atributo style="" en html
        3 - *Identificadores*
        4 - *clases - pseudo-clases -atributos*
        5 - *pseudoelemento -elementos*

-----------
## Teoria de cajas
----------
**MODIFICAR**
    - display: inline/block

- a los elementos en linea no se les puede aplicar ni height ni width ya que estos solo se adaptan al contenido

### SHORT HAND:
Propiedades acortadas, que son un conjunto de sub-propiedades
    - Top, right, bottom y left
    - Top,bottom right,left


### PROPIEDADES DE CAJAS
### Background:

- `background-clip`: Especifica el área donde se debe aplicar el fondo.
- `background-origin`: Especifica el punto de origen del fondo.
- `background-size`: Especifica el tamaño del fondo.

### Background (Nivel 3):

- `background`: Define varias propiedades de fondo en una sola declaración.
- `background-color`: Establece el color de fondo.
- `background-image`: Establece la imagen de fondo.
- `background-repeat`: Controla la repetición de la imagen de fondo.
- `background-attachment`: Especifica si la imagen de fondo se desplaza con el contenido o permanece fija.
- `background-position`: Define la posición inicial de una imagen de fondo.
### Dimensions:

- `width`: Establece el ancho de un elemento.
- `max-width`: Establece el ancho máximo de un elemento.
- `min-width`: Establece el ancho mínimo de un elemento.
- `height`: Establece la altura de un elemento.
- `max-height`: Establece la altura máxima de un elemento.
- `min-height`: Establece la altura mínima de un elemento.

### Margins:

- `margin-top`, `margin-right`, `margin-bottom`, `margin-left`: Establecen los márgenes de un elemento.

### Padding:

- `padding-top`, `padding-right`, `padding-bottom`, `padding-left`: Establecen el relleno de un elemento.

### Shorthand:

- `margin`: Establece los márgenes de un elemento de forma abreviada.
- `padding`: Establece el relleno de un elemento de forma abreviada.
    

### BOX-MODEL:
```
+-------------------------------------+
|              Margin (m)             |
|                                     |
|  +-------------------------------+  |
|  |            Border (b)         |  |
|  |                               |  |
|  |  +-------------------------+  |  |
|  |  |        Padding (p)      |  |  |
|  |  |                         |  |  |
|  |  | +---------------------+ |  |  |
|  |  | |     Content (c)     | |  |  |
|  |  | |                     | |  |  |
|  |  | +---------------------+ |  |  |
|  |  |                         |  |  |
|  |  +-------------------------+  |  |
|  |                               |  |
|  +-------------------------------+  |
|                                     |
+-------------------------------------+
```   

NOTA:
    - las medidas de la caja se pueden ver afectadas por el padding y el margin, a menos que se use box-sizing
    

-----------
## POSITIONS
-----------
**concepto importante --> FLUJO DEL DOCUMENTO:**
Cuando se carga una página web, los elementos HTML se colocan en el documento en un orden específico y siguiendo un flujo determinado. Este flujo normal sigue el orden en el que aparecen los elementos en el código HTML. Los elementos en línea (como texto y enlaces) se colocan uno al lado del otro en línea, mientras que los elementos de bloque (como párrafos y divisiones <div>) se colocan uno debajo del otro.
- ### STATIC (predeterminada)
    - Sigue el flujo normal de la pagina. No se ve afectada por top, right y bottom.
- ### RELATIVE
    - mueve la caja SIN afectar a los demas, es libre :D y además no pierde su espacio :)
    - posiciona el elemento y adquiere top, left, right y bottom 
        - permite desplazar un elemento con respecto a su posición normal (static),
        - sigue conservando el mismo espacio 
        - *(Top, left >>> bottom, right)*, para que funcionen bottom y right, top y left no deben estar
- ### ABSOLUTE 
    -   Posiciona el elemento, pero le quita el espacio que el dom le tiene reservado, se sale del flujo del dom
    -   Si se especifica una de estas propiedades, la caja toma como punto de ref el viewport o el contenedor más cercano, SI ESTA POSICIONADO 
    - el ancho se ajusta al contenido
    -   Si no se agrega top, left, right or buttom, la caja permanece donde estaba antes
    - (Top left >>> bottom right), para que funcionen bottom y right, top y left no deben estar

- ### FIXED
    - parecido a ABSOLUTE, pierde el espacio reservado. 
    - La diferencia es el elemento permanece en la posicion que se le asigno

-----------
## Diseño responsive
----------

### Etiqueta meta-viewport

`<meta name="viewport" content="width=device-width,initial-scale=1"/>`

- `<meta name="viewport"`       : Se utiliza para controlar cómo se muestra el contenido en dispositivos.
- `content="width=device-width` : Hace que el ancho del contenido sea igual al ancho de la ventana del dispositivo,
- `initial-scale=1"/>`          : Establece la escala inicial del contenido a 1.0, asegurando que el contenido no se amplíe o reduzca automáticamente al cargar la página.

### Media queries
Utilizadas para aplicar estilos específicos según las características del dispositivo o la pantalla en la que se está visualizando la página web. 

```CSS
@media (max-width: 575.98px) {
    /* Estilos para pantallas extra pequeñas */
}
```
- **Mobile first**
    - enfoque de diseño y desarrollo web que prioriza la creación y optimización de la experiencia para dispositivos móviles antes que para computadoras de escritorio.

```CSS
@media (min-width: 1200px) {
    /* Estilos para pantallas extra grandes y mayores */
}
```


#### Especificaciones de @media [Obtenido de boostrap](https://example.com)

| Punto de Interrupción | Tamaño de Pantalla | Max Container Width | 
| ---------------------- | ------------------- | ------------------- |
| Extra small (`<576px`) | Extra pequeño       | None (auto)         | 
| Small (`≥576px`)       | Pequeño             | 540px               | 
| Medium (`≥768px`)      | Mediano             | 720px               | 
| Large (`≥992px`)       | Grande              | 960px               | 
| Extra large (`≥1200px`) | Extra grande        | 1140px             | 


------
## Flex-box
-------

```
+------------------+
| Main Cross       |
| ^                |
| |                |
| |                |
| |                |
| |                |
| +---------------> Main Axis
|                  |
|                  |
+------------------+
```

### PROPIEDADES DE POSCION

- **FLEX-START:** Pone los elementos hacia el inicio del eje.
- **FLEX-END:** pone los elementos hacia el final del eje.
- **CENTER:** centra el contenido en el eje.
- **SPACE-AROUND:** Hace que los todos los elementos tengan el mismo margen ENTRE ELLOS.
- **SPACE-BETWEEN:** Hace que los todos los elementos tengan el MAYOR margen ENTRE ELLOS.
- **SPACE-EVENLY:** Hace que los elementos tengan el mismo margen ya sea entre ellos mismos o afuera de ellos.
- **BASELINE:**los elementos se alinearán según sus líneas base (la línea donde se apoyan las letras en un elemento de texto).

### PROIEDADES GENERALES
- **Eje principal**
	- **FLEX-DIRECTION**:
	    - La direccion en que los elementos estan puestos dentro de la caja.
            - **column:**  los elementos se comportan como una columna.
            - **column-reverse:**  Los elementos se comportan como una columna invertida.
            - **row:** Se comportan como una fila (uno al lado del otro)
            - **Row-reverse:** La fila  va de derecha a izquierda

	- **FLEX-WRAP**
	    - Si los items aparecen en una o varias lineas dentro del container
            - **no-wrap:**  Todos en una misma linea.
            - **wrap:** Aparecen en multiples lineas  hacia abajo segun el ancho del contenedor
            - **wrap-reverse:** los items se van para arriba cuando el ancho no sea duficiente.

	- **JUSTIFY CONTENT**: Centra el contenido en el main axis
        - posee propiedades de flex-start, flex-end, center, space around, space between, baseline y evenly.


	- **ALIGN ITEMS** Alinea los elementos a lo largo del eje cross axis
	    -  (solo de una linea)
		- posee propiedades de flex-start, flex-end, center, space around, space between y baseline

	- **ALIGN CONTENT**:  Para modificar como cada linea esta puesta en el contenedor durante el flex-wrap
         - posee propiedades de flex-start, flex-end, center, space around, space between, 
         - **strech:** (las lineas se estiraran de tal forma que se llene el espacio vacio, sin imoportar que quede desigual. O sea, establece justo las lineas dependiendo de las medidas dadas. No se ajusta)



**PROPIEDADES APLICADAS HACIA UN SOLO ITEM**

- **ALIGN- SELF**: Para aplicar propiedades de flex box a un unico elemento.
    - AUTO: se alinea con los demás items
    - posee propiedades de flex-start, flex-end, center, space around, space between y baseline

- estas tres propiedades estan resumidas por el short hand: FLEX: flex-grow, flex-shrink, flex-basis (recibe al menos un parametro)
    - **FLEX-GROW:** Define que tanto puede crecer una caja en relacion al espacio disponible

        $x = \frac{{\text{{EspacioSobrante}}}}{{\text{{Sumgrow}}}}$

            - espacioSobrante = espacio de la pantalla - el espacio ocupado por la caja
            - x = cuanto espacio crecen los flex grow
            - sumGrow = numero total de flex-grows aplicados a todos los containers


    - **FLEX-BASIS:**
        - Define el tamaño incial de un item de flex-box. 
            - **AUTO:** Se ajusta al contenido.
            - especificado por el usuario

    - **FLEX- SHRINK:** Especifica que tanto van a ceder las cajas cuando falte el espacio suficiente para que todas tengan su tamaño normal (rellena el espacio faltante.).

        $x = \frac{{\text{{EspacioFaltante}}}}{{\text{{Sumshrink}}}}$

            - espacioFaltante = espacio total ocupado por las cajas - el espacio que nos da el navegador
            - x = cuanto espacio ceden los flex grow
            - sumShrink = numero total de flex-Shrinks aplicados a todos los containers

    - **ORDER:** como el z-index, pero ene el eje en que apunta el main axis.
        - (+ order) = el elemento estara mas adelante
        - (- order) = el elemento estara mas al inicio

### Grid CSS

---


## Grid implicito
### grid-template-columns:

- `track1`, `track2`, etc.: Representan las columnas del grid. Pueden tener diferentes tamaños especificados en unidades como `fr` (fracciones del espacio disponible), `%` (porcentaje del contenedor), `auto` (tamaño automático basado en el contenido), o un tamaño específico en `px`, `em` o `rem`.
- `minmax(min, max)`: Define un rango de tamaño para una columna. Por ejemplo, `minmax(100px, 1fr)` especifica que la columna tendrá un tamaño mínimo de 100 píxeles y un tamaño máximo de 1 fracción del espacio disponible.
- `repeat(n, track)`: Repite el mismo tamaño de columna `n` veces.
- `max-content`: Hace que la columna se ajuste al contenido máximo dentro de ella.
- `fit-content(min-content)`: Hace que la columna se ajuste al contenido mínimo dentro de ella.

### grid-template-rows:

- Similar a `grid-template-columns`, pero se aplica a las filas del grid layout.

### TRACKS:

- **auto**: Indica un tamaño automático para la pista de la cuadrícula.
- **size %**: Especifica un tamaño relativo basado en un porcentaje del contenedor.
- **fr**: Representa una fracción del espacio disponible dentro del contenedor.

- **[linename] auto size % fr**: Define una línea de la cuadrícula con un nombre específico y asigna un tamaño automático, un tamaño relativo en porcentaje o una fracción del espacio disponible.
- **minmax(min, max)**: Establece un rango de tamaño para la pista de la cuadrícula, donde el tamaño está limitado por un valor mínimo (`min`) y un valor máximo (`max`).
- **min <= size range <= max**: Indica que el tamaño de la pista de la cuadrícula debe estar dentro de un rango específico, con un valor mínimo y máximo definidos.
- **repeat(numbers, tracks)**: Repite un conjunto de pistas de la cuadrícula un número específico de veces, creando así fragmentos de pista de cuadrícula.
- **repeat(auto-fill, tracks)**: Repite automáticamente fragmentos de pista de cuadrícula para llenar el espacio disponible.
- **repeat(auto-fit, tracks)**: Repite automáticamente fragmentos de pista de cuadrícula para ajustarse al espacio disponible.
- **max-content**: Establece el tamaño máximo de una pista de cuadrícula basado en el contenido dentro de ella.
- **min-content**: Establece el tamaño mínimo de una pista de cuadrícula basado en el contenido dentro de ella.
- **largest max/min content track**: Identifica la pista de la cuadrícula con el tamaño máximo o mínimo de contenido.
- **fit-content (size %)**: Ajusta el tamaño de la pista de la cuadrícula al tamaño mínimo o máximo del contenido dentro de ella, o a un porcentaje específico del tamaño disponible. 
- **~min(max-content, max(auto, arg))**: Define un tamaño mínimo para una pista de cuadrícula basado en el contenido máximo o en un valor máximo calculado automáticamente.

grid-template-areas: area1 "area2 " areaY "

area -> grid area name (grid-area) #grid
-----------------------------
## PSEUDO-ELEMENTOS
-----------------------------
-NOTA:
Aquellos elementos que usen "content", no forman parte del DOM.

- **::FIRST-LINE** --> modifica la primera linea (responsive) --> SOLO BLOCK
- **::FIRST-LETTER** --> modifica la primera letra --> SOLO BLOCK
- **input::PLACEHOLDER** --> modifica lo que esta adentro de los inputs
- **::SELECTION** --> modifica como se ve cuando se selecciona un texto
- **::AFTER y ::BEFORE**
    - son hijos del elemento al que se le van a aplicar.
    - SE DEBE USAR CONTENT=""
    - *::BEFORE* --> crea un pseudoelemento que va "antes" del elemento padre
    - *::AFTER* --> crea un pseudoelemento que va "despues" del elemento padre

## PSEUDO-CLASES 

- **Pseudo Clases de Enlaces (Links):**

  - `:link` - enlaces que aún no han sido visitados
  - `:visited` - enlaces que han sido visitados

- **Pseudo Clases de Interacción de Usuario:**

  - `:hover` - usuario mueve el ratón/puntero sobre el elemento

  - `:active` - elemento está siendo activado por el usuario

  - `:focus` - elemento tiene el enfoque (foreground)

    

- **Acciones del Usuario:**

  - `:enabled` - elementos habilitados
  - `:disabled` - elementos deshabilitados

- **Interfaz de Usuario del Usuario:**

  - `:checked` - elementos marcados como "activados" por el usuario

  - `:default` - elementos predeterminados para formularios

  - `:valid` - datos de usuario válidos

  - `:invalid` - datos de usuario no válidos

  - `:required` - elementos requeridos

  - `:optional` - elementos opcionales para enviar

- **Selectores Estructurales**:
  - `:first-child`: Selecciona el primer hijo de un grupo de elementos dentro de su contenedor.
  - `:last-child`: Selecciona el último hijo de un grupo de elementos dentro de su contenedor.
  - `:nth-child(n)`: Selecciona el enésimo hijo de un grupo de elementos dentro de su contenedor, donde "n" es un número o una expresión.
  - `:nth-last-child(n)`: Selecciona el enésimo hijo desde el final de un grupo de elementos dentro de su contenedor.
  - `:only-child`: Selecciona un elemento que es el único hijo de su contenedor.
  - `:nth-child(1)`: Es una forma específica de `:first-child`, seleccionando el primer hijo de un grupo de elementos.
  - `:nth-last-child(1)`: Es una forma específica de `:last-child`, seleccionando el último hijo de un grupo de elementos.
- **Pseudo Clases de Otros Selectores**:
  - `:first-of-type`: Selecciona el primer hijo del mismo tipo dentro de su contenedor.
  - `:last-of-type`: Selecciona el último hijo del mismo tipo dentro de su contenedor.
  - `:nth-of-type(n)`: Selecciona el enésimo hijo del mismo tipo dentro de su contenedor.
  - `:nth-last-of-type(n)`: Selecciona el enésimo hijo desde el final del mismo tipo dentro de su contenedor.
  - `:only-of-type`: Selecciona el único hijo del mismo tipo dentro de su contenedor.
  - `:root`: Selecciona el elemento raíz del documento HTML.
- **Otros Selectores**:
  - `:empty`: Selecciona elementos que no tienen ningún contenido o hijos.
  - `:not(x)`: Selecciona elementos que no coinciden con el selector "x".
  - `:target`: Selecciona el elemento que es el destino de la URL del anclaje actual.
  - `:lang(x)`: Selecciona elementos que están en el idioma especificado por "x".



-----------------------------
## OBJECT- FIT 
-----------------------------
- `object-fit`:

  - `fill`: Estira la imagen para que llene completamente el contenedor, manteniendo su relación de aspecto.

  - `contain`: Escala la imagen para que quepa completamente dentro del contenedor sin distorsión, manteniendo su relación de aspecto.

  - `cover`: Escala la imagen para que cubra completamente el contenedor, sin recortar ni distorsionar, manteniendo su relación de aspecto.

  - `none`: La imagen mantiene su tamaño original, pudiendo salirse del contenedor si es más grande.

  - `scale-down`: Escala la imagen para que quepa dentro del contenedor sin superar su tamaño original, eligiendo entre `contain` y `none` según cuál sea más pequeño.

- `object-position`:

  - `50% 50%`: Centra la imagen en el contenedor tanto horizontal como verticalmente.

  - `background-position`: Especifica la posición inicial de la imagen dentro del contenedor, utilizando la misma sintaxis que `background-position`

----------------------------------
## TRANSITION
---------------------------------
- `transition-property`: Especifica qué propiedad CSS debe ser afectada por la transición.
- `transition-duration`: Define la duración de la transición en segundos o milisegundos.
- `transition-timing-function`: Determina la velocidad de cambio durante la transición.
    - *linear*
    - *ease*
    - *ease-in*
    - *ease-out*
- `transition-delay`:  Indica un retraso antes de que la transición comience a ejecutarse. Se especifica en segundos o milisegundos.



