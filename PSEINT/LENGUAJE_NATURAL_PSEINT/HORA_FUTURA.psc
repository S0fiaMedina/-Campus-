Algoritmo HORA_FUTURA
	definir hora_actual Como Entero;
	definir horas_sumadas Como Entero;
	escribir "Digite la hora actual (formato de 24 horas): ";
	leer hora_actual;
	escribir "¿Cuantas horas desea sumar?"
	leer horas_sumadas;
	si (hora_actual >= 0 y hora_actual <= 24) y (horas_sumadas >0) Entonces
		hora_nueva = hora_actual + horas_sumadas;
		mientras hora_nueva > 23 hacer
			hora_nueva = hora_nueva - 24;
		FinMientras
		escribir "Dentro de ", horas_sumadas, " horas,seran las ", hora_nueva, ":00 horas.";
	sino
		escribir "Ingrese un numero que sea valido."
	FinSi
FinAlgoritmo
