import funcionesSistema as fs
import json

def busquedaGenero():
    DBpeliculas, pathMovies = fs.loadJson("pelicula.json")
    clave =  input("Ingrese el genero que desea buscar\t: ").strip().capitalize()
    peliculasF = []
    for id, movie  in DBpeliculas.items():
     for idGenero,listGen  in movie['Generos'].items():
        if clave == listGen['Nombre']:
             peliculasF.append(DBpeliculas[id]['Nombre'])
    
    if peliculasF:
        print(f"PELICULAS CON EL GENERO DE {clave}")
        for pelicula in peliculasF:
            print(pelicula)
        end = input("Presione ENTER para continuar")
    else: 
        print("No hay películas con ese género")
        end = ("Presione ENTER para continuar")

def buscarASilvester():
    DBpeliculas, pathMovies = fs.loadJson("pelicula.json")
    peliculasF = []
    for id, movie  in DBpeliculas.items():
     for idActor,listActor  in movie['Actores'].items():
        if "Sylvester stallone" == listActor['Nombre'] and "Protagonista" == listActor['rol']:
             peliculasF.append(DBpeliculas[id]['Nombre'])

    if not peliculasF:
        print("No hay películas cuyo protagonista sea Silvester Stallone")
    elif peliculasF: 
        print(f"PELICULAS CUYO PROTAGONISTA ES  SILVESTER STALLONE")
        for pelicula in peliculasF:
            print(pelicula)
    end = input("Presione ENTER para continuar")

def mostrar(clave):
    DBpeliculas, pathMovies = fs.loadJson("pelicula.json")
    data = DBpeliculas[clave]['Actores']
    actor_info = ""
    for idActor, infoActor in data.items():
        actor_info += f'{idActor}\t{infoActor["Nombre"]} - {infoActor["rol"]}\n'
    return actor_info

def movieSearch():
    DBpeliculas, pathMovies = fs.loadJson("pelicula.json")
    clave = input("ingrese el id de una pelicula: ").strip().upper()
    if not fs.busqueda(DBpeliculas, clave):
        print("La pelicula no fue encontrada\n ¿Tal vez ingresaste un dato invalido?") 
        sleep = input("Presiona ENTER para continuar.")
    else: 
        print(f"La pelicula fue encontrada. Esta es su informacion:\n")
        print(f"""- Nombre: {DBpeliculas[clave]['Nombre']}
                \n- Sinopsis: {DBpeliculas[clave]['Sinopsis']}
                \n- Actores: \n{mostrar(clave)}""")
        sleep = input("Presiona ENTER para continuar.")
    
menuPrincipal={
    "1":
    {
        "Nombre": "Listar peliculas de un genero especifico",
        "Accion": busquedaGenero
    },
        "2":
    {
        "Nombre": "Listar  todas las peliculas donde el protagonista sea Silvester Stallone",
        "Accion": buscarASilvester
    },
        "3":
    {
        "Nombre": "Buscar pelicula, mostrar sinopsis y los actores",
        "Accion": movieSearch
    },
        "4":
    {
        "Nombre": "Retornar al menu principal",
        "Accion": fs.exception
    }
    
}



def mainInformes():
    fs.generateMenu(menuPrincipal,"GESTOR DE INFORMES" )

