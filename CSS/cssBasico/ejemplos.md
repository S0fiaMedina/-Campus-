
# Ejemplos CSS

### Ejemplo de metodologia BEM 
- clase-contendor__clase-elemento--modificador  
```
/* Bloque principal */
.block {
/* Estilos del bloque */
}

/* Elemento dentro del bloque */
.block__element {
/* Estilos del elemento dentro del bloque */
}

/* Elemento anidado dentro del bloque__element */
.block__element__nested {
/* Estilos del elemento anidado dentro del bloque__element */
}

/* Modificador para el bloque__element */
.block__element--modifier {
/* Estilos del bloque__element con un modificador */
}

/* Modificador para el elemento anidado dentro del bloque__element */
.block__element__nested--modifier {
/* Estilos del elemento anidado con un modificador */
}
```
### Ejemplo medidas relativas

**em**
```p {
  font-size: 16px; /* Si el tamaño de fuente es 16px, 1em será igual a 16px */
  margin-bottom: 1.5em; /* Margen inferior de 1.5 veces el tamaño de fuente */
}
```
**Rem**
```
html {
  font-size: 16px; /* Tamaño de fuente base para el elemento raíz */
}

body {
  font-size: 1em; /* Tamaño de fuente del cuerpo, igual al tamaño de fuente base */
}
```
### centrar caja con posicion absolute

```
.caja5 { 
  top: 0; 
  left: 0;
  right: 0; 
  bottom: 0;
  margin: auto;
}

```

### estructura basica de pagina con grid
```css
.container{
  display: grid;
  grid-template-areas:
  "header header header"
  "aside main main"
  "aside main main"
  "footer footer footer";
  grid-template-rows: repeat(auto-fill, 1fr);
  /*El footer y el header deberian conservar medidas fijas*/
}



```