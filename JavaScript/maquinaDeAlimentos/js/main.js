let productos = {"A" :270, "B": 340, "C": 390};
let cadena = "";
let opc;
for (let opcion in productos){
    cadena += (`${opcion}.  $ ${productos[opcion]}\n`);
}
do {
    opc = prompt(cadena, "Digite el numero del producto. Los posibles vueltos se ven en la consola").toUpperCase();
}
while(opc !== "A" && opc !== "B" && opc !== "C");
//input
let sum = 0;
let pago = 0;
do{  
    pago = parseInt(prompt("Ingrese una moneda de $10, $50 o $100"));
    if (pago == 10 || pago == 50 || pago == 100){
        sum += pago;
    }
    else{
        alert("Solo se aceptan monedas de $10, $50 o $100")
    } 
}
while (sum < productos[opc])

let monedas = [100, 50, 10]

if (sum > productos[opc]) {
    let restante = sum - productos[opc];
    for (let i = 0; i < monedas.length; i++) { 
        while (restante - monedas[i] >= 0) { 
            console.log(`${monedas[i]}`); 
            restante -= monedas[i];
        }
    }
}
