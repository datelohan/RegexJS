const {texto} = require('./base');
//(...)(...)(...) $1 $2 $3
dados = texto.replace(/(João|Maria)/ig,'<-------$1 --------->')
console.log(texto.replace(/(João|Maria)/ig,function (input){
    return '<------------------'+ input.toLocaleUpperCase() + "------------------>"
}));