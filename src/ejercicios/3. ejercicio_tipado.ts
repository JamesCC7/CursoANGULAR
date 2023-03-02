import { stringify } from "querystring";

interface model {
    nombre : string;
    edad: number;
    direccion : Direccion;
    mostrarDireccion : () => string; 
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const persona: model= {
    nombre: 'James',
    edad: 22,
    direccion: {
        calle: 'Main St.',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = persona.mostrarDireccion();



console.log(direccion);
