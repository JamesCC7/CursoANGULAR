

//Tipescryt tiene un fuerte tipado de datos
function sumar(a: number, b: number) : number{
    return a + b;
}


const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar (numero1:number, numero2?:number, numero3:number = 2):number{
    return numero1 * numero3;
}

//const resultado = sumar(10, 30);
//const totalProducto = multiplicar(2,6);

interface PersonajeLOR{
    nombre : string,
    pv: number,
    mostrarHp: () => void
}

function curar(personaje: PersonajeLOR, curarx: number):void{
    personaje.pv += curarx; 
}

const newPersonaje: PersonajeLOR ={
    nombre:"James",
    pv:50,
    mostrarHp(){
        console.log('Puntos de vida ', this.pv);   
    }
}


console.log(newPersonaje , 30);

newPersonaje.mostrarHp();
