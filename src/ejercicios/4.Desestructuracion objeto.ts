
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles : Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor : Reproductor = {
    volumen: 90,
    segundo: 30,
    cancion: 'Mess',
    detalles :{
        anio:2024,
        autor: "Eddy Shadren"
    }
} 

//Desestructuracion
const {volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor es: ' , autor);
