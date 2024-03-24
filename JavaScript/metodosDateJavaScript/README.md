# Metodos de Date

- El constructor date, crea objetos de la clase date.

- El constructor recibe un varios argumentos y devuelve un string que representa el formato de la fecha

- **Parametros**
  
  - **Sin parametros**: Cuando no se le ṕroporcionan parametros, se crea un objeto que represemta la fecha y hora actual. : `new Date()`
  
  - **Un solo argumento**:
  
    - **Numero**:  Representa un sello de tiempo en milisegundos es decir, la cantidad de milisegundos transcurrida desde el 1 de enero de 1970 a las 00:00:00 UTC (Coordinated Universal Time). `new Date(2321321321)`
  
    - **dateString** : Representa una cadena en formato dateString 
  
      - **Algunas Formas de representar dateString**
  
        - `new Date(YYYY-MM-DDTHH:mm:ss.sssZ)`
        - `new Date(YYYY, YYYY-MM, YYYY-MM-DD)`
  
      - `YYYY`: representa el año.
  
      - `MM`: representa el mes con dos digitos (01 a 12). el valor por defecto es 01.
  
      - `T`: indica el inicio de la parte del tiempo del string. Es necesario colocarlo cuando se indica el tiempo.
  
      - `HH`: Es la hora representada por dos digitos (00 a 23). El valor por defecto es 0.
  
      - `MM`: Son los minutos representados por dos digitos (00 a 59). El valor por defecto es 0.
  
      - `SS`: Son los segundos representados por dos digitos (00 a 59). El valor por defecto es 0.
  
      - `sss`: Son los milisegundos representados por tres digitos (000 a 999). El valor por defecto es 0.
  
      - `Z`:   
  
        - Indica que la fecha y hora están en Coordinated Universal Time (UTC)
  
        - Un signo `-` o  `+`  y que esté seguido de `HHMM` representa el desface despecto al UTC
  
          
  


## Local y UTC

- **Metodos locales:** Estos métodos devuelven los componentes de la fecha y hora según la zona horaria local del sistema donde se está ejecutando el código. La hora local del sistema se mantiene
- **Metodos UTC**: Estos métodos devuelven los componentes de la fecha y hora en Coordinated Universal Time (UTC), que es el estándar de tiempo mundial e ignora la hora local del sistema



------

##  Year



#### Local

- **get**

  - Devuelve el año completo de una fecha especificada.

    ```javascript
    const moonLanding = new Date('July 20, 69 00:20:18'); //crea un nuevo objeto Date con un parametro de dateString
    console.log(moonLanding.getFullYear()); //se imprime la fecha creada
    // Impresion: 1969
    
    ```


- **Set**

  - establece el año completo de una fecha según el valor pasado como argumento.

    - Se establce en formato UTC, y luego se ajusta al hoario local
    
    ```javascript
    const fecha = new Date('2024-02-12'); //crea un nuevo objeto Date con un parametro de dateString
    console.log(fecha); // impresion: Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
    fecha.setFullYear(2023); //establece un nuevo año en el 2023
    console.log(fecha); // impresion: Sat Feb 11 2023 19:00:00 GMT-0500 (hora estándar de Colombia)
    
  
  

#### UTC



- **get**

  -  devuelve el año completo de una fecha en Coordinated Universal Time (UTC). Este método devuelve el año en formato de cuatro dígitos.

    ```javascript
    const fecha = new Date('2024-02-12'); //crea un nuevo objeto Date con un parametro de dateString
    console.log(fecha); // Date Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
    
    const añoUTC = fecha.getUTCFullYear(); //se crea una nueva variable que obtiente el año que establecimos antes
    console.log(añoUTC); // Output: 2024
    

- **set**

  - establece el año completo de una fecha en Coordinated Universal Time (UTC) según el valor pasado como argumento.

    ```javascript
    const fecha = new Date('2024-02-12'); //crea un nuevo objeto Date con un parametro de dateString
    console.log(fecha); // Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
    
    fecha.setUTCFullYear(2023);
    console.log(fecha); //Sat Feb 11 2023 19:00:00 GMT-0500 (hora estándar de Colombia)
    ```



****

## Month

#### Local

- **get**

  - devuelve el mes (en base 0, es decir, de 0 a 11) de una fecha según la zona horaria local del sistema en el que se está ejecutando el código.

    ```javascript
    const fecha = new Date('2024-02-12'); //crea un nuevo objeto Date con un parametro de dateString
    console.log(fecha); // Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
    
    const mes = fecha.getMonth();
    console.log(mes); // Output: 1 (febrero es el segundo mes en base 0)
    ```

- **set**

  - establece el mes de una fecha según la zona horaria local del sistema en el que se está ejecutando el código.

  - Se establce en formato UTC, y luego se ajusta al hoario local
  
    ```javascript
    const fecha = new Date('2024-02-12'); //crea un nuevo objeto Date con un parametro de dateString
    console.log(fecha); // Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
    
    fecha.setMonth(5); // Establece el mes a junio (meses se indexan desde 0)
    console.log(fecha); //  Tue Jun 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
    ```
  
    

#### UTC

- **get**

    -  devuelve el mes (en base 0, es decir, de 0 a 11) de una fecha en Coordinated Universal Time (UTC).

      ```javascript
      const fecha = new Date('2024-02-12');
      console.log(fecha); //Date Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
      
      const mesUTC = fecha.getUTCMonth();
      console.log(mesUTC); // Output: 1 (febrero es el segundo mes en base 0)
      ```

- **Set**
    -  se utiliza para establecer el mes de una fecha en Coordinated Universal Time (UTC). 
    - Este método toma un parámetro numérico que representa el nuevo valor del mes (en base 0, es decir, de 0 a 11) que se desea establecer para la fecha.

      ```javascript
      const fecha = new Date('2024-02-12');
      console.log(fecha); // Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
      // Establecer el mes en marzo (el tercer mes en base 0)
      fecha.setUTCMonth(2);
      console.log(fecha); // Mon Mar 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
      ```

****
## Month(day)

#### Local

- **get**
    - El método `getDate()` de los objetos Date en JavaScript devuelve el día del mes (en base 1, es decir, de 1 a 31) de una fecha específica.

      ```javascript
        const fecha = new Date('2024-02-12');
        console.log(fecha); // Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
        const diaDelMes = fecha.getDate();
        console.log(diaDelMes); // Output: 12
      ```

- **set**
    - El método `setDate()` es un método de los objetos Date en JavaScript quese utiliza para establecer el día del mes de una fecha específica. Este método toma un parámetro numérico que representa el nuevo valor del día del mes (en base 1, es decir, un número entre 1 y 31).


```javascript
  
    const fecha = new Date('2024-02-12');
    console.log(fecha); // Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)

    // Establecer el día del mes en 15
    fecha.setDate(15);
    console.log(fecha); // Thu Feb 15 2024 19:00:00 GMT-0500 (hora estándar de Colombia) (-5 horas al UTC)

```


#### UTC
- **get**
  
    - El método `getUTCDate()` es un método de los objetos Date en JavaScript que devuelve el día del mes (en formato de hora UTC) para una fecha específica.
    - Cuando se invoca getUTCDate() en un objeto Date, devuelve un número que representa el día del mes en Coordinated Universal Time (UTC). Este número está en el rango de 1 a 31, correspondiente a los días válidos en un mes.
    
      ```javascript
        const fecha = new Date('2024-02-12');
        console.log(fecha); //Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia
        fechaNueva = fecha.getUTCDate(); //Se obtiene el dia del mes en el estandar UTC
        console.log(fechaNueva); // 12
        
    
    
- **set**
    - El método `setUTCDate()` es un método de los objetos Date en JavaScript que se utiliza para establecer el día del mes de una fecha específica en Coordinated Universal Time (UTC).
    - Este método toma un parámetro numérico que representa el nuevo valor del día del mes (en base 1, es decir, un número entre 1 y 31) que se desea establecer para la fecha.

      ```javascript
        const fecha = new Date('2024-02-12');
        console.log(fecha); // Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
      
        // Establecer el día del mes en 15
        fecha.setUTCDate(15);
        console.log(fecha); // Wed Feb 14 2024 19:00:00 GMT-0500 (hora estándar de Colombia) (00:00 - 5 =  19:00)
      ```
****
## Hours
#### Local

- **get**
    - El método `getHours()` en JavaScript devuelve la hora del día en formato de 24 horas para una fecha específica.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:00');
        const horas = fecha.getHours(); // Devuelve 14
      console.log(fecha.getHours()); // imprime 14
      ```
    
- **set**
    - El método `setHours()` es un método de los objetos Date en JavaScript que se utiliza para establecer la hora del día para una fecha específica.


```javascript

    const fecha = new Date('2024-02-12T14:30:00');
    console.log(fecha); //Mon Feb 12 2024 14:30:00 GMT-0500 (hora estándar de Colombia)

    // Establecer la hora del día en 10 AM
    fecha.setHours(10);
    console.log(fecha); // Mon Feb 12 2024 10:30:00 GMT-0500 (hora estándar de Colombia)

```

#### UTC
- **get**
    - El método `getUTCHours()` es un método de los objetos Date en JavaScript que devuelve la hora del día en formato UTC para una fecha específica.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:00');
        console.log(fecha); // Mon Feb 12 2024 14:30:00 GMT-0500 (hora estándar de Colombia)
        const horasUTC = fecha.getUTCHours();
        console.log(horasUTC); // Output: 19 (+5 horas de colombia)
      ```

- **set**
    - El método setUTCHours() es un método de los objetos Date en JavaScript que se utiliza para establecer la hora del día en formato UTC para una fecha específica.
    - Este método toma varios parámetros opcionales que representan la nueva hora del día, así como también minutos, segundos y milisegundos opcionales. 
    - Si no se proporcionan los parámetros opcionales, los valores de minutos, segundos y milisegundos se establecerán en cero.


```javascript
  
    const fecha = new Date('2024-02-12T14:30:00');
    console.log(fecha); // Mon Feb 12 2024 14:30:00 GMT-0500 (hora estándar de Colombia)

    // Establecer la hora del día en 10 AM en formato UTC
    fecha.setUTCHours(10);
    console.log(fecha); // Mon Feb 12 2024 05:30:00 GMT-0500 (hora estándar de Colombia) -5 horas al UTC

  
```
****

## Minutes

#### Local

- **get**
    - El método `getMinutes()` es un método de los objetos Date en JavaScript que devuelve los minutos de una hora específica.
    - Cuando se invoca getMinutes() en un objeto Date, devuelve un número entero que representa los minutos de la hora de la fecha y hora especificadas. Este número está en el rango de 0 a 59.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:00');
        console.log(fecha); // Date Mon Feb 12 2024 14:30:00 GMT-0500 (hora estándar de Colombia)
      
        const minutos = fecha.getMinutes();
        console.log(minutos); // Output: 30
      
      ```

- **set**
    - El método `setMinutes()` es un método de los objetos Date en JavaScript que se utiliza para establecer los minutos de una hora específica.
    - Este método toma uno o más parámetros opcionales que representan los nuevos valores para los minutos, así como también opcionalmente los segundos y milisegundos. 
    - Si no se proporcionan los parámetros opcionales, los valores de segundos y milisegundos se establecerán en cero.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:00');
        console.log(fecha); // Mon Feb 12 2024 14:30:00 GMT-0500 (hora estándar de Colombia)
        // Establecer los minutos en 45
        fecha.setMinutes(45);
        console.log(fecha); // Mon Feb 12 2024 14:45:00 GMT-0500 (hora estándar de Colombia)
      ```

#### UTC
- **get**
    - El método `getUTCMinutes()` es un método de los objetos Date en JavaScript que devuelve los minutos de una hora específica en formato UTC.

    - Cuando se invoca getUTCMinutes() en un objeto Date, devuelve un número entero que representa los minutos de la hora de la fecha y hora especificadas, en formato UTC. Este número está en el rango de 0 a 59.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:00');
        console.log(fecha); // Mon Feb 12 2024 14:30:00 GMT-0500 (hora estándar de Colombia)
        const minutosUTC = fecha.getUTCMinutes(); //Obtiene los minutos en UTC
        console.log(minutosUTC); // Output: 30
      ```
    
- **set**
    - El método `setUTCMinutes()` es un método de los objetos Date en JavaScript que se utiliza para establecer los minutos de una hora específica en formato UTC.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:00');
        console.log(fecha); // Mon Feb 12 2024 14:30:00 GMT-0500 (hora estándar de Colombia
        fecha.setUTCMinutes(45); // Establecer los minutos en 45 en formato UTC
        console.log(fecha); // Mon Feb 12 2024 14:45:00 GMT-0500 (hora estándar de Colombia)
      ```

*****
## Seconds

#### Local

- **get**
    - El método `getSeconds()` es un método de los objetos Date en JavaScript que devuelve los segundos de un minuto específico.
    - Cuando se invoca `getSeconds()` en un objeto Date, devuelve un número entero que representa los segundos del minuto de la fecha y hora especificadas. Este número está en el rango de 0 a 59.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:45');
        console.log(fecha); // Mon Feb 12 2024 14:30:45 GMT-0500 (hora estándar de Colombia)
      
        const segundos = fecha.getSeconds();
        console.log(segundos); // Output: 45
      ```

- **set**
    - El método `setSeconds()` es un método de los objetos Date en JavaScript que se utiliza para establecer los segundos de un minuto específico.
    - Este método toma uno o más parámetros opcionales que representan los nuevos valores para los segundos, así como también opcionalmente los milisegundos. 

      ```javascript
        const fecha = new Date('2024-02-12T14:30:45');
        console.log(fecha); // Mon Feb 12 2024 14:30:45 GMT-0500 (hora estándar de Colombia)
      // Establecer los segundos en 2000
        fecha.setSeconds(2000);
        console.log(fecha); // Mon Feb 12 2024 15:03:20 GMT-0500 (hora estándar de Colombia)
      
    ```

#### UTC
- **get**
    - El método `getUTCSeconds()` es un método de los objetos Date en JavaScript que devuelve los segundos de un minuto específico en formato UTC.

    - Cuando se invoca getUTCSeconds() en un objeto Date, devuelve un número entero que representa los segundos del minuto de la fecha y hora especificadas, en formato UTC. Este número está en el rango de 0 a 59.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:45');
        console.log(fecha); // Mon Feb 12 2024 14:30:45 GMT-0500 (hora estándar de Colombia)
      
        const segundosUTC = fecha.getUTCSeconds();
        console.log(segundosUTC); // Output: 45
      ```

- **set**
    - El método `setUTCSeconds()` es un método de los objetos Date en JavaScript que se utiliza para establecer los segundos de un minuto específico en formato UTC.

    - Este método toma uno o más parámetros opcionales que representan los nuevos valores para los segundos, así como opcionalmente los milisegundos. Si no se proporcionan los parámetros opcionales, el valor de los milisegundos se establecerá en cero.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:45');
        console.log(fecha); // Mon Feb 12 2024 14:30:45 GMT-0500 (hora estándar de Colombi
        fecha.setUTCSeconds(2000); // Establecer los segundos en 20 en formato UTC
        console.log(fecha); // Mon Feb 12 2024 15:03:20 GMT-0500 (hora estándar de Colombia)
      ```

****
## Miliseconds

#### Local

- **get**
    - El método `getMilliseconds()` es un método de los objetos Date en JavaScript que devuelve los milisegundos de un segundo específico.
    - Cuando se invoca `getMilliseconds()` en un objeto Date, devuelve un número entero que representa los milisegundos del segundo de la fecha y hora especificadas. Este número está en el rango de 0 a 999.

      ```javascript
        cconst fecha = new Date('2024-02-12T14:30:45.123');
        console.log(fecha); // Mon Feb 12 2024 14:30:45 GMT-0500 (hora estándar de Colombia)
      
        const milisegundos = fecha.getMilliseconds();
        console.log(milisegundos); // Output: 123
      
      ```

- **set**
    - El método `setMilliseconds()` es un método de los objetos Date en JavaScript que se utiliza para establecer los milisegundos de un segundo específico.
    - Este método toma un parámetro numérico que representa el nuevo valor para los milisegundos del segundo. Si el valor proporcionado está fuera del rango válido (0 a 999), los segundos se ajustarán en consecuencia para mantenerlos dentro del rango válido.

      ```javascript
      const fecha = new Date('2024-02-12T14:30:45.123');
        console.log(fecha); // Mon Feb 12 2024 14:30:45 GMT-0500 (hora estándar de Colombia)
        fecha.setMilliseconds(12000000); // Establecer los milisegundos en 12000000
        console.log(fecha); // Mon Feb 12 2024 17:50:45 GMT-0500 (hora estándar de Colombia)
      ```

#### UTC
- **get**
    - El método `getUTCMilliseconds()` es un método de los objetos Date en JavaScript que devuelve los milisegundos de un segundo específico en formato UTC.

    - Cuando se invoca `getUTCMilliseconds()` en un objeto Date, devuelve un número entero que representa los milisegundos del segundo de la fecha y hora especificadas, en formato UTC. Este número está en el rango de 0 a 999.

      ```javascript
        const fecha = new Date('2024-02-12T14:30:45.123Z');
        console.log(fecha.getUTCMilliseconds()); // Output: 123
        fecha.setUTCMilliseconds(500);
        console.log(fecha.getUTCMilliseconds()); // Output: 500
      ```
    
- **set**
    - El método `setUTCMilliseconds()` es un método de los objetos Date en JavaScript que se utiliza para establecer los milisegundos de un segundo específico en formato UTC.

    - Este método toma un parámetro numérico que representa el nuevo valor para los milisegundos del segundo. Si el valor proporcionado está fuera del rango válido (0 a 999), los segundos se ajustarán en consecuencia para mantenerlos dentro del rango válido.


```javascript

    const fecha = new Date('2024-02-12T14:30:45.123');
  console.log(fecha); // Mon Feb 12 2024 14:30:45 GMT-0500 (hora estándar de Colombia)

  const milisegundos = fecha.getUTCMilliseconds();
  console.log(milisegundos); // Output: 123

```

****
## Day of the week

#### Local

- **get**
    - El método `getDay()` es un método de los objetos Date en JavaScript que devuelve el día de la semana para una fecha específica.

    - Cuando se invoca `getDay()` en un objeto Date, devuelve un número entero que representa el día de la semana de la fecha especificada. Los valores devueltos están en el rango de 0 (domingo) a 6 (sábado), donde 0 representa domingo, 1 representa lunes, y así sucesivamente hasta 6, que representa sábado.

      ```javascript
        const fecha = new Date('2024-02-12');
        console.log(fecha); // Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
      
        const diaDeLaSemana = fecha.getDay();
        console.log(diaDeLaSemana); // Output: 0 (Domingo)
      ```


#### UTC

- **get**
    - El método `getUTCDay()` es un método de los objetos Date en JavaScript que devuelve el día de la semana para una fecha específica en formato Coordinated Universal Time (UTC).

    - Cuando se invoca `getUTCDay()` en un objeto Date, devuelve un número entero que representa el día de la semana de la fecha especificada en formato UTC. Los valores devueltos están en el rango de 0 (domingo) a 6 (sábado), donde 0 representa domingo, 1 representa lunes, y así sucesivamente hasta 6, que representa sábado.

      ```javascript
        const fecha = new Date('2024-02-12');
        console.log(fecha); // Date Sun Feb 11 2024 19:00:00 GMT-0500 (hora estándar de Colombia)
      
        const diaDeLaSemanaUTC = fecha.getUTCDay();
        console.log(diaDeLaSemanaUTC); // Output: 1 (lunes)
      ```

