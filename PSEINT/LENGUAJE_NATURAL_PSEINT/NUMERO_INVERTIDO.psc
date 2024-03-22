Algoritmo NUMERO_INVERTIDO
	definir numero Como real;
	Escribir "Digite un numero: ";
	leer numero;
	para i <- 1 hasta 3 Hacer
		digito = numero%10
		escribir digito Sin Saltar;
		numero = trunc(numero/10);
	finPara
FinAlgoritmo
