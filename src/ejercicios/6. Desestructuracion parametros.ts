
/* DESESRUCTURACION DE PARAMETROS/ARGUMENTOS */

export interface Producto {
    nombre : string;
    precio : number;
}

const Celular : Producto = {
    nombre: "iPhone",
    precio: 1200
}

const Laptop : Producto = {
    nombre: "Hp 5ta Gen.",
    precio: 2500
}

const Articulos = [Celular, Laptop];

function calcularIVA ( productos: Producto[] ){
    let total: number = 0;
    productos.forEach( ({precio}) => {
        total += precio;
    })    
    return total * 0.12;
}

//console.log("Total IVA: ", calcularIVA( Articulos ));

//Desestructuracion 
export function calculaIVA_ACT ( productos: Producto[] ) : [number, number]{
    let total: number = 0;
    productos.forEach( ({precio}) => {
        total += precio;
    })    
    return [total, total * 0.12];
}

const [total, IVA] = calculaIVA_ACT(Articulos);
//console.log("Total: ", total);
//console.log("IVA: ", IVA);
