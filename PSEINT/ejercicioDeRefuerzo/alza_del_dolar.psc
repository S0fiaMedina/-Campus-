
funcion dif_alza <- calcular_alza(precios, n)
	dif_alza =0;
	para i <- 1 hasta n  con paso 1 hacer // recorrer la lista
		si i <> 1 Entonces // 
			si (precios[i]-precios[i-1] ) > dif_alza Entonces
				dif_alza = precios[i]-precios[i-1];
			FinSi
		FinSi
		
	FinPara
FinFuncion

Algoritmo alza_del_dolar
	definir n Como Entero
	
	escribir "¿Cuantos dias desea registrar? " Sin Saltar
	leer n
	dimension precioDolar[n];
	para i <- 1 hasta n Hacer
		escribir "Introduzca el alza del dia #", i sin saltar
		leer precioDolar[i];
	FinPara
	diferencia = calcular_alza(precioDolar, n);
	para i <- 1 hasta n hacer
		escribir "alza del dia #",i, " 	",precioDolar[i];
	FinPara
	si diferencia > 0 Entonces
		escribir "La mayor alza fue: ", diferencia;
	SiNo
		Escribir "no se registraron alzas."
	FinSi
FinAlgoritmo