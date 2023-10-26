class Maquina {
    public nombre: string;
    #funcion: string;
    public tipo: string;

    constructor(nombre: string, tipo: string, funcion: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.#funcion = funcion;
    }
}

class MaquinaDeCafe extends Maquina {
    constructor(nombre: string, tipo: string, funcion: string,
        public marca: string = 'nespresso',
        public modelo: string,
        public tipoSuministro: 'capsula' | 'grano' | 'instantaneo') {
        super(nombre, tipo, funcion);
    }
}

const maquinaDeCafe2 = new MaquinaDeCafe(null, 'cafetera', 'hacer cafe', 'nespresso', '123', 'capsula');

class MaquinaDeRefrescos extends Maquina {
    constructor(nombre: string, tipo: string, funcion: string,
        public marca: string,
        public modelo: string,
        public tipoSuministro: 'botella' | 'granel') {
        super(nombre, tipo, funcion);
    }

    public dispensar(): void {
        console.log('Dispensando refresco');
    }
}

const animal = {
    nombre: '',
    setNombre: function (nombre: string) { this.nombre = nombre }
}

const robot = {
    marca: '',
    modelo: '',
    numeroSeries: '',
}

const perro = Object.create(animal);
const perro2 = { ...animal }

const PerroRobot = Object.assign(animal, robot);

const PerroRobot2 = { ...animal, ...robot }

const MaquinaDeFuego = {
    ...(new MaquinaDeCafe('barat', 'cafetera', 'hacer cafe', 'nespresso', '123', 'capsula')),
    serMuySexy: 'claro que si'
};

MaquinaDeFuego.serMuySexy

const BebidaGenerica = {
    nombre: '',
    tipo: '',
    sabor: ''
}

const cocaColaEnvenenada = { ...BebidaGenerica, tipoVeneno: 'arsenico', asesinar: () => console.log('muerto') }
cocaColaEnvenenada.sabor = 'cola'
cocaColaEnvenenada.nombre = 'coca cola'
cocaColaEnvenenada.tipo = 'refresco o  no ?'

const sprite = { ...BebidaGenerica }

sprite.sabor = 'limon'
sprite.nombre = 'sprite'
sprite.tipo = 'refresco'


const spriteComestible = { ...sprite, tipoComestible: 'comestible', dureza: 'blanda', peso: '1kg', }

const burritoDeTodo = {
    ...spriteComestible,
    ...cocaColaEnvenenada,
    ...MaquinaDeFuego,
    ...PerroRobot2
} 