const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${ base } x ${ i } = ${base*i} \n`;
        }
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }.txt`);
        });
    });

}

crearArchivo(4).then(archivo => console.log(`El archivo ${ archivo} se ha creado`))
    .catch(e => console.log(e));