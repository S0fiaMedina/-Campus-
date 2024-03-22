Algoritmo EDAD
	definir año Como Entero
	definir mes como entero;
	definir dia como entero;
	año_actual =  2023;
	dia_actual = 4;
	mes_actual = 12;
	escribir "Ingrese su fecha de nacimiento."
	escribir "Dia: "; 
	leer dia;
	escribir "mes: ";
	leer mes;
	Escribir "año: ";
	leer año;
	anios = año_actual - año;
	si (mes>= mes_actual) y (dia>dia_actual)
		anios = anios -1
	FinSi
	escribir "Su edad es: ", anios, " años"; 
FinAlgoritmo
