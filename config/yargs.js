const opts = {
    base: {
        demmand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar usando una base y un límite', opts)
    .command('crear', 'crea un fichero que tiene como contenido la tabla de multiplicar de la "base"', opts)
    .command('otra', 'otra opción para hacer algo')
    .help()
    .argv;

module.exports = {
    argv
}