console.log("Hello World!")

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

// #
// .
// tag

const dynamicSubtitle = document.querySelector("#ts-types-dynamic-subtitle")

// let : reasignable dentro de un scope
// var : reasignable pero a un nivel global (no usar)
// const : no reasignable


if (dynamicSubtitle) {
    dynamicSubtitle.innerHTML = "Subtitulo dinamico"
}
