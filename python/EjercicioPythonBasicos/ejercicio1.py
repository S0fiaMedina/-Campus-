# Escribe un programa que genere una lista de 10 números aleatorios. Luego, ordena esta lista en orden ascendente y descendente, y finalmente imprime ambas versiones.

# **Instrucciones:**

# 1. Genera una lista de 10 números aleatorios.
# 2. Ordena la lista en orden ascendente y guárdala en una variable.
# 3. Ordena la lista en orden descendente y guárdala en otra variable.
# 4. Imprime la lista original y ambas listas ordenadas.

from random import randrange #importa la funcion de numeros aleatorios

listaOriginal = list()
for i in range(10):
     listaOriginal.append(randrange(1,10))

print(f"lista Original:  {listaOriginal}")
print(f"lista en orden ascendente: {sorted(listaOriginal)}")
print(f"lista en orden descendente: {sorted(listaOriginal, reverse=True)}")




