# Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.
# Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.

def monedasUsuario(opcion,productos): #determina cuantas monedas puede ingresar el usuario
     #opcion introducida por el usuario
    suma = 0
    while(suma<opc2):
        moneda = 0
        moneda = int(input("Ingrese una moneda: "))
        if moneda== 100  or moneda==50 or moneda ==10: 
            suma+=moneda
        else: print("Solo se aceptan monedas de $100, $50 y $10")  
        if suma > opc2:
            return suma

def calcularVueltos(precio, pagoUsuario):
    mon10 = 0
    mon50 = 0
    rest = pagoUsuario - precio

    while rest > 0:
        if rest >= 50:
            mon50 += 1
            rest -= 50
        elif rest >= 10:
            mon10 += 1
            rest -= 10
        else:
            break  
    print(f"Total: ${precio}, Pago: ${pagoUsuario}, Cambio: ${pagoUsuario - precio}")
    print(f"Monedas de $50: {mon50}, Monedas de $10: {mon10}")
    print(f"Cambio restante: ${rest}")

from  os import system
alimentos = [
    ["A", "B", "C"], 
    [270,340,390]
]
con = 0
opc = 0
bandera = True
while(bandera): #entrada de valores (programacion defensiva)
    system("cls")
    print("Elegir el producto")
    for i in alimentos[0]:
        print(f"\t{con}. {i} \t${alimentos[1][con]}")
        con+=1
    try:
        opc = int(input("\n"))
        if opc <= len(alimentos[0])-1 and opc>=0: bandera = False
        else: raise
    except:
        print("Introduzca un numero valido")
        bandera = True
    finally:
        con=0

opc2 = alimentos[1][opc]
payUser = monedasUsuario(opc2, alimentos)
calcularVueltos(opc2, payUser)

