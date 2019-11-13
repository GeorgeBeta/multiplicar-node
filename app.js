const { crearArchivo, listarTabla } = require('./libreria/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(listarTabla(argv.base, argv.limite));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`El archivo ${ archivo} se ha creado`))
            .catch(e => console.log(e));
        break;
    case 'otra':
        console.log('otra cosa mariposa');
        break;
    default:
        console.log('Comando no reconocido');
}