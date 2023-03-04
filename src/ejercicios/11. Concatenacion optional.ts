

interface PadreFamilia {
    nombre : string;
    hijos?: string[]
}

const Padre1 : PadreFamilia = {
    nombre: 'Peter',
    hijos: ['Lucas', 'Andres']
}

const Padre2 : PadreFamilia = {
    nombre: 'Diego'
}


function imprimeHijos( padre : PadreFamilia) : void{
    let hijos = padre.hijos?.length || 0;
    console.log(hijos);    
}

imprimeHijos(Padre2);
