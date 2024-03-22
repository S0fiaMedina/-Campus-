Algoritmo TIEMPO_DE_VIAJE
	definir tramo como entero;
	sumatoriaMinutos = 0;
	horas = 0;
	repetir
		escribir "Duracion del tramo: ";
		leer tramo;
		sumatoriaMinutos = sumatoriaMinutos + tramo;
	Hasta Que tramo = 0
	mientras sumatoriaMinutos >= 60 Hacer
		horas = horas + 1;
		sumatoriaMinutos= sumatoriaMinutos - 60
	FinMientras
	Escribir "Tiempo total de viaje: ", horas,":",sumatoriaMinutos, " hora(s)";
FinAlgoritmo
