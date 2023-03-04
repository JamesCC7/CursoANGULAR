
/* DECORADORES
Un Decorador es una funcion que expande su clase agregandole nuevas funcionalidades especiales

Permite cambiar las clases en el momento en que son definidas (compiladas) realizando extensiones de las propiedades que queremos implementar

*/

function classDecorator<T extends {new (...args: any[]): {} }>(
    constructor : T
){
    return class extends constructor{
        newProperty = "new Property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase{
    public miPropiedad: string = "ABC123";

    imprimir(){
        console.log("Hola mundo");
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);
