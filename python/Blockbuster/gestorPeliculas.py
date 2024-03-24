import json
from pprint import pprint
import funcionesSistema  as fs
from gestorActores import listarActores
from gestorFormatos import  listarFormatos, addFormat
from gestorGenero import listarGeneros

DBpeliculas, pathMovies = fs.loadJson("pelicula.json")

def tiempo() -> str:
    m = fs.validarInt("Ingrese el tiempo de duración (EN MINUTOS) de la pelicula: ")
    h, min = divmod(m, 60)
    return f"{h} horas y {min} minutos"

def listarPeliculas():
    DBpeliculas, pathMovies = fs.loadJson("pelicula.json")
    fs.listar(DBpeliculas,"Nombre","LISTA DE PELICULAS", "Nombre de la pelicula") 
    


def verificaId(data:dict) -> str:
    opc = input("\n>>> Ingrese el id que desee agregar >>> ").strip()
    while not(fs.busqueda(data, opc.upper())):
                opc = input("X\tERROR: Has ingresado un id que no coincide. Intenta de nuevo >>> ")
    return opc.upper()

def movieSearch():
    DBpeliculas, pathMovies = fs.loadJson("pelicula.json")
    clave = input("ingrese el id de una pelicula: ").strip().upper()
    if not fs.busqueda(DBpeliculas, clave):
        print("La pelicula no fue encontrada\n ¿Tal vez ingresaste un dato invalido?") 
        sleep = input("Presiona ENTER para continuar.")
    else: 
        print(f"La pelicula fue encontrada. Esta es su informacion:\n")
        pprint(DBpeliculas[clave])
        sleep = input("Presiona ENTER para continuar.")

def rmMovie():
    dataBaseM, pathM = fs.loadJson("pelicula.json")
    fs.rmData(dataBaseM, pathM)

def rmActor():
    dataBaseM, pathM = fs.loadJson("pelicula.json")
    try: 
         idData = input("Digite el id de la pelicula.\t: ").strip().upper()
         print(f'Numero/id\t"Nombre"\n{"-"*36}')
         fs.listar(dataBaseM[idData]["Actores"],"Nombre","ACTORES DE LA PELICULA", "Nombre")
         idActor = input("Digite el id del actor que desea eliminar de la pelicula").upper()
         del dataBaseM[idData]['Actores'][idActor]
         end = input("El actor fue eliminado con exito. presione ENTER para continuar")
    except KeyError:
         end = input("Informacion no encontrada. Tal vez digitaste mal la informacion o la pelicula no existe.\nPresione ENTER para continuar")
        
    else:
        fs.updateJson(pathM, dataBaseM)

def agregarFormato():
    DBFormat, pathFormat = fs.loadJson("formatos.json")
    idList = []
    format = {}
    bandera = True
    while bandera:
        if listarFormatos()!= 0:
            opc = verificaId(DBFormat)
            if opc not in idList:
                idList.append(opc)
                idFormat = fs.getId("F", format)
                format[idFormat] = {
                    "id": opc,
                    "Nombre": DBFormat[opc]['Nombre'],
                }
                end = input("¿Desea agregar otro formato?. Digite 'y' si su respuesta es afirmativa\nDe lo contrario, digite cualquier otra letra.")
                if end.lower() == 'y':
                    print("!\tAVISO: Se agregara otro formato.")
                    sleep = input("Presiona ENTER para continuar.")
                else:
                    return format
            else: 
                print("!\tAVISO:No se puede repetir el mismo formato para la pelicula")
                end = input("Presione ENTER para continuar")
     

def agregarActor():
    DBActors, pathActors = fs.loadJson("actores.json")
    idList = []
    Actores = {}
    bandera = True
    while bandera:
        listarActores()
        opc = verificaId(DBActors)
        if opc not in idList:
            idList.append(opc)
            idActores = fs.getId("A", Actores)
            rol = input("Ingrese el rol que va a tener el actor: ").strip().capitalize()
            while (not(rol.strip())):
                rol = input("X\tERROR: El actor debe tener algun rol.\nEscribe un nuevo rol: ")
            Actores[idActores] = {
                "id": opc,
                "Nombre": DBActors[str(opc)]['Nombre'],
                "rol": rol.capitalize()
            }
            end = input("¿Desea agregar otro Actor?. Digite 'y' si su respuesta es afirmativa\nDe lo contrario, digite cualquier otra letra.")
            if end.lower() == 'y':
                print("Se agregara otro Actor.")
                sleep = input("Presiona ENTER para continuar.")
            else:
                bandera = False
                return Actores
        else: 
            print("!\tAVISO:No se puede repetir el mismo actor para la pelicula")
            end = input("Presione ENTER para continuar")
        

def agregarGenero():
    DBGeneros, pathGen = fs.loadJson("generos.json")
    idList = []
    Gen = {}
    bandera = True
    while bandera:
        listarGeneros()
        opc = verificaId(DBGeneros)
        if opc not in idList:
            idList.append(opc)
            idGen = fs.getId("G", Gen)
            Gen[idGen] = { #verificar que el user no coloque la misma cosa dos veces
                "id": opc,
                "Nombre": DBGeneros[str(opc)]['Nombre']
            }
            end = input("¿Desea agregar otro genero?. Digite 'y' si su respuesta es afirmativa\nDe lo contrario, digite cualquier otra letra.")
            if end.lower() == 'y':
                print("Se agregara otro Genero.")
                sleep = input("Presiona ENTER para continuar.")
            else:
                bandera = False
                return Gen
        else: 
            print("!\tAVISO:No se puede repetir el mismo genero para la pelicula")
            end = input("Presione ENTER para continuar")
        
def getSpecialId(nameJson:str, char:str)-> str:
    data, path = fs.loadJson(nameJson)
    newId = "P01"
    if data:
        mayor = 0
        for element in data:
            if mayor <= int(element.split(char)[1]):
                mayor = int(element.split(char)[1])+1
                newId = char+str(mayor).zfill(2)
    return newId

   
   
def registroPeliculas():
        idMov = getSpecialId("pelicula.json", "P")
        DBpeliculas[idMov] = {
                "Id": idMov,
                "Nombre": input("Digite el nombre de la pelicula:\t"),
                "Duracion":tiempo(),
                "Sinopsis":input("escriba una sinopsis para la pelicula:\t"),
                "Formato":agregarFormato(),
                "Actores": agregarActor(),
                "Generos": agregarGenero(),
                "NroCopias": fs.validarInt("Digite el numero de copias de la pelicula:\t "),
                "valorPrestamo": fs.validarInt("Digite el valor del prestamo de la pelicula:\t")
        }
        fs.updateJson(pathMovies, DBpeliculas)
        print("\n!\tAVISO: LA PELICULA HA SIDO INGRESADA CON EXITO!")
        sleep = input("\nPresiona ENTER para continuar.")
        return 0
        
menuPrincipal={
    "1":
    {
        "Nombre": "Agregar Pelicula",
        "Accion": registroPeliculas
    },
        "2":
    {
        "Nombre": "Eliminar Pelicula",
        "Accion": rmMovie
    },
        "3":
    {
        "Nombre": "Eliminar actor",
        "Accion": rmActor
    },
        "4":
    {
        "Nombre": "Buscar Pelicula",
        "Accion": movieSearch
    },
        "5":
    {
        "Nombre": "Listar todas las peliculas",
        "Accion": listarPeliculas
    },
        "6":
    {
        "Nombre": "Menu principal",
        "Accion": fs.loader
    },
}

def mainPeliculas():
    fs.generateMenu(menuPrincipal,"GESTOR DE PELICULAS" )


