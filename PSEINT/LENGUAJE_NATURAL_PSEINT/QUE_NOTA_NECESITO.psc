Algoritmo QUE_NOTA_NECESITO
	definir notaCertamen1 como entero;
	definir notaCertamen2 como entero;
	definir promedioLaboratorio como entero;
	Escribir "nota del certamen 1: ";
	leer notaCertamen1;
	escribir "nota del certamen 2: ";
	leer notaCertamen2;
	Escribir "nota del certamen 3: ";
	leer promedioLaboratorio;
	si (notaCertamen1 >= 0) y (notaCertamen2 >= 0) y (promedioLaboratorio>=0) Entonces
		//Obtener promedio de certamenes para pasar
		resultado =  trunc((60 -(0.3*promedioLaboratorio))/0.7);
		//Obtener nota necesaria 
		nota_necesaria = trunc((3*resultado) - notaCertamen2 - notaCertamen1);
		si nota_necesaria > 0 Entonces
			escribir "necesitas aprox. un puntaje de ", nota_necesaria, " En el certamen 3 para poder pasar con una nota de 60."
		SiNo
			escribir "no necesitas ninguna nota para pasar con 60. Ya ganaste :D"
		FinSi
	SiNo
		escribir "Ingrese notas validas."
	FinSi
	
FinAlgoritmo
