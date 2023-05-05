let empresa: string = '';
empresa = 'minsait';

type Identificador = number | string;

type Organizacion =
  | 'Sociedad Limitada'
  | 'Sociedad Anónima'
  | 'Sociedad de Responsabilidad Limitada';

class Empresa {
  id: Identificador = 0;
  // nombre: string = '';
  domicilio: string = '';
  empleados: number = 0;
  facturacion: number = 0;
  organizacion: Organizacion = 'Sociedad Limitada';
  // constitucion: Date = new Date();

  constructor(public nombre: string, public constitucion: Date = new Date()) {
    // this.nombre = nombre;
  }
}

interface IEmpresa {
  id: Identificador;
  nombre: string;
  domicilio: string;
  empleados: number;
  facturacion: number;
  constitucion: Date;
  organizacion: Organizacion;
  pagarImpuestos(): void;
}

type TEmpresa = {
  id: Identificador;
  nombre: string;
  domicilio: string;
  empleados: number;
  facturacion: number;
  organizacion: Organizacion;
  constitucion: Date;
};

const google: Empresa = {
  id: 0,
  nombre: 'Google',
  domicilio: 'Calle de la piruleta, 1',
  empleados: 1000,
  facturacion: 1000000000,
  organizacion: 'Sociedad Anónima',
  constitucion: new Date(1999, 1, 1),
};

const apple: TEmpresa = {
  id: 'apple',
  nombre: 'Apple',
  domicilio: 'Calle de la piruleta, 1',
  empleados: 1000,
  facturacion: 1000000000,
  organizacion: 'Sociedad Limitada',
  constitucion: new Date(1999, 1, 1),
};

const minsait: Empresa = new Empresa('Minsait');
// minsait.nombre = 'Minsait';
minsait.domicilio = 'Calle de la piruleta, 1';
minsait.empleados = 1000;
minsait.facturacion = 1000000000;
//minsait.constitucion = new Date(1999, 1, 1);
console.log(minsait.nombre);
console.log(minsait.constitucion.toISOString());
