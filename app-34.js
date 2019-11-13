const { crearArchivo, listarTabla } = require('./libreria/multiplicar');

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar usando una base y un límite', {
        base: {
            demmand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'crea un fichero que tiene como contenido la tabla de multiplicar de la "base"', {
        base: {
            demmand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('otra', 'otra opción para hacer algo')
    .help()
    .argv;

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

//let argv2 = process.argv;
// let base = parametro.split('=')[1];

//console.log(argv2);
// console.log(argv.limite);

// console.log(`argv (sin librería) : ${ argv2}`);
// console.log(`argv (con yargs)    : ${ argv }`);