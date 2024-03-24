from os import path
import funcionesSistema as fs
import json

DBFormat, path = fs.loadJson("formatos.json")
    
def addFormat():
    idFormat = fs.getId("F", DBFormat)
    DBFormat[idFormat]= {
        "Id": idFormat,
        "Nombre": input("Ingrese el nombre del formato\t: ").strip().capitalize()
    }
    fs.updateJson(path, DBFormat)

    print(f"El formato {idFormat} - {DBFormat[idFormat]['Nombre']} ha sido registrado")
    sleep = input("Presiona ENTER para continuar.")

def listarFormatos():
    DBFormat, path = fs.loadJson("formatos.json")
    fs.listar(DBFormat,"Nombre","LISTA DE FORMATOS", "Nombre del Formato")

menuPrincipal={
    "1":
    {
        "Nombre": "Crear formato",
        "Accion": addFormat
    },
        "2":
    {
        "Nombre": "Listar formato",
        "Accion": listarFormatos
    },
        "3":
    {
        "Nombre": "Regresar al menu principal",
        "Accion":  fs.exception
    }
}
def mainFormatos():
    fs.generateMenu(menuPrincipal,"GESTOR DE FORMATOS" )

