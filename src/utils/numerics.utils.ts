// SINGLETON
export const OperacionesNumericas = {
    sumar: (a: number, b: number): number => a + b,
    restar: (a: number, b: number): number => a - b,
    multiplicar: (a: number, b: number): number => a * b,
    dividir: (a: number, b: number): number => a / b,
    potencia: (a: number, b: number): number => a ** b,
    raizCuadrada: (a: number): number => Math.sqrt(a)
}