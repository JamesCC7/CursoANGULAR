
//Tipo de datos genericos
//el parametro <T> puede variar<F>


function queTipoSoy<T>(argumento: T){
    return argumento;
}


const soyString = queTipoSoy('Hola mundo');
const soyNumber = queTipoSoy(123);
const soyArray = queTipoSoy([1,2,4,6]);

const soyExplicito = queTipoSoy<number>(100);
