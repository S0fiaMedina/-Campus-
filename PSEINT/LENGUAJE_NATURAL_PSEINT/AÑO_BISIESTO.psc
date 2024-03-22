Algoritmo AÑO_BISIESTO
	escribir "Ingrese el año: " 
	leer año;
	si año%4 == 0 Entonces
		si ((año%100==0) y (año%400<> 0)) Entonces
			escribir "El año ", año, " NO es bisiesto";
		SiNo
			Escribir "El año ", año, " es Bisiesto"
		FinSi
	sino 
		Escribir "El año ", año, " NO es bisiesto";
	FinSi
FinAlgoritmo
