// const argv= require('yargs').argv;
const argv=require('./config/yargs').argv
const colors=require('colors');
const porHacer=require('./por-hacer/por-hacer');

let comando=argv._[0];

switch (comando){
	case 'crear':
	console.log('Crear por hacer');

	let tarea=porHacer.crear(argv.descripcion);
	console.log(tarea);

	break;
	case 'listar':
	
	let tareas=porHacer.getListado();

	for (let tarea of tareas){
		console.log('=======por hacer======'.green);
		console.log(tarea.descripcion);
		console.log(`Estado: ${tarea.completado} `);
		console.log('======================'.green);
	}

	break;
	case 'actualizar':
	let actualizado=porHacer.actualizar(argv.descripcion);
	console.log(actualizado);
	break;

	case 'borrar':
	let borrado=porHacer.borrar(argv.descripcion);
	console.log(borrado);
	break;
	default:
	console.log('Comando no es reconocido')
	break;

}
