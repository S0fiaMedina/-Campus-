Algoritmo CALCULADORA_ARITMETICA
	escribir "ingrse la cantidad de numeros a operar " Sin Saltar;
	leer cantidad;
	dimension num[cantidad]
	definir eleccion Como Caracter;
	//ingreso de datos
	para cada elemento de num Hacer
		escribir "INGRESE UN NUMERO:" sin saltar
		leer elemento
	FinPara
	
	escribir "-------- CALCULADORA ---------";
	escribir "opcion A:		SUMA";
	escribir "opcion B:		RESTA";
	escribir "opcion C:		MULTIPLICACION";
	escribir "opcion D:		DIVISION";
	Escribir "opcion E:		SALIDA";
	escribir "SELECCIONE SU OPERACION (A-D) O SALIDA(E)"
	leer eleccion
	segun eleccion
		opcion "A", "a":
			escribir operacion(num,1, cantidad)
		opcion "B", "b":
			escribir operacion(num,2, cantidad)
		opcion "C", "c":
			escribir "-------- CALCULADORA DE MULTIPLICACION ---------";
			escribir "opcion 1:		MULTIPLICAR TODOS LOS NUMEROS";
			escribir "opcion 2:		HALLAR PORCENTAJE";
			escribir "opcion 3:		MULTIPLICAR CADA NUMERO POR UNA CONSTANTE";
			leer eleccion2
			segun eleccion2
				opcion 1:
					escribir operacion2(num,1, cantidad)
				opcion 2:
					Escribir operacion4(num,cantidad);
				opcion 3:
					escribir operacion3(num,1)
			FinSegun
			
		opcion "D", "d":
			escribir "-------- CALCULADORA DE DIVISON ---------";
			escribir "opcion 1:		DIVIDIR TODOS LOS NUMEROS ENTRE ELLOS";
			escribir "opcion 2:		DIVIDIR LOS NUMEROS EN GRUPOS DE A 2";
			escribir "opcion 3:		DIVIDIR CADA NUMERO POR UNA CONSTANTE";
			leer eleccion3;
			segun eleccion3
				opcion 1:
					escribir operacion2(num,2, cantidad)
				opcion 2:
					escribir operacion5(num,cantidad)
				opcion 3:
					escribir operacion3(num,2)
			FinSegun
		De Otro Modo:
			Escribir "opcion invalida"
			
	FinSegun
FinAlgoritmo
//funcion de suma y resta
funcion total <- operacion(arreglo, eleccion, cantidad)
    total <- 0  // Inicializamos total en 0
	
    para i <- 1 hasta cantidad Hacer
        si eleccion = 1 entonces
            total <- total + arreglo[i]
        Sino
            si i < cantidad Entonces
                num2 <- i + 1
                resultado_parcial <- arreglo[i] - arreglo[num2]
				
                si i > 1 Entonces
                    total <- total + resultado_parcial
                FinSi
                imprimir resultado_parcial
            FinSi
        FinSi
    FinPara
FinFuncion
// funcion multiplicacio 1, division 1 
funcion total <- operacion2(arreglo,eleccion, cantidad)
	total = 1;
	para i <- 1 hasta cantidad Hacer
		si eleccion = 1 entonces
			total = total*arreglo[i]
		SiNo
			si i < cantidad Entonces
				num2 = i + 1
				si i = cantidad Entonces
					arreglo[num2] = 1
				FinSi
				total = arreglo[i]/arreglo[num2]
			FinSi
		FinSi
	FinPara
FinFuncion
	// funcion multiplicacion 3 division 3
funcion total <- operacion3( arreglo,eleccion)
	para cada elemento de arreglo hacer
		si eleccion == 1 Entonces
			escribir elemento," x " Sin Saltar;
			leer constante;
			total = elemento*constante;
			escribir " =  ", total;
		SiNo
			escribir elemento," / " Sin Saltar;
			leer constante;
			total = elemento/constante;
			escribir " =  ", total;
		FinSi
	FinPara
FinFuncion
//multiplicacion 2
funcion total <- operacion4( arreglo,cantidad)
	para i <- 1 hasta cantidad Hacer // para cada elemento
		porcentaje = 0
		para j <- 1 hasta 10 hacer  //porcentaje
			porcentaje = porcentaje + 0.10
			escribir porcentaje*100,"% de ",arreglo[i]," es ", arreglo[i]*porcentaje
		FinPara
		escribir "---------------------"
	FinPara
FinFuncion
	
	//division 2
funcion total <- operacion5 (arreglo,cantidad)
	dimension total_parcial[cantidad]
	para i <- 1 hasta cantidad Hacer
		total = 0;
		si i < cantidad Entonces
			num2 = i + 1
			si i = cantidad Entonces
				arreglo[num2] = 1
			FinSi
			total = arreglo[i]/arreglo[num2]
			imprimir arreglo[i],"/", arreglo[num2], "=" total 
		FinSi
	FinPara
	
FinFuncion
		

	
	






	