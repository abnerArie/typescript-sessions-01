import { OperacionesNumericas } from "./utils/numerics.utils";

class TsTypes {
    numero: number = 10;
    cadena: string = "Hola";
    booleano: boolean = true;
    // symbol

    hoy: Date = new Date();
    cualquiera: any;

    desconocido: unknown;

    esteNoVaALlegarNunca(): never {
        throw new Error("Error");
    }
}

const dynamicSubtitle = document.querySelector("#ts-types-dynamic-subtitle")


if (dynamicSubtitle) {
    dynamicSubtitle.innerHTML = "Subtitulo dinamico"
}

const objetoComun = {
    nombre: "Nombre",
    apellido: "Apellido",
    edad: 10,
    nombreCompleto: function (): string {
        return this.nombre + " " + this.apellido;
    },
    saludar: () => `Hola!!!!`,
    sumarUno: (n: number): number => n + 1,
    saludaConParametro: (apodo: string, edad: number): string => `Hola me dicen ${apodo} y tengo ${edad} años`
}

objetoComun.sumarUno(12);

const hashComun = new Map(
    [
        ["nombre", "Nombre"],
        ["apellido", "Apellido"]
    ]
);



OperacionesNumericas.sumar(1, 2);

console.log(OperacionesNumericas.sumar(1, 2));
console.info(OperacionesNumericas.restar(10, 2));
console.warn(OperacionesNumericas.multiplicar(6, 2));
console.error(OperacionesNumericas.dividir(10, 0));




// scope
// {
// THIS
// }