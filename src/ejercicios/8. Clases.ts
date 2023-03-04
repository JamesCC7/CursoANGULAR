
/*
Clases => Su estructura puede ser visualizada en JS
Clases permiten crear instancias.
- Permite la creacion de metodos

 */

/*
Interfaces => No tiene codigo en JS
La interfas no me permite definir su comportamiento, ni crear
Getter & Setter 
-Defininos como clases tontas 
*/

class Data{
    constructor(
        public nombre : string,
        public direccion : string
    ){}
}

class Person extends Data{

    constructor(
        public nick : string,
        public nombre : string,
        public edad : number
    ){
        super(nombre, "NY");
    }
}

const Estudiante = new Person('JC', 'James', 23);

console.log(Estudiante);
