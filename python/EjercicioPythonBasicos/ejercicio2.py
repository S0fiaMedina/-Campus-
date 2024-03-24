# Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.

# Un analista financiero lleva un registro del precio del dólar día a día, y desea saber cuál fue la mayor de las alzas en el precio diario a lo largo de ese período.
# Escriba un programa que pida al usuario ingresar el número n de días, y luego el precio del dólar para cada uno de los n días.
# El programa debe entregar como salida cuál fue la mayor de las alzas de un día para el otro.
# Si en ningún día el precio subió, la salida debe decir: No hubo alzas.

def calcularAlza(lista):
    difAlza = 0
    for i in range(len(lista)):
        if i > 0:
            if (lista[i]-lista[i-1]) > difAlza:
                difAlza = lista[i]-lista[i-1]
    return difAlza

precioDolar = []

n = int(input(f"¿Cuantos dias desea registrar?: "))
for i in range(n):
    precioDolar.append( float(input(f"Introduzca el alza del dia {i+1}: ")))

if calcularAlza(precioDolar) == 0:
    print("No se registraron alzas")
else:
    print(f"La mayor alza fue de ${round(calcularAlza(precioDolar),2)}")

