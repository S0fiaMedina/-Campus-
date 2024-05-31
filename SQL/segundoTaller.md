# Segundo Taller SQL

### Autoria 
- **Nombre**: Sofia Marcela Medina Díaz
- **Grupo**: J1

## Script de la base de datos



```sql
-- creación de bases de datos --
CREATE DATABASE gestor_empleados;
USE gestor_empleados;

CREATE TABLE departamento (
  codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  presupuesto DOUBLE UNSIGNED NOT NULL,
  gastos DOUBLE UNSIGNED NOT NULL
);

CREATE TABLE empleado (
  codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nif VARCHAR(9) NOT NULL UNIQUE,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  codigo_departamento INT UNSIGNED,
  FOREIGN KEY (codigo_departamento) REFERENCES departamento(codigo)
);


-- Inserción de datos --
INSERT INTO departamento VALUES(1, 'Desarrollo', 120000, 6000);
INSERT INTO departamento VALUES(2, 'Sistemas', 150000, 21000);
INSERT INTO departamento VALUES(3, 'Recursos Humanos', 280000, 25000);
INSERT INTO departamento VALUES(4, 'Contabilidad', 110000, 3000);
INSERT INTO departamento VALUES(5, 'I+D', 375000, 380000);
INSERT INTO departamento VALUES(6, 'Proyectos', 0, 0);
INSERT INTO departamento VALUES(7, 'Publicidad', 0, 1000);
INSERT INTO empleado VALUES(1, '32481596F', 'Aarón', 'Rivero', 'Gómez', 1);
INSERT INTO empleado VALUES(2, 'Y5575632D', 'Adela', 'Salas', 'Díaz', 2);
INSERT INTO empleado VALUES(3, 'R6970642B', 'Adolfo', 'Rubio', 'Flores', 3);
INSERT INTO empleado VALUES(4, '77705545E', 'Adrián', 'Suárez', NULL, 4);
INSERT INTO empleado VALUES(5, '17087203C', 'Marcos', 'Loyola', 'Méndez', 5);
INSERT INTO empleado VALUES(6, '38382980M', 'María', 'Santana', 'Moreno', 1);
INSERT INTO empleado VALUES(7, '80576669X', 'Pilar', 'Ruiz', NULL, 2);
INSERT INTO empleado VALUES(8, '71651431Z', 'Pepe', 'Ruiz', 'Santana', 3);
INSERT INTO empleado VALUES(9, '56399183D', 'Juan', 'Gómez', 'López', 2);
INSERT INTO empleado VALUES(10, '46384486H', 'Diego','Flores', 'Salas', 5);
INSERT INTO empleado VALUES(11, '67389283A', 'Marta','Herrera', 'Gil', 1);
INSERT INTO empleado VALUES(12, '41234836R', 'Irene','Salas', 'Flores', NULL);
INSERT INTO empleado VALUES(13, '82635162B', 'Juan Antonio','Sáez', 'Guerrero',
NULL);
```





## Consultas sobre una tabla



1. Lista el primer apellido de todos los empleados.

   ```sql
   SELECT apellido1 FROM empleado;
   /* 
   +-----------+
   | apellido1 |
   +-----------+
   | Rivero    |
   | Salas     |
   | Rubio     |
   | Suárez    |
   | Loyola    |
   | Santana   |
   | Ruiz      |
   | Ruiz      |
   | Gómez     |
   | Flores    |
   | Herrera   |
   | Salas     |
   | Sáez      |
   +-----------+
   
   
   */
   ```

   

2. Lista el primer apellido de los empleados eliminando los apellidos que estén repetidos.

   ```sql
   SELECT DISTINCT apellido1 FROM empleado;
   
   /*
   +-----------+
   | apellido1 |
   +-----------+
   | Rivero    |
   | Salas     |
   | Rubio     |
   | Suárez    |
   | Loyola    |
   | Santana   |
   | Ruiz      |
   | Gómez     |
   | Flores    |
   | Herrera   |
   | Sáez      |
   +-----------+
   
   */
   ```

3. Lista todas las columnas de la tabla empleado.

   ```sql
   SELECT codigo, nif, nombre, apellido1, apellido2, codigo_departamento FROM empleado;	
   /*
   +--------+-----------+--------------+-----------+-----------+---------------------+
   | codigo | nif       | nombre       | apellido1 | apellido2 | codigo_departamento |
   +--------+-----------+--------------+-----------+-----------+---------------------+
   |      1 | 32481596F | Aarón        | Rivero    | Gómez     |                   1 |
   |      2 | Y5575632D | Adela        | Salas     | Díaz      |                   2 |
   |      3 | R6970642B | Adolfo       | Rubio     | Flores    |                   3 |
   |      4 | 77705545E | Adrián       | Suárez    | NULL      |                   4 |
   |      5 | 17087203C | Marcos       | Loyola    | Méndez    |                   5 |
   |      6 | 38382980M | María        | Santana   | Moreno    |                   1 |
   |      7 | 80576669X | Pilar        | Ruiz      | NULL      |                   2 |
   |      8 | 71651431Z | Pepe         | Ruiz      | Santana   |                   3 |
   |      9 | 56399183D | Juan         | Gómez     | López     |                   2 |
   |     10 | 46384486H | Diego        | Flores    | Salas     |                   5 |
   |     11 | 67389283A | Marta        | Herrera   | Gil       |                   1 |
   |     12 | 41234836R | Irene        | Salas     | Flores    |                NULL |
   |     13 | 82635162B | Juan Antonio | Sáez      | Guerrero  |                NULL |
   +--------+-----------+--------------+-----------+-----------+---------------------+
   
   */
   ```



4. Lista el nombre y los apellidos de todos los empleados.

   ```sql
   SELECT nombre, apellido1, apellido2 FROM empleado;
   
   /*
   +--------------+-----------+-----------+
   | nombre       | apellido1 | apellido2 |
   +--------------+-----------+-----------+
   | Aarón        | Rivero    | Gómez     |
   | Adela        | Salas     | Díaz      |
   | Adolfo       | Rubio     | Flores    |
   | Adrián       | Suárez    | NULL      |
   | Marcos       | Loyola    | Méndez    |
   | María        | Santana   | Moreno    |
   | Pilar        | Ruiz      | NULL      |
   | Pepe         | Ruiz      | Santana   |
   | Juan         | Gómez     | López     |
   | Diego        | Flores    | Salas     |
   | Marta        | Herrera   | Gil       |
   | Irene        | Salas     | Flores    |
   | Juan Antonio | Sáez      | Guerrero  |
   +--------------+-----------+-----------+
   
   */
   ```

   

5. Lista el identificador de los departamentos de los empleados que aparecen en la tabla empleado.

   ```sql
   SELECT codigo_departamento FROM empleado;
   /*
   +---------------------+
   | codigo_departamento |
   +---------------------+
   |                NULL |
   |                NULL |
   |                   1 |
   |                   1 |
   |                   1 |
   |                   2 |
   |                   2 |
   |                   2 |
   |                   3 |
   |                   3 |
   |                   4 |
   |                   5 |
   |                   5 |
   +---------------------+
   
   */
   ```

   

6. Lista el identificador de los departamentos de los empleados que aparecen en la tabla empleado, eliminando los identificadores que aparecen repetidos.

   ```SQL
   SELECT  DISTINCT codigo_departamento FROM empleado;
   
   /*
   +---------------------+
   | codigo_departamento |
   +---------------------+
   |                NULL |
   |                   1 |
   |                   2 |
   |                   3 |
   |                   4 |
   |                   5 |
   +---------------------+
   
   */
   ```
   
   
   
7. Lista el nombre y apellidos de los empleados en una única columna.

   ```sql
   SELECT CONCAT(nombre,' ', apellido1,' ' , apellido2) FROM empleado;
   /*
   +-----------------------------------------------+
   | CONCAT(nombre,' ', apellido1,' ' , apellido2) |
   +-----------------------------------------------+
   | Aarón Rivero Gómez                            |
   | Adela Salas Díaz                              |
   | Adolfo Rubio Flores                           |
   | NULL                                          |
   | Marcos Loyola Méndez                          |
   | María Santana Moreno                          |
   | NULL                                          |
   | Pepe Ruiz Santana                             |
   | Juan Gómez López                              |
   | Diego Flores Salas                            |
   | Marta Herrera Gil                             |
   | Irene Salas Flores                            |
   | Juan Antonio Sáez Guerrero                    |
   +-----------------------------------------------+
   
   */
   ```

   

8. Lista el nombre y apellidos de los empleados en una única columna, convirtiendo todos los caracteres en mayúscula.

   ```sql
   SELECT CONCAT(UPPER(nombre),' ' ,UPPER(apellido1),' ', UPPER(apellido2)) FROM empleado;
   
   /*
   +-------------------------------------------------------------------+
   | CONCAT(UPPER(nombre),' ' ,UPPER(apellido1),' ', UPPER(apellido2)) |
   +-------------------------------------------------------------------+
   | AARÓN RIVERO GÓMEZ                                                |
   | ADELA SALAS DÍAZ                                                  |
   | ADOLFO RUBIO FLORES                                               |
   | NULL                                                              |
   | MARCOS LOYOLA MÉNDEZ                                              |
   | MARÍA SANTANA MORENO                                              |
   | NULL                                                              |
   | PEPE RUIZ SANTANA                                                 |
   | JUAN GÓMEZ LÓPEZ                                                  |
   | DIEGO FLORES SALAS                                                |
   | MARTA HERRERA GIL                                                 |
   | IRENE SALAS FLORES                                                |
   | JUAN ANTONIO SÁEZ GUERRERO                                        |
   +-------------------------------------------------------------------+
   
   
   */
   ```

   

9. Lista el nombre y apellidos de los empleados en una única columna, convirtiendo todos los caracteres en minúscula.

   ```sql
   SELECT CONCAT(LOWER(nombre),' ' ,LOWER(apellido1),' ', LOWER(apellido2)) FROM empleado;
   
   /*
   +-------------------------------------------------------------------+
   | CONCAT(LOWER(nombre),' ' ,LOWER(apellido1),' ', LOWER(apellido2)) |
   +-------------------------------------------------------------------+
   | aarón rivero gómez                                                |
   | adela salas díaz                                                  |
   | adolfo rubio flores                                               |
   | NULL                                                              |
   | marcos loyola méndez                                              |
   | maría santana moreno                                              |
   | NULL                                                              |
   | pepe ruiz santana                                                 |
   | juan gómez lópez                                                  |
   | diego flores salas                                                |
   | marta herrera gil                                                 |
   | irene salas flores                                                |
   | juan antonio sáez guerrero                                        |
   +-------------------------------------------------------------------+
   
   */
   ```

   

10. Lista el identificador de los empleados junto al nif, pero el nif deberá aparecer en dos columnas, una mostrará únicamente los dígitos del nif y la
    otra la letra.

    ```sql
    SELECT codigo,  SUBSTRING(nif, 1, LENGTH(nif) - 1) AS digitos_nif, RIGHT(nif, 1) AS letra_nif
    FROM empleado;
    
    /*
    +--------+-------------+-----------+
    | codigo | digitos_nif | letra_nif |
    +--------+-------------+-----------+
    |      5 | 17087203    | C         |
    |      1 | 32481596    | F         |
    |      6 | 38382980    | M         |
    |     12 | 41234836    | R         |
    |     10 | 46384486    | H         |
    |      9 | 56399183    | D         |
    |     11 | 67389283    | A         |
    |      8 | 71651431    | Z         |
    |      4 | 77705545    | E         |
    |      7 | 80576669    | X         |
    |     13 | 82635162    | B         |
    |      3 | R6970642    | B         |
    |      2 | Y5575632    | D         |
    +--------+-------------+-----------+
    */
    ```

    

11. Lista el nombre de cada departamento y el valor del presupuesto actual del que dispone. Para calcular este dato tendrá que restar al valor del presupuesto inicial (columna presupuesto) los gastos que se han generado (columna gastos). Tenga en cuenta que en algunos casos pueden existir valores negativos. Utilice un alias apropiado para la nueva columna columna que está calculando.

    ```SQL
    SELECT nombre,  presupuesto - gastos AS presupuesto_actual FROM departamento;
    
    /*
    +------------------+--------------------+
    | nombre           | presupuesto_actual |
    +------------------+--------------------+
    | Desarrollo       |             114000 |
    | Sistemas         |             129000 |
    | Recursos Humanos |             255000 |
    | Contabilidad     |             107000 |
    | I+D              |              -5000 |
    | Proyectos        |                  0 |
    | Publicidad       |              -1000 |
    +------------------+--------------------+
    
    */
    ```

    

12. Lista el nombre de los departamentos y el valor del presupuesto actual ordenado de forma ascendente.
    
    ```sql
    SELECT nombre,  presupuesto - gastos AS presupuesto_actual FROM departamento
    ORDER BY nombre ASC, presupuesto_actual ASC;
    
    /*
    +------------------+--------------------+
    | nombre           | presupuesto_actual |
    +------------------+--------------------+
    | Contabilidad     |             107000 |
    | Desarrollo       |             114000 |
    | I+D              |              -5000 |
    | Proyectos        |                  0 |
    | Publicidad       |              -1000 |
    | Recursos Humanos |             255000 |
    | Sistemas         |             129000 |
    +------------------+--------------------+
    
    */
    ```
    
    
    
13. Lista el nombre de todos los departamentos ordenados de forma ascendente.
    
    ```SQL
    SELECT nombre FROM departamento
    ORDER BY nombre ASC;
    /*
    +------------------+
    | nombre           |
    +------------------+
    | Contabilidad     |
    | Desarrollo       |
    | I+D              |
    | Proyectos        |
    | Publicidad       |
    | Recursos Humanos |
    | Sistemas         |
    +------------------+
    */
    ```
    
    
    
14. Lista el nombre de todos los departamentos ordenados de forma  descendente.
    
    ```SQL
    SELECT nombre FROM departamento
    ORDER BY nombre DESC;
    
    /*
    +------------------+
    | nombre           |
    +------------------+
    | Sistemas         |
    | Recursos Humanos |
    | Publicidad       |
    | Proyectos        |
    | I+D              |
    | Desarrollo       |
    | Contabilidad     |
    +------------------+
    */
    ```
    
    
    
15. Lista los apellidos y el nombre de todos los empleados, ordenados de forma alfabética tendiendo en cuenta en primer lugar sus apellidos y luego su nombre.

    ```SQL
    SELECT  apellido1, apellido2, nombre FROM empleado
    ORDER BY apellido1 ASC, apellido2 ASC, nombre ASC;
    
    /*
    +-----------+-----------+--------------+
    | apellido1 | apellido2 | nombre       |
    +-----------+-----------+--------------+
    | Flores    | Salas     | Diego        |
    | Gómez     | López     | Juan         |
    | Herrera   | Gil       | Marta        |
    | Loyola    | Méndez    | Marcos       |
    | Rivero    | Gómez     | Aarón        |
    | Rubio     | Flores    | Adolfo       |
    | Ruiz      | NULL      | Pilar        |
    | Ruiz      | Santana   | Pepe         |
    | Sáez      | Guerrero  | Juan Antonio |
    | Salas     | Díaz      | Adela        |
    | Salas     | Flores    | Irene        |
    | Santana   | Moreno    | María        |
    | Suárez    | NULL      | Adrián       |
    +-----------+-----------+--------------+
    */
    ```

    

16. Devuelve una lista con el nombre y el presupuesto, de los 3 departamentos que tienen mayor presupuesto.

    ```sql
    SELECT nombre, presupuesto FROM departamento
    ORDER BY presupuesto DESC
    LIMIT 3;
    
    /*
    +------------------+-------------+
    | nombre           | presupuesto |
    +------------------+-------------+
    | I+D              |      375000 |
    | Recursos Humanos |      280000 |
    | Sistemas         |      150000 |
    +------------------+-------------+
    
    */
    ```

    

17. Devuelve una lista con el nombre y el presupuesto, de los 3 departamentos que tienen menor presupuesto.

    ```sql
    SELECT nombre, presupuesto FROM departamento
    ORDER BY presupuesto ASC
    LIMIT 3;
    
    /*
    +--------------+-------------+
    | nombre       | presupuesto |
    +--------------+-------------+
    | Proyectos    |           0 |
    | Publicidad   |           0 |
    | Contabilidad |      110000 |
    +--------------+-------------+
    
    */
    ```

    

18. Devuelve una lista con el nombre y el gasto, de los 2 departamentos que tienen mayor gasto.

    ```sql
    SELECT nombre, gastos FROM departamento
    ORDER BY presupuesto DESC
    LIMIT 2;
    
    /*
    +------------------+--------+
    | nombre           | gastos |
    +------------------+--------+
    | I+D              | 380000 |
    | Recursos Humanos |  25000 |
    +------------------+--------+
    */
    ```

    

19. Devuelve una lista con el nombre y el gasto, de los 2 departamentos que tienen menor gasto.

    ```sql
    SELECT nombre, gastos FROM departamento
    ORDER BY presupuesto ASC
    LIMIT 2;
    
    /*
    +------------+--------+
    | nombre     | gastos |
    +------------+--------+
    | Publicidad |   1000 |
    | Proyectos  |      0 |
    +------------+--------+
    
    */
    ```

    

20. Devuelve una lista con 5 filas a partir de la tercera fila de la tabla empleado. La tercera fila se debe incluir en la respuesta. La respuesta debe incluir todas las columnas de la tabla empleado.

    ```SQL
    SELECT codigo, nif, nombre, apellido1, apellido2, codigo_departamento FROM empleado
    LIMIT 5 OFFSET 2;
    
    /*
    +--------+-----------+---------+-----------+-----------+---------------------+
    | codigo | nif       | nombre  | apellido1 | apellido2 | codigo_departamento |
    +--------+-----------+---------+-----------+-----------+---------------------+
    |      3 | R6970642B | Adolfo  | Rubio     | Flores    |                   3 |
    |      4 | 77705545E | Adrián  | Suárez    | NULL      |                   4 |
    |      5 | 17087203C | Marcos  | Loyola    | Méndez    |                   5 |
    |      6 | 38382980M | María   | Santana   | Moreno    |                   1 |
    |      7 | 80576669X | Pilar   | Ruiz      | NULL      |                   2 |
    +--------+-----------+---------+-----------+-----------+---------------------+
    */
    ```

    

21. Devuelve una lista con el nombre de los departamentos y el presupuesto, de aquellos que tienen un presupuesto mayor o igual a 150000 euros.

    ```SQL
    SELECT nombre, presupuesto FROM departamento
    WHERE presupuesto > 150000;
    /*
    +------------------+-------------+
    | nombre           | presupuesto |
    +------------------+-------------+
    | Recursos Humanos |      280000 |
    | I+D              |      375000 |
    +------------------+-------------+
    
    */
    ```

    

22. Devuelve una lista con el nombre de los departamentos y el gasto, de aquellos que tienen menos de 5000 euros de gastos.

    ```sql
    SELECT nombre, presupuesto FROM departamento
    WHERE gastos < 5000;
    
    /*
    +--------------+-------------+
    | nombre       | presupuesto |
    +--------------+-------------+
    | Contabilidad |      110000 |
    | Proyectos    |           0 |
    | Publicidad   |           0 |
    +--------------+-------------+
    
    
    */
    ```

    

23. Devuelve una lista con el nombre de los departamentos y el presupuesto, de aquellos que tienen un presupuesto entre 100000 y 200000 euros. Sin utilizar el operador BETWEEN.

    ```SQL
    SELECT nombre, presupuesto FROM departamento
    WHERE  presupuesto >= 100000 AND presupuesto <= 200000;
    
    /*
    +--------------+-------------+
    | nombre       | presupuesto |
    +--------------+-------------+
    | Desarrollo   |      120000 |
    | Sistemas     |      150000 |
    | Contabilidad |      110000 |
    +--------------+-------------+
    */
    ```

    

24. Devuelve una lista con el nombre de los departamentos que no tienen un presupuesto entre 100000 y 200000 euros. Sin utilizar el operador BETWEEN.

    ```sql
    SELECT nombre, presupuesto FROM departamento
    WHERE  NOT (presupuesto >= 100000 AND presupuesto <= 200000);
    
    /*
    +------------------+-------------+
    | nombre           | presupuesto |
    +------------------+-------------+
    | Recursos Humanos |      280000 |
    | I+D              |      375000 |
    | Proyectos        |           0 |
    | Publicidad       |           0 |
    +------------------+-------------+
    */
    ```

    

25. Devuelve una lista con el nombre de los departamentos que tienen un presupuesto entre 100000 y 200000 euros. Utilizando el operador BETWEEN.

    ```SQL
    SELECT nombre, presupuesto FROM departamento
    WHERE  presupuesto   BETWEEN 100000 AND  200000;
    
    /*
    +--------------+-------------+
    | nombre       | presupuesto |
    +--------------+-------------+
    | Desarrollo   |      120000 |
    | Sistemas     |      150000 |
    | Contabilidad |      110000 |
    +--------------+-------------+
    
    */
    ```

    

26. Devuelve una lista con el nombre de los departamentos que no tienen un presupuesto entre 100000 y 200000 euros. Utilizando el operador BETWEEN.

    ```sql
    SELECT nombre, presupuesto FROM departamento
    WHERE  presupuesto  NOT  BETWEEN 100000 AND  200000;
    
    /*
    +------------------+-------------+
    | nombre           | presupuesto |
    +------------------+-------------+
    | Recursos Humanos |      280000 |
    | I+D              |      375000 |
    | Proyectos        |           0 |
    | Publicidad       |           0 |
    +------------------+-------------+
    */
    
    ```

    

27. Devuelve una lista con el nombre de los departamentos, gastos y presupuesto, de aquellos departamentos donde los gastos sean mayores que el presupuesto del que disponen.

    ```sql
    SELECT nombre, gastos, presupuesto FROM departamento
    WHERE gastos > presupuesto;
    
    /*
    +------------+--------+-------------+
    | nombre     | gastos | presupuesto |
    +------------+--------+-------------+
    | I+D        | 380000 |      375000 |
    | Publicidad |   1000 |           0 |
    +------------+--------+-------------+
    */
    ```

    

28. Devuelve una lista con el nombre de los departamentos, gastos y presupuesto, de aquellos departamentos donde los gastos sean menores que el presupuesto del que disponen.

    ```sql
    SELECT nombre, gastos, presupuesto FROM departamento
    WHERE gastos < presupuesto;
    
    /*
    +------------------+--------+-------------+
    | nombre           | gastos | presupuesto |
    +------------------+--------+-------------+
    | Desarrollo       |   6000 |      120000 |
    | Sistemas         |  21000 |      150000 |
    | Recursos Humanos |  25000 |      280000 |
    | Contabilidad     |   3000 |      110000 |
    +------------------+--------+-------------+
    
    */
    ```

    

29. Devuelve una lista con el nombre de los departamentos, gastos y presupuesto, de aquellos departamentos donde los gastos sean iguales al presupuesto del que disponen.

    ```sql
    SELECT nombre, gastos, presupuesto FROM departamento
    WHERE gastos = presupuesto;
    
    /*
    +-----------+--------+-------------+
    | nombre    | gastos | presupuesto |
    +-----------+--------+-------------+
    | Proyectos |      0 |           0 |
    +-----------+--------+-------------+
    */
    ```

    

30. Lista todos los datos de los empleados cuyo segundo apellido sea NULL.

    ```SQL
    SELECT codigo, nif, nombre, apellido1, apellido2, codigo_departamento FROM empleado
    WHERE apellido2 IS NULL;
    
    /*
    +--------+-----------+---------+-----------+-----------+---------------------+
    | codigo | nif       | nombre  | apellido1 | apellido2 | codigo_departamento |
    +--------+-----------+---------+-----------+-----------+---------------------+
    |      4 | 77705545E | Adrián  | Suárez    | NULL      |                   4 |
    |      7 | 80576669X | Pilar   | Ruiz      | NULL      |                   2 |
    +--------+-----------+---------+-----------+-----------+---------------------+
    
    */
    ```

    

31. Lista todos los datos de los empleados cuyo segundo apellido no sea NULL.

    ```sql
    SELECT codigo, nif, nombre, apellido1, apellido2, codigo_departamento FROM empleado
    WHERE apellido2 IS NOT NULL;
    
    /*
    +--------+-----------+--------------+-----------+-----------+---------------------+
    | codigo | nif       | nombre       | apellido1 | apellido2 | codigo_departamento |
    +--------+-----------+--------------+-----------+-----------+---------------------+
    |      1 | 32481596F | Aarón        | Rivero    | Gómez     |                   1 |
    |      2 | Y5575632D | Adela        | Salas     | Díaz      |                   2 |
    |      3 | R6970642B | Adolfo       | Rubio     | Flores    |                   3 |
    |      5 | 17087203C | Marcos       | Loyola    | Méndez    |                   5 |
    |      6 | 38382980M | María        | Santana   | Moreno    |                   1 |
    |      8 | 71651431Z | Pepe         | Ruiz      | Santana   |                   3 |
    |      9 | 56399183D | Juan         | Gómez     | López     |                   2 |
    |     10 | 46384486H | Diego        | Flores    | Salas     |                   5 |
    |     11 | 67389283A | Marta        | Herrera   | Gil       |                   1 |
    |     12 | 41234836R | Irene        | Salas     | Flores    |                NULL |
    |     13 | 82635162B | Juan Antonio | Sáez      | Guerrero  |                NULL |
    +--------+-----------+--------------+-----------+-----------+---------------------+
    
    */
    ```

    

32. Lista todos los datos de los empleados cuyo segundo apellido sea López.

    ```sql
    SELECT codigo, nif, nombre, apellido1, apellido2, codigo_departamento FROM empleado
    WHERE apellido2 = 'López';
    
    /*
    +--------+-----------+--------+-----------+-----------+---------------------+
    | codigo | nif       | nombre | apellido1 | apellido2 | codigo_departamento |
    +--------+-----------+--------+-----------+-----------+---------------------+
    |      9 | 56399183D | Juan   | Gómez     | López     |                   2 |
    +--------+-----------+--------+-----------+-----------+---------------------+
    
    */
    ```

    

33. Lista todos los datos de los empleados cuyo segundo apellido sea Díaz o Moreno. Sin utilizar el operador IN.

    ```sql
    SELECT codigo, nif, nombre, apellido1, apellido2, codigo_departamento FROM empleado
    WHERE apellido2 = 'Díaz' OR apellido2 = 'Moreno';
    
    /*
    +--------+-----------+--------+-----------+-----------+---------------------+
    | codigo | nif       | nombre | apellido1 | apellido2 | codigo_departamento |
    +--------+-----------+--------+-----------+-----------+---------------------+
    |      2 | Y5575632D | Adela  | Salas     | Díaz      |                   2 |
    |      6 | 38382980M | María  | Santana   | Moreno    |                   1 |
    +--------+-----------+--------+-----------+-----------+---------------------+
    
    */
    ```

    

34. Lista todos los datos de los empleados cuyo segundo apellido sea Díaz o Moreno. Utilizando el operador IN.

    ```sql
    SELECT codigo, nif, nombre, apellido1, apellido2, codigo_departamento FROM empleado
    WHERE apellido2 IN ('Díaz', 'Moreno');
    
    /*
    +--------+-----------+--------+-----------+-----------+---------------------+
    | codigo | nif       | nombre | apellido1 | apellido2 | codigo_departamento |
    +--------+-----------+--------+-----------+-----------+---------------------+
    |      2 | Y5575632D | Adela  | Salas     | Díaz      |                   2 |
    |      6 | 38382980M | María  | Santana   | Moreno    |                   1 |
    +--------+-----------+--------+-----------+-----------+---------------------+
    */
    ```

    

35. Lista los nombres, apellidos y nif de los empleados que trabajan en el departamento 3.

    ```sql
    SELECT nombre, apellido1, apellido2 FROM empleado
    WHERE codigo_departamento = 3;
    
    /*
    +--------+-----------+-----------+
    | nombre | apellido1 | apellido2 |
    +--------+-----------+-----------+
    | Adolfo | Rubio     | Flores    |
    | Pepe   | Ruiz      | Santana   |
    +--------+-----------+-----------+
    */
    ```

    

36. Lista los nombres, apellidos y nif de los empleados que trabajan en los departamentos 2, 4 o 5.

    ```sql
    SELECT nombre, apellido1, apellido2 FROM empleado
    WHERE codigo_departamento IN (2,4,5);
    
    
    /*
    +---------+-----------+-----------+
    | nombre  | apellido1 | apellido2 |
    +---------+-----------+-----------+
    | Adela   | Salas     | Díaz      |
    | Adrián  | Suárez    | NULL      |
    | Marcos  | Loyola    | Méndez    |
    | Pilar   | Ruiz      | NULL      |
    | Juan    | Gómez     | López     |
    | Diego   | Flores    | Salas     |
    +---------+-----------+-----------+
    */
    ```

    

## Consultas multitabla (Composición interna)



1. Devuelve un listado con los empleados y los datos de los departamentos donde trabaja cada uno.

   ```sql
   SELECT e.nif, e.nombre, e.apellido1, e.apellido2,
   d.codigo, d.nombre FROM empleado AS e
   INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento;
   
   /*
   +-----------+---------+-----------+-----------+--------+------------------+
   | nif       | nombre  | apellido1 | apellido2 | codigo | nombre           |
   +-----------+---------+-----------+-----------+--------+------------------+
   | 32481596F | Aarón   | Rivero    | Gómez     |      1 | Desarrollo       |
   | 38382980M | María   | Santana   | Moreno    |      1 | Desarrollo       |
   | 67389283A | Marta   | Herrera   | Gil       |      1 | Desarrollo       |
   | Y5575632D | Adela   | Salas     | Díaz      |      2 | Sistemas         |
   | 80576669X | Pilar   | Ruiz      | NULL      |      2 | Sistemas         |
   | 56399183D | Juan    | Gómez     | López     |      2 | Sistemas         |
   | R6970642B | Adolfo  | Rubio     | Flores    |      3 | Recursos Humanos |
   | 71651431Z | Pepe    | Ruiz      | Santana   |      3 | Recursos Humanos |
   | 77705545E | Adrián  | Suárez    | NULL      |      4 | Contabilidad     |
   | 17087203C | Marcos  | Loyola    | Méndez    |      5 | I+D              |
   | 46384486H | Diego   | Flores    | Salas     |      5 | I+D              |
   +-----------+---------+-----------+-----------+--------+------------------+
   
   */
   ```

   

2. Devuelve un listado con los empleados y los datos de los departamentos donde trabaja cada uno. Ordena el resultado, en primer lugar por el nombre del departamento (en orden alfabético) y en segundo lugar por los apellidos y el nombre de los empleados.

   

   ```sql
   SELECT  e.nombre, e.apellido1, e.apellido2, d.nombre FROM empleado AS e
   INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
   ORDER BY d.nombre ASC, e.apellido1 ASC, e.apellido2 ASC, e.nombre ASC;
   
   /*
   +---------+-----------+-----------+------------------+
   | nombre  | apellido1 | apellido2 | nombre           |
   +---------+-----------+-----------+------------------+
   | Adrián  | Suárez    | NULL      | Contabilidad     |
   | Marta   | Herrera   | Gil       | Desarrollo       |
   | Aarón   | Rivero    | Gómez     | Desarrollo       |
   | María   | Santana   | Moreno    | Desarrollo       |
   | Diego   | Flores    | Salas     | I+D              |
   | Marcos  | Loyola    | Méndez    | I+D              |
   | Adolfo  | Rubio     | Flores    | Recursos Humanos |
   | Pepe    | Ruiz      | Santana   | Recursos Humanos |
   | Juan    | Gómez     | López     | Sistemas         |
   | Pilar   | Ruiz      | NULL      | Sistemas         |
   | Adela   | Salas     | Díaz      | Sistemas         |
   +---------+-----------+-----------+------------------+
   
   */
   ```

   

3. Devuelve un listado con el identificador y el nombre del departamento, solamente de aquellos departamentos que tienen empleados.

   ```sql
   SELECT DISTINCT d.codigo, d.nombre FROM departamento AS d
   INNER JOIN empleado AS e ON d.codigo = e.codigo_departamento;
   
   /*
   +--------+------------------+
   | codigo | nombre           |
   +--------+------------------+
   |      1 | Desarrollo       |
   |      2 | Sistemas         |
   |      3 | Recursos Humanos |
   |      4 | Contabilidad     |
   |      5 | I+D              |
   +--------+------------------+
   
   */
   ```

   

4. Devuelve un listado con el identificador, el nombre del departamento y el valor del presupuesto actual del que dispone, solamente de aquellos departamentos que tienen empleados. El valor del presupuesto actual lo puede calcular restando al valor del presupuesto inicialc (columna presupuesto) el valor de los gastos que ha generado (columna gastos).

   

   ```sql
   SELECT DISTINCT d.codigo, d.nombre, d.presupuesto - gastos AS presupuesto_actual
   FROM departamento AS d
   INNER JOIN empleado AS e ON e.codigo_departamento = d.codigo;
   
   
   /*
   +--------+------------------+--------------------+
   | codigo | nombre           | presupuesto_actual |
   +--------+------------------+--------------------+
   |      1 | Desarrollo       |             114000 |
   |      2 | Sistemas         |             129000 |
   |      3 | Recursos Humanos |             255000 |
   |      4 | Contabilidad     |             107000 |
   |      5 | I+D              |              -5000 |
   +--------+------------------+--------------------+
   
   */
   ```

   

5. Devuelve el nombre del departamento donde trabaja el empleado que tiene el nif 38382980M.

   ```sql
   SELECT d.nombre FROM empleado AS e
   INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
   WHERE e.nif = '38382980M';
   
   /*
   +------------+
   | nombre     |
   +------------+
   | Desarrollo |
   +------------+
   */
   ```

   

6. Devuelve el nombre del departamento donde trabaja el empleado Pepe Ruiz Santana.

   ```sql
   SELECT  d.nombre, e.nombre, e.apellido1, e.apellido2 FROM empleado AS e
   INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
   WHERE CONCAT_WS(' ', e.nombre, e.apellido1, e.apellido2) = 'Pepe Ruiz Santana';
   
   /*
   +------------------+--------+-----------+-----------+
   | nombre           | nombre | apellido1 | apellido2 |
   +------------------+--------+-----------+-----------+
   | Recursos Humanos | Pepe   | Ruiz      | Santana   |
   +------------------+--------+-----------+-----------+
   */
   ```

   

7. Devuelve un listado con los datos de los empleados que trabajan en el departamento de I+D. Ordena el resultado alfabéticamente.

   ```sql
   SELECT e.nif, e.nombre, e.apellido1, e.apellido2, e.codigo_departamento FROM empleado AS e INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
   WHERE d.nombre = 'I+D'
   ORDER BY e.apellido1 ASC, e.apellido2 ASC, e.nombre ASC;-- el primer apellido tiene prioridad
   /*
   +-----------+--------+-----------+-----------+---------------------+
   | nif       | nombre | apellido1 | apellido2 | codigo_departamento |
   +-----------+--------+-----------+-----------+---------------------+
   | 46384486H | Diego  | Flores    | Salas     |                   5 |
   | 17087203C | Marcos | Loyola    | Méndez    |                   5 |
   +-----------+--------+-----------+-----------+---------------------+
   */
   ```

   

8. Devuelve un listado con los datos de los empleados que trabajan en el departamento de Sistemas, Contabilidad o I+D. Ordena el resultado alfabéticamente.

   ```sql
   SELECT e.nif, e.nombre, e.apellido1, e.apellido2, e.codigo_departamento FROM empleado AS e INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
   WHERE d.nombre IN ('I+D', 'Sistemas', 'Contabilidad')
   ORDER BY e.apellido1 ASC, e.apellido2 ASC, e.nombre ASC; -- el primer apellido tiene prioridad
   
   /*
   +-----------+---------+-----------+-----------+---------------------+
   | nif       | nombre  | apellido1 | apellido2 | codigo_departamento |
   +-----------+---------+-----------+-----------+---------------------+
   | 46384486H | Diego   | Flores    | Salas     |                   5 |
   | 56399183D | Juan    | Gómez     | López     |                   2 |
   | 17087203C | Marcos  | Loyola    | Méndez    |                   5 |
   | 80576669X | Pilar   | Ruiz      | NULL      |                   2 |
   | Y5575632D | Adela   | Salas     | Díaz      |                   2 |
   | 77705545E | Adrián  | Suárez    | NULL      |                   4 |
   +-----------+---------+-----------+-----------+---------------------+
   
   */
   ```

   

9. Devuelve una lista con el nombre de los empleados que tienen los departamentos que no tienen un presupuesto entre 100000 y 200000 euros.

   ```sql
   SELECT e.nombre, e.apellido1, e.apellido2 FROM empleado AS e
   INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
   WHERE d.presupuesto NOT BETWEEN 100000 AND 200000;
   /*
   +--------+-----------+-----------+
   | nombre | apellido1 | apellido2 |
   +--------+-----------+-----------+
   | Adolfo | Rubio     | Flores    |
   | Pepe   | Ruiz      | Santana   |
   | Marcos | Loyola    | Méndez    |
   | Diego  | Flores    | Salas     |
   +--------+-----------+-----------+
   */
   ```

   

10. Devuelve un listado con el nombre de los departamentos donde existe algún empleado cuyo segundo apellido sea NULL. Tenga en cuenta que no debe mostrar nombres de departamentos que estén repetidos.

    ```sql
    SELECT  DISTINCT d.nombre FROM departamento AS d
    INNER JOIN empleado AS e ON e.codigo_departamento = d.codigo
    WHERE e.apellido2 IS NULL;	
    
    /*
    +--------------+
    | nombre       |
    +--------------+
    | Contabilidad |
    | Sistemas     |
    +--------------+
    */
    ```

    

## Consultas multitabla (Composición externa)

Resuelva todas las consultas utilizando las cláusulas LEFT JOIN y RIGHT JOIN.
1. Devuelve un listado con todos los empleados junto con los datos de los departamentos donde trabajan. Este listado también debe incluir los empleados que no tienen ningún departamento asociado.

  ```sql
  SELECT e.nombre, e.apellido1, e.apellido2, d.codigo,d.nombre AS nombre_departamento, d.presupuesto FROM empleado AS e
  LEFT JOIN departamento AS d ON d.codigo = e.codigo_departamento;
  
  /*
  +--------------+-----------+-----------+--------+---------------------+-------------+
  | nombre       | apellido1 | apellido2 | codigo | nombre_departamento | presupuesto |
  +--------------+-----------+-----------+--------+---------------------+-------------+
  | Aarón        | Rivero    | Gómez     |      1 | Desarrollo          |      120000 |
  | Adela        | Salas     | Díaz      |      2 | Sistemas            |      150000 |
  | Adolfo       | Rubio     | Flores    |      3 | Recursos Humanos    |      280000 |
  | Adrián       | Suárez    | NULL      |      4 | Contabilidad        |      110000 |
  | Marcos       | Loyola    | Méndez    |      5 | I+D                 |      375000 |
  | María        | Santana   | Moreno    |      1 | Desarrollo          |      120000 |
  | Pilar        | Ruiz      | NULL      |      2 | Sistemas            |      150000 |
  | Pepe         | Ruiz      | Santana   |      3 | Recursos Humanos    |      280000 |
  | Juan         | Gómez     | López     |      2 | Sistemas            |      150000 |
  | Diego        | Flores    | Salas     |      5 | I+D                 |      375000 |
  | Marta        | Herrera   | Gil       |      1 | Desarrollo          |      120000 |
  | Irene        | Salas     | Flores    |   NULL | NULL                |        NULL |
  | Juan Antonio | Sáez      | Guerrero  |   NULL | NULL                |        NULL |
  +--------------+-----------+-----------+--------+---------------------+-------------+
  
  */
  ```

  

2. Devuelve un listado donde sólo aparezcan aquellos empleados que no tienen ningún departamento asociado.

  ```sql
  SELECT e.nif, e.nombre, e.apellido1, e.apellido2 FROM empleado AS e
  LEFT JOIN departamento AS d ON d.codigo = e.codigo_departamento
  WHERE e.codigo_departamento IS NULL;
  
  /*
  +-----------+--------------+-----------+-----------+
  | nif       | nombre       | apellido1 | apellido2 |
  +-----------+--------------+-----------+-----------+
  | 41234836R | Irene        | Salas     | Flores    |
  | 82635162B | Juan Antonio | Sáez      | Guerrero  |
  +-----------+--------------+-----------+-----------+
  */
  ```

  

3. Devuelve un listado donde sólo aparezcan aquellos departamentos que no tienen ningún empleado asociado.

  ```sql
  SELECT d.codigo, d.nombre FROM empleado AS e
  RIGHT JOIN departamento AS d ON e.codigo_departamento = d.codigo
  WHERE e.codigo_departamento IS NULL;
  
  /*
  +--------+------------+
  | codigo | nombre     |
  +--------+------------+
  |      6 | Proyectos  |
  |      7 | Publicidad |
  +--------+------------+
  */
  ```

  

4. Devuelve un listado con todos los empleados junto con los datos de los departamentos donde trabajan. El listado debe incluir los empleados que no tienen ningún departamento asociado y los departamentos que no tienen ningún empleado asociado. Ordene el listado alfabéticamente por el nombre del departamento.

  ```sql
  SELECT e.nombre, e.apellido1, e.apellido2, d.nombre AS nombre_departamento, d.presupuesto FROM empleado AS e
  LEFT JOIN departamento AS d ON e.codigo_departamento = d.codigo -- empleados con departamento
  UNION
  SELECT e.nombre , e.apellido1, e.apellido2, d.nombre, d.presupuesto FROM empleado AS e
  RIGHT JOIN departamento AS d ON e.codigo_departamento = d.codigo
  WHERE e.codigo_departamento IS NULL -- empleados que no tienen departamento
  ORDER BY nombre_departamento ASC;
  
  /*
  +--------------+-----------+-----------+---------------------+-------------+
  | nombre       | apellido1 | apellido2 | nombre_departamento | presupuesto |
  +--------------+-----------+-----------+---------------------+-------------+
  | Irene        | Salas     | Flores    | NULL                |        NULL |
  | Juan Antonio | Sáez      | Guerrero  | NULL                |        NULL |
  | Adrián       | Suárez    | NULL      | Contabilidad        |      110000 |
  | Aarón        | Rivero    | Gómez     | Desarrollo          |      120000 |
  | María        | Santana   | Moreno    | Desarrollo          |      120000 |
  | Marta        | Herrera   | Gil       | Desarrollo          |      120000 |
  | Marcos       | Loyola    | Méndez    | I+D                 |      375000 |
  | Diego        | Flores    | Salas     | I+D                 |      375000 |
  | NULL         | NULL      | NULL      | Proyectos           |           0 |
  | NULL         | NULL      | NULL      | Publicidad          |           0 |
  | Adolfo       | Rubio     | Flores    | Recursos Humanos    |      280000 |
  | Pepe         | Ruiz      | Santana   | Recursos Humanos    |      280000 |
  | Adela        | Salas     | Díaz      | Sistemas            |      150000 |
  | Pilar        | Ruiz      | NULL      | Sistemas            |      150000 |
  | Juan         | Gómez     | López     | Sistemas            |      150000 |
  +--------------+-----------+-----------+---------------------+-------------+
  */
  ```

  

5. Devuelve un listado con los empleados que no tienen ningún departamento asociado y los departamentos que no tienen ningún empleado asociado. Ordene el listado alfabéticamente por el nombre del departamento.

  ```sql
  SELECT e.nombre, e.apellido1, e.apellido2,d.codigo, d.nombre AS departamento  FROM empleado AS e -- empleados sin departamentos 
  LEFT JOIN departamento AS d ON d.codigo = e.codigo_departamento
  WHERE e.codigo_departamento IS NULL 
  UNION 
  SELECT e.nombre, e.apellido1, e.apellido2,d.codigo, d.nombre AS departamento FROM empleado AS e -- departamentos sin empleados 
  RIGHT JOIN departamento AS d ON d.codigo = e.codigo_departamento
  WHERE e.codigo_departamento IS NULL
  ORDER BY departamento;
  
  /*
  +--------------+-----------+-----------+--------+--------------+
  | nombre       | apellido1 | apellido2 | codigo | departamento |
  +--------------+-----------+-----------+--------+--------------+
  | Irene        | Salas     | Flores    |   NULL | NULL         |
  | Juan Antonio | Sáez      | Guerrero  |   NULL | NULL         |
  | NULL         | NULL      | NULL      |      6 | Proyectos    |
  | NULL         | NULL      | NULL      |      7 | Publicidad   |
  +--------------+-----------+-----------+--------+--------------+
  */
  ```

  

## Consultas resumen

1. Calcula la suma del presupuesto de todos los departamentos.

   ```SQL
   SELECT SUM(presupuesto) FROM departamento;
   
   /*
   +------------------+
   | SUM(presupuesto) |
   +------------------+
   |          1035000 |
   +------------------+
   */
   ```

   

2. Calcula la media del presupuesto de todos los departamentos.

   ```sql
   SELECT ROUND(AVG(presupuesto),3) FROM departamento;
   /*
   +---------------------------+
   | ROUND(AVG(presupuesto),3) |
   +---------------------------+
   |                147857.143 |
   +---------------------------+
   */
   ```

   

3. Calcula el valor mínimo del presupuesto de todos los departamentos.

   ```sql
   SELECT MIN(presupuesto) FROM departamento;
   /*
   +------------------+
   | MIN(presupuesto) |
   +------------------+
   |                0 |
   +------------------+
   */
   ```

   

4. Calcula el nombre del departamento y el presupuesto que tiene asignado, del departamento con menor presupuesto.

  ```sql
  SELECT nombre, presupuesto FROM departamento
  ORDER BY presupuesto ASC
  LIMIT 1;
  /*
  +-----------+-------------+
  | nombre    | presupuesto |
  +-----------+-------------+
  | Proyectos |           0 |
  +-----------+-------------+
  */
  ```

  

5. Calcula el valor máximo del presupuesto de todos los departamentos.

   ```sql
   SELECT MAX(presupuesto) FROM departamento;
   
   /*
   +------------------+
   | MAX(presupuesto) |
   +------------------+
   |           375000 |
   +------------------+
   */
   ```
   
   
   
6. Calcula el nombre del departamento y el presupuesto que tiene asignado, del departamento con mayor presupuesto.

  ```sql
  SELECT nombre, presupuesto FROM departamento
  ORDER BY presupuesto DESC
  LIMIT 1;
  /*
  +--------+-------------+
  | nombre | presupuesto |
  +--------+-------------+
  | I+D    |      375000 |
  +--------+-------------+
  */
  ```

  

7. Calcula el número total de empleados que hay en la tabla empleado.

   ```sql
   SELECT COUNT(codigo) FROM empleado;
   /*
   +---------------+
   | COUNT(codigo) |
   +---------------+
   |            13 |
   +---------------+
   */
   ```

   

8. Calcula el número de empleados que no tienen NULL en su segundo apellido.

  ```SQL
  SELECT COUNT(codigo) FROM empleado 
  WHERE apellido2 IS NOT NULL;
  /*
  +---------------+
  | COUNT(codigo) |
  +---------------+
  |            11 |
  +---------------+
  */
  ```

  

9. Calcula el número de empleados que hay en cada departamento. Tienes que devolver dos columnas, una con el nombre del departamento y otra con el número de empleados que tiene asignados.

  ```SQL
  SELECT d.nombre, COUNT(e.codigo) FROM empleado AS e
  INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
  GROUP BY d.nombre;
  /*
  +------------------+-----------------+
  | nombre           | COUNT(e.codigo) |
  +------------------+-----------------+
  | Desarrollo       |               3 |
  | Sistemas         |               3 |
  | Recursos Humanos |               2 |
  | Contabilidad     |               1 |
  | I+D              |               2 |
  +------------------+-----------------+
  */
  ```

  

10. Calcula el nombre de los departamentos que tienen más de 2 empleados. El resultado debe tener dos columnas, una con el nombre del departamento y otra con el número de empleados que tiene asignados.

    ```sql
    SELECT d.nombre, COUNT(e.codigo) FROM empleado AS e
    INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
    GROUP BY d.nombre
    HAVING COUNT(e.codigo) > 2;
    /*
    +------------+-----------------+
    | nombre     | COUNT(e.codigo) |
    +------------+-----------------+
    | Desarrollo |               3 |
    | Sistemas   |               3 |
    +------------+-----------------+
    */
    ```

    

11. Calcula el número de empleados que trabajan en cada uno de los departamentos. El resultado de esta consulta también tiene que incluir aquellos departamentos que no tienen ningún empleado asociado.

    ```sql
    SELECT d.nombre, COUNT(e.codigo) FROM empleado AS e
    RIGHT JOIN departamento AS d ON d.codigo = e.codigo_departamento
    GROUP BY d.nombre;
    /*
    +------------------+-----------------+
    | nombre           | COUNT(e.codigo) |
    +------------------+-----------------+
    | Desarrollo       |               3 |
    | Sistemas         |               3 |
    | Recursos Humanos |               2 |
    | Contabilidad     |               1 |
    | I+D              |               2 |
    | Proyectos        |               0 |
    | Publicidad       |               0 |
    +------------------+-----------------+
    */
    ```

    

12. Calcula el número de empleados que trabajan en cada unos de los departamentos que tienen un presupuesto mayor a 200000 euros.

    ```sql
    SELECT d.nombre, COUNT(e.codigo) FROM empleado AS e
    INNER JOIN departamento AS d ON d.codigo = e.codigo_departamento
    WHERE d.presupuesto > 200000
    GROUP BY d.nombre;
    /*
    +------------------+-----------------+
    | nombre           | COUNT(e.codigo) |
    +------------------+-----------------+
    | Recursos Humanos |               2 |
    | I+D              |               2 |
    +------------------+-----------------+
    */
    ```





## Subconsultas



### Con operadores básicos de comparación

****

1. Devuelve un listado con todos los empleados que tiene el departamento de Sistemas. (Sin utilizar INNER JOIN).

  ```SQL
  SELECT nombre, apellido1, apellido2 FROM empleado
  WHERE codigo_departamento = (
  	SELECT codigo FROM departamento
      WHERE nombre = 'Sistemas'
  );
  /*
  +--------+-----------+-----------+
  | nombre | apellido1 | apellido2 |
  +--------+-----------+-----------+
  | Adela  | Salas     | Díaz      |
  | Pilar  | Ruiz      | NULL      |
  | Juan   | Gómez     | López     |
  +--------+-----------+-----------+
  */
  ```

  

2. Devuelve el nombre del departamento con mayor presupuesto y la cantidad que tiene asignada.

  ```sql
  SELECT nombre, presupuesto FROM departamento
  WHERE presupuesto = (
  	SELECT MAX(presupuesto) FROM departamento
  );
  /*
  +--------+-------------+
  | nombre | presupuesto |
  +--------+-------------+
  | I+D    |      375000 |
  +--------+-------------+
  */
  ```

  

3. Devuelve el nombre del departamento con menor presupuesto y la cantidad que tiene asignada. Subconsultas con ALL y ANY

  ```sql
  SELECT d1.nombre, d1.presupuesto FROM departamento AS d1
  WHERE presupuesto < ALL(
  	SELECT d2.presupuesto FROM departamento AS d2
      WHERE d1.presupuesto <> d2.presupuesto
  );
  /*
  +------------+-------------+
  | nombre     | presupuesto |
  +------------+-------------+
  | Proyectos  |           0 |
  | Publicidad |           0 |
  +------------+-------------+
  */
  ```

  

4. Devuelve el nombre del departamento con mayor presupuesto y la cantidad que tiene asignada. Sin hacer uso de MAX, ORDER BY ni LIMIT.

  ```sql
  SELECT d1.nombre, d1.presupuesto FROM departamento AS d1
  WHERE presupuesto > ALL(
  	SELECT d2.presupuesto FROM departamento AS d2
      WHERE d1.presupuesto <> d2.presupuesto
  );
  /*
  +--------+-------------+
  | nombre | presupuesto |
  +--------+-------------+
  | I+D    |      375000 |
  +--------+-------------+
  */
  ```

  

5. Devuelve el nombre del departamento con menor presupuesto y la cantidad que tiene asignada. Sin hacer uso de MIN, ORDER BY ni LIMIT.

  ```sql
  SELECT d1.nombre, d1.presupuesto FROM departamento AS d1
  WHERE presupuesto < ALL(
  	SELECT d2.presupuesto FROM departamento AS d2
      WHERE d1.presupuesto <> d2.presupuesto
  );
  /*
  +------------+-------------+
  | nombre     | presupuesto |
  +------------+-------------+
  | Proyectos  |           0 |
  | Publicidad |           0 |
  +------------+-------------+
  */
  ```

  

6. Devuelve los nombres de los departamentos que tienen empleados asociados. (Utilizando ALL o ANY).

  ```sql
  SELECT nombre FROM departamento
  WHERE codigo = ANY (
  	SELECT codigo_departamento FROM empleado
  );
  /*
  +------------------+
  | nombre           |
  +------------------+
  | Desarrollo       |
  | Sistemas         |
  | Recursos Humanos |
  | Contabilidad     |
  | I+D              |
  +------------------+
  */
  ```

  

7. Devuelve los nombres de los departamentos que no tienen empleados asociados. (Utilizando ALL o ANY). 

  ```SQL
  SELECT nombre FROM departamento
  WHERE codigo <> ALL (
  	SELECT codigo_departamento FROM empleado
      WHERE codigo_departamento is NOT NULL
  );
  /*
  +------------+
  | nombre     |
  +------------+
  | Proyectos  |
  | Publicidad |
  +------------+
  */
  ```

  

  ### Subconsultas con IN y NOT IN

****

8. Devuelve los nombres de los departamentos que tienen empleados asociados. (Utilizando IN o NOT IN).

  ```sql
  SELECT nombre FROM departamento
  WHERE codigo IN (
  	SELECT codigo_departamento FROM empleado
  ); 
  
  /*
  +------------------+
  | nombre           |
  +------------------+
  | Desarrollo       |
  | Sistemas         |
  | Recursos Humanos |
  | Contabilidad     |
  | I+D              |
  +------------------+
  */
  ```

9. Devuelve los nombres de los departamentos que no tienen empleados asociados. (Utilizando IN o NOT IN). 

  ```SQL
  SELECT nombre FROM departamento
  WHERE codigo NOT IN (
  	SELECT codigo_departamento FROM empleado
      WHERE codigo_departamento is NOT NULL 
  ); 
  /*
  +------------+
  | nombre     |
  +------------+
  | Proyectos  |
  | Publicidad |
  +------------+
  */
  ```

  

  ### Subconsultas con EXISTS y NOT EXISTS

****

10. Devuelve los nombres de los departamentos que tienen empleados asociados. (Utilizando EXISTS o NOT EXISTS).

    ```SQL
    SELECT nombre FROM departamento AS d
    WHERE EXISTS (
    	SELECT d.nombre FROM empleado AS e
        WHERE e.codigo_departamento = d.codigo
    ); 
    
    /*
    +------------------+
    | nombre           |
    +------------------+
    | Desarrollo       |
    | Sistemas         |
    | Recursos Humanos |
    | Contabilidad     |
    | I+D              |
    +------------------+
    */
    ```

    

11. Devuelve los nombres de los departamentos que no tienen empleados asociados. (Utilizando EXISTS o NOT EXISTS).

    ```sql
    SELECT nombre FROM departamento AS d
    WHERE NOT EXISTS (
    	SELECT d.nombre FROM empleado AS e
        WHERE e.codigo_departamento = d.codigo
    ); 
    
    /*
    +------------+
    | nombre     |
    +------------+
    | Proyectos  |
    | Publicidad |
    +------------+
    */
    ```

    
