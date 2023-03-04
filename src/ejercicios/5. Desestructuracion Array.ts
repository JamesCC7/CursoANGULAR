
//DESESTRUCTURACION ARRAY

const vehiculos = ['camion','trailer','moto'];
const [a1,  ,v1] = vehiculos;

console.log("Vehiculo 1:", a1);
console.log("Vehiculo 2:", vehiculos[1]);
console.log("Vehiculo 3:", v1);


/*   INICIO RECAPITULAZION EJERCICIO4 */

interface DatosPersona{
    nombre: string;
    edad: number;
    hobbies: string[];
}

const Persona1 : DatosPersona={
    nombre: 'Juan',
    edad: 22,
    hobbies: ['soccer','basket']
}

const {nombre, edad} = Persona1;


/*  FIN RECAPITULAZION EJERCICIO4 */