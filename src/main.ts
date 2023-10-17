import { Human } from "./interfaces/human.interface";
// import { OperacionesNumericas } from "./utils/numerics.utils";


const MY_FIRST_HUMAN: Human = {
    nombres: 'Peter',
    apellidos: 'Parker',
    fechaNacimiento: new Date('1996-07-01'),
    edad: 27,
    altura: 175,
    sexo: 'M',
    peso: 75,
    colorOjos: 'Cafés'
}

console.log(MY_FIRST_HUMAN)