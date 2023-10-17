export interface Human {
    nombres: string
    apellidos: string
    fechaNacimiento: Date
    edad: number
    altura: number
    sexo: Sexo
    peso: number
    colorOjos: ColorDeOjos
}

type Sexo = 'M' | 'F' | 'O'

type ColorDeOjos = 'Cafés' | 'Verdes' | 'Azules' | 'Arcoiris'