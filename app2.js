const { crearArchivo } = require('./libreria/multiplicar');

let parametro = process.argv[2];
let base = parametro.split('=')[1];

crearArchivo(base).then(archivo => console.log(`El archivo ${ archivo} se ha creado`))
    .catch(e => console.log(e));