
let habilidades: string[] = ['Code', 'Eat', 'play'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


const personaje : Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades:  ['Code', 'Eat', 'play']
}

personaje.puebloNatal = 'Tierra nueva';

console.log(personaje);