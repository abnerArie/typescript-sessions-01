const superUtils = {
    ...NumberUtils,
    ...StringUtils,
    
    dividir: (a: number, b: number): number => a / b, // override
}