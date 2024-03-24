from os import path
import funcionesSistema as fs
import json

DBGeneros, path = fs.loadJson("generos.json")

def addGenero():
    idGen = fs.getId("G", DBGeneros)
    DBGeneros[idGen]= {
        "Id": idGen,
        "Nombre": input("Ingrese el nombre del genero\t: ").strip().capitalize() 
    }
    fs.updateJson(path,DBGeneros )

    print(f"El genero {idGen} - {DBGeneros[idGen]['Nombre']} ha sido registrado")
    sleep = input("Presiona ENTER para continuar.")
#
def listarGeneros():
    DBGeneros, path = fs.loadJson("generos.json")
    fs.listar(DBGeneros,"Nombre","LISTA DE GENEROS", "Nombre del Genero")

menuPrincipal={
    "1":
    {
        "Nombre": "Crear genero",
        "Accion": addGenero
    },
        "2":
    {
        "Nombre": "Listar generos",
        "Accion": listarGeneros
    },
        "3":
    {
        "Nombre": "Regresar al menu principal",
    }
}

def mainGeneros():
    fs.generateMenu(menuPrincipal,"GESTOR DE GENEROS" )
    