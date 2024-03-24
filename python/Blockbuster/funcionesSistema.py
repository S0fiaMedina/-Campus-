import os
import time
import json

def clear(): 
    if os.name == "posix":
        var = "clear"       
    elif os.name == "ce" or os.name == "nt" or os.name == "dos":
        var = "cls"
    os.system(var)

def loadJson(jsonName:str):
    path = os.path.join("BBJson", jsonName)
    with open(path, "r") as f: 
        dataBase = json.loads(f.read())
        return dataBase, path

def updateJson(path, dataBase:dict):
    with open(path, "w+") as f:
        f.write(json.dumps(dataBase, indent=4))

def busqueda(data:dict, clave) -> bool: #agregar parametro predefino, (busqueda de nombres)
    return str(clave) in data

def IsEmpty(data:dict) -> bool:
    if not data:
        return True
    else: return False

def rmData(data: dict, idData: str):
    pass

def getId(char: str, data:dict)-> int: 
    if len(data) < 10: id = f'{char}0{len(data)+1}'
    else: id = f'{char}{len(data)+1}'
    return id



def header(title:str):
    ancho = len(title)*3
    numCaracter = "*"* ancho
    print(numCaracter+"\n"+title.center(ancho)+"\n"+numCaracter)

#recor5re diccionario de dos niveles
def menu2(data:dict,campo:str, title:str, columna2:str):
    header(title)
    print(f'Numero/id\t{columna2}\n{"-"*36}')
    for key in data.keys():
        print(f'{key}\t{data[key][campo]}')

def validarInt(mensaje:str) -> int:
    while True:
        try:
            dato = int(input(mensaje).strip())
        except ValueError:
            pass
            print("ERROR:\t Has ingresado un tipo de dato incorrecto")
            opc = input("Presiona ENTER para continuar.")
        else:
            return dato


def loader():
    print("Lo siento, esta función aun no está implementada:(")
    time.sleep(2)

def exception():
    print("!\tAVISO: Ha ocurrido un error :(")
    time.sleep(2)
def listar(data:dict, campo:str, title:str, listName: str): #manejar keyError 
    clear()
    try:
        if data:
            menu2(data, campo, title, listName)
            end = input("\n>>> Presione cualquier tecla para continuar")
        else: raise KeyError
    except KeyError:
        print("AVISO:\tNo se puede mostrar la lista ya que no hay registros")
        opc = input("\nPresione ENTER para continuar")
        return 0 
    
def rmData(data:str, path): #HACER FUNCIOOON
    try: 
        idData = input("Digite el id de la pelicula.\t: ").strip().upper()
        del data[idData]
    except KeyError:
        print("Informacion no encontrada. Tal vez digitaste mal la informacion o la pelicula no existe")
    else:
        updateJson(path, data)

def generateMenu(menuPrincipal:dict,title:str):
    while True:
        clear()
        menu2(menuPrincipal,"Nombre",title, "Accion")
        opc = validarInt("\n>>> Digite el numero de la accion que desea realizar: ")
        if opc in range(1, len(menuPrincipal)+1):
            if opc == len(menuPrincipal):
                return 0 #salir
            else:
                menuPrincipal[str(opc)]['Accion']()
        else:
            print("ERROR: Numero fuera de rango")
            sleep = input("Presiona ENTER para continuar.")