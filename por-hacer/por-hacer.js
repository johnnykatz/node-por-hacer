const fs=require('fs');


let listadoPorHacer=[];

const guardarDB=()=>{
	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile('db/data.json', data, (err) => {
		if (err) 
			throw new Error ('No se pudo gravar',err);
	});
}


const cargrarDB=()=>{
	try{
		listadoPorHacer=require('../db/data.json');
	}catch(error){
		listadoPorHacer=[];
	}
	
}


const crear = (descripcion)=>{

	cargrarDB();
	let porHacer={
		descripcion,
		completado:false
	};

	listadoPorHacer.push(porHacer);
	guardarDB();
	// guardarDB().then(mensaje=>console.log(mensage))
	// .catch(e=>console.log(e))
	return porHacer;
}

const getListado=()=>{
	cargrarDB();
	return listadoPorHacer;
}

const actualizar=(descripcion,completado=true)=>{
	cargrarDB();
	let index=listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);
	if(index>=0){
		listadoPorHacer[index].completado=completado;
		guardarDB();
		return true;
	}else{
		return false;
	}
}

const borrar=(descripcion)=>{
	cargrarDB();
	let nuevoListado=listadoPorHacer.filter(tarea=>{
		return tarea.descripcion!==descripcion;
	});

	if(listadoPorHacer.length===nuevoListado.length){
		return false;
	}else{
		listadoPorHacer=nuevoListado;
		guardarDB();
		return true;
	}
}


module.exports={
	crear,
	getListado,
	actualizar,
	borrar
}









