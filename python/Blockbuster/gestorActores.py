from os import path
import funcionesSistema as fs
import json

DBActores, pathActor = fs.loadJson("actores.json")
    
def addActor():
    idAct = fs.getId("A", DBActores)
    DBActores[idAct]= {
        "Id": idAct,
        "Nombre": input("Ingrese el nombre del actor\t:").strip().capitalize()
    }
    fs.updateJson(pathActor, DBActores)

    print(f"El actor {idAct} - {DBActores[idAct]['Nombre']} ha sido registrado")
    sleep = input("Presiona ENTER para continuar.")

def listarActores():
   DBActores, pathActor = fs.loadJson("actores.json")
   fs.listar(DBActores,"Nombre","LISTA DE ACTORES", "Nombre del actor")
  
menuPrincipal={
    "1":
    {
        "Nombre": "Crear actor",
        "Accion": addActor
    },
        "2":
    {
        "Nombre": "Listar actores",
        "Accion": listarActores
    },
        "3":
    {
        "Nombre": "Regresar al menu principal",
        "Accion": fs.exception
    }
}

def mainActores():
    fs.generateMenu(menuPrincipal,"GESTOR DE ACTORES" )
#test
