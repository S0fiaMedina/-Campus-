//Queria implementar funciones, pero no funciono :(
Algoritmo maquina_de_alimentos
	A = 270;
	B = 340;
	C =  390;
	definir productoUsuario Como Caracter;
	Escribir  "Elija su producto: " Sin Saltar;
	leer productoUsuario;
	segun productoUsuario Hacer
		opcion "A", "a":
			i = 0;
			n_maximo = trunc(A/10)+1
			Dimension monedasUsuario[n_maximo], monedasDevueltas[n_maximo];
			//ingresar monedas
			mientras i <= n_maximo y suma < A Hacer
				i = i + 1;
				escribir "Ingrese una moneda: " Sin Saltar
				leer monedasUsuario[i];
				
				si monedasUsuario[i] == 50 o monedasUsuario[i] == 100 o monedasUsuario[i] == 10 Entonces
					suma = suma + monedasUsuario[i];
					imprimir suma;
				SiNo
					escribir "Solo se aceptan monedas de $50,$100 y $10"
				FinSi
			FinMientras
			restante = suma - A
			mientras restante <> 0 Hacer
				k = k +1
				si restante > 100 Entonces
					restante = restante -100
					monedasDevueltas[k] <- 100
				SiNo
					si restante < 100 y restante > 50 Entonces
						restante = restante - 50;
						monedasDevueltas[k] <- 50
					SiNo
						si restante <= 50
							restante = restante - 10;
							monedasDevueltas[k] <- 10
						SiNo
							si restante == 0 Entonces
								escribir "total: ", suma, " cambio", restante
							FinSi
							
						FinSi
					FinSi
				FinSi
			FinMientras
		opcion "B", "b":
			i = 0;
			n_maximo = trunc(B/10)+1
			Dimension monedasUsuario[n_maximo], monedasDevueltas[n_maximo];
			//ingresar monedas
			mientras i <= n_maximo y suma < B Hacer
				i = i + 1;
				escribir "Ingrese una moneda: " Sin Saltar
				leer monedasUsuario[i];
				
				si monedasUsuario[i] == 50 o monedasUsuario[i] == 100 o monedasUsuario[i] == 10 Entonces
					suma = suma + monedasUsuario[i];
					imprimir suma;
				SiNo
					escribir "Solo se aceptan monedas de $50,$100 y $10"
				FinSi
			FinMientras
			restante = suma - B
			mientras restante <> 0 Hacer
				k = k +1
				si restante > 100 Entonces
					restante = restante -100
					monedasDevueltas[k] <- 100
				SiNo
					si restante < 100 y restante > 50 Entonces
						restante = restante - 50;
						monedasDevueltas[k] <- 50
					SiNo
						si restante <= 50
							restante = restante - 10;
							monedasDevueltas[k] <- 10
						SiNo
							si restante == 0 Entonces
								escribir "total: ", suma, " cambio", restante
							FinSi
							
						FinSi
					FinSi
				FinSi
			FinMientras

		opcion "C","c":
			i = 0;
			n_maximo = trunc(C/10)+1
			Dimension monedasUsuario[n_maximo], monedasDevueltas[n_maximo];
			//ingresar monedas
			mientras i <= n_maximo y suma < C Hacer
				i = i + 1;
				escribir "Ingrese una moneda: " Sin Saltar
				leer monedasUsuario[i];
				
				si monedasUsuario[i] == 50 o monedasUsuario[i] == 100 o monedasUsuario[i] == 10 Entonces
					suma = suma + monedasUsuario[i];
					imprimir suma;
				SiNo
					escribir "Solo se aceptan monedas de $50,$100 y $10"
				FinSi
			FinMientras
			restante = suma - C
			mientras restante <> 0 Hacer
				k = k +1
				si restante > 100 Entonces
					restante = restante -100
					monedasDevueltas[k] <- 100
				SiNo
					si restante < 100 y restante > 50 Entonces
						restante = restante - 50;
						monedasDevueltas[k] <- 50
					SiNo
						si restante <= 50
							restante = restante - 10;
							monedasDevueltas[k] <- 10
						SiNo
							si restante == 0 Entonces
								escribir "total: ", suma, " cambio", restante
							FinSi
							
						FinSi
					FinSi
				FinSi
			FinMientras
	FinSegun
	escribir "Su vuelto: "
	para cada elemento de monedasDevueltas Hacer
		Imprimir elemento 
	FinPara
FinAlgoritmo


	