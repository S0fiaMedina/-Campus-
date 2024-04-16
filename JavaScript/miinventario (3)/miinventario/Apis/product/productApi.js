const URL_API = "http://154.38.171.54:3000"; //url del json server
const myHeaders = new Headers({ //pone los headers, xq se trata de un json
    "Content-Type": "application/json"
});

//OBETNER INFORMACION
const getProduct = async() => { //funcion asincronica que se ejecuta en segundo plano
    try {
        const respuesta = await fetch(`${URL_API}/product`); //espera la respuesta
		// Si la respuesta es correcta
		if(respuesta.status === 200){ //es exitoso :D
			const datos = await respuesta.json();
            viewDataHtml(datos);
		} else if(respuesta.status === 401){ //se accedio a otro lugar (?)
            console.log('La url no es correcta');
		} else if(respuesta.status === 404){ //no existe el componente
            console.log('El producto que buscas no existe');
		} else { //ocurrio otra cosa
            console.log('Se presento un error en la peticion consulte al Administrador');
		} 
	} catch(error){ //hubo un error en la busqueda (programacion defensiva)
        console.log(error);
	}
    
}

//AÑADIR INFORMACION
const postProduct = (datos) =>{

    fetch(`${URL_API}/product`,
	{ //estructura de  peticion, se especifica metodo, contenido y el cuerpo
		method: "POST",
		headers: myHeaders,
		body:JSON.stringify(datos)
	}
    ).then(res=>{
        return res.json()
    }).then(res=>{
        //idUser=res.id;
    }).catch(err=>{
        console.log(err);
    })

}


const putProduct = (datos,id) =>{

    fetch(`${URL_API}/product/${id}`,
	{
		method: "PUT",
		headers: myHeaders,
		body:JSON.stringify(datos)
	}
    ).then(res=>{
        return res.json()
    }).then(res=>{
        //idUser=res.id;
    }).catch(err=>{
        console.log(err);
    })

}
export { //exporta las funciones para que esten disponibles en otros ficheros
    getProduct as getProducts,
    postProduct as postProducts,
    putProduct as putProducts
};