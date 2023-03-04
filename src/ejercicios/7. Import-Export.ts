import { Producto, calculaIVA_ACT } from './6. Desestructuracion parametros';

const listaCompras : Producto[] = [
    {
        nombre: 'Samsung SA1',
        precio : 3235
    },
    {
        nombre: 'Samsung SA1',
        precio : 3235
    },
]


const [total, IVA] = calculaIVA_ACT(listaCompras);

console.log("Total: ", total);
console.log("IVA: ", IVA);
