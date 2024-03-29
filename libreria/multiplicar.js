const fs = require('fs');

let listarTabla = (base, limite) => {

    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${ base } x ${ i } = ${base*i} \n`;
    }
    return data;
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } x ${ i } = ${base*i} \n`;
        }
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}