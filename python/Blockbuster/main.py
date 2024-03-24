import funcionesSistema as fs
from os import system

#Importacion modulos
import gestorPeliculas as gP
import gestorActores as gA
import gestorFormatos as gF
import gestorGenero as gG
import gestorInformes as gI
#
menuPrincipal={
    "1":
    {
        "Nombre": "Administrador de generos",
        "Accion": gG.mainGeneros
    },
        "2":
    {
        "Nombre": "Administrador de Actores",
        "Accion": gA.mainActores
    },
        "3":
    {
        "Nombre": "Administrador de Formatos",
        "Accion": gF.mainFormatos
    },
        "4":
    {
        "Nombre": "Gestor de informes",
        "Accion": gI.mainInformes
    },
        "5":
    {
        "Nombre": "Gestor de peliculas",
        "Accion": gP.mainPeliculas
    },
        "6":
    {
        "Nombre": "Salir",
        "Accion": fs.exception
    }
    
}
    
fs.generateMenu(menuPrincipal,"SISTEMA GESTOR DE PELICULAS BLOCKBUSTER" )


#latinoamericacampus233@gmail.com