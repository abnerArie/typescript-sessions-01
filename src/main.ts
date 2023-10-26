import { Human } from "./interfaces/human.interface";
// import { OperacionesNumericas } from "./utils/numerics.utils";


const REF_FORM_HUMAN = document.getElementById('form-humano')

REF_FORM_HUMAN.addEventListener('submit', (event) => {
    event.preventDefault()

    const FORM_DATA = new FormData(REF_FORM_HUMAN as HTMLFormElement)


    console.log(FORM_DATA)
})


const REF_ALTURA_INPUT = document.getElementById('fhAlturaInput') as HTMLInputElement

REF_ALTURA_INPUT.addEventListener('change', (event: any) => {
    const VALOR_MINIMO = 60
    const VALOR_MAXIMO = 230
    const REF_ERROR_MESSAGE = document.createElement('span')

    if (!(event?.target?.value) as any) return

    if (event.target?.value < VALOR_MINIMO || event?.target.value > VALOR_MAXIMO) {
        event.target?.parentElement?.appendChild(REF_ERROR_MESSAGE)
        REF_ERROR_MESSAGE.innerText = `El valor debe ser mayor a ${VALOR_MINIMO} y menor a ${VALOR_MAXIMO}`
        event.target.classList.add('form-input-error')
    } else {
        event.target.classList.remove('form-input-error')
    }

})


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

console.log(REF_FORM_HUMAN)

const sendForm = (algo) => {
    console.log(algo)
}