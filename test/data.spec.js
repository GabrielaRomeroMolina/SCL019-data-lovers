import {filtroDeportes,filtroPaises,filtroMedallas,filtroGenero,sortAZ,sortZA} from '../src/data.js';

//Datos de muestra con los que se realizaran las pruebas traidos de data.js

 const testData= [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "1.98",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "height": "1.65",
    "weight": "49",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "noc": "AZE",
    "age": 21,
    "event": "Taekwondo Women's Flyweight",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "height": "1.82",
    "weight": "86",
    "sport": "Handball",
    "team": "France",
    "noc": "FRA",
    "age": 31,
    "event": "Handball Men's Handball",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "height": "1.70",
    "weight": "80",
    "sport": "Wrestling",
    "team": "Iran",
    "noc": "IRI",
    "age": 26,
    "event": "Wrestling Men's Middleweight, Greco-Roman",
    "medal": "Bronze"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "1.61",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Team All-Around",
    "medal": "Silver"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "1.61",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Horse Vault",
    "medal": "Silver"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "1.61",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Rings",
    "medal": "Bronze"
  },
  {
    "name": "Matthew \"Matt\" Abood",
    "gender": "M",
    "height": "1.97",
    "weight": "92",
    "sport": "Swimming",
    "team": "Australia",
    "noc": "AUS",
    "age": 30,
    "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
    "medal": "Bronze"
  },
  {
    "name": "Alejandro \"lex\" Abrines Redondo",
    "gender": "M",
    "height": "1.98",
    "weight": "93",
    "sport": "Basketball",
    "team": "Spain",
    "noc": "ESP",
    "age": 23,
    "event": "Basketball Men's Basketball",
    "medal": "Bronze"
  }]



//test de filtrado de atletas por deporte

//SE DESCRIBE "filtroDeportes" , ESTO es una funcion , SE ESPERA que al retornar el resultado este SEA una funcion 
describe('filtroDeportes', () => {
  it('is a function', () => {
    expect(typeof filtroDeportes).toBe('function');
  });

//ESTE deberia retornar datos de atleta por deporte 
  it('debería retornar solo datos de atletas con mismo deporte', () => {
//, se crea una variable "resultado" que tomará el valor "Gymnastics" de testData usando "filtroDeportes" de data.js
    let resultado= filtroDeportes(testData,'Gymnastics')
// se realizó un console.log para visualizar si la varible esta presentando informacion pedida
    console.log("ESTE", resultado);
//SE ESPERA que el deporte que se encuentra en el objeto en la posicion cero de la data SEA "Gymnastics"
    expect(resultado[0].sport).toBe('Gymnastics');
    
  });
});

//test de filtrado de atletas por paises

describe('filtroPaises', () => {
  it('is a function', () => {
    expect(typeof filtroPaises).toBe('function');
  });

  it('debería retornar solo datos de atletas con el mismo pais', () => {
  let resultado= filtroPaises(testData,'Australia')
console.log("ESTE", resultado);
    expect(resultado[0].team).toBe('Australia');
    
  });
});


//test de filtrado de atletas por genero

describe('filtroGenero', () => {
  it('is a function', () => {
    expect(typeof filtroGenero).toBe('function');
  });

  it('debería retornar solo datos de atletas con las mismas medallas', () => {
  let resultado= filtroGenero(testData,'F')
    console.log("ESTE", resultado);

    expect(resultado[0].gender).toBe('F');
    
  });
});

//test de filtrado de atletas por medalla

describe('filtroMedallas', () => {
  it('is a function', () => {
    expect(typeof filtroMedallas).toBe('function');
  });

  it('debería retornar solo datos de atletas con las mismas medallas', () => {
  let resultado= filtroMedallas(testData,'Bronze')
    console.log("ESTE", resultado);

    expect(resultado[2].medal).toBe('Bronze');
  });
});


//test de orden de atletas por nombre de la A-Z

describe('sortAZ', () => {
  it('is a function', () => {
    expect(typeof sortAZ).toBe('function');
  });

  it('debería retornar datos de atletas en orden alfabetico AZ', () => {
    let resultado= sortAZ(testData)
    console.log("ESTE", resultado);
    
    expect(resultado[3].name).toBe('Denis Mikhaylovich Ablyazin');
    expect(resultado[4].name).toBe('Giovanni Abagnale');
  });
});


//test de orden de atletas por nombre de la Z-A

describe('sortZA', () => {
  it('is a function', () => {
    expect(typeof sortZA).toBe('function');
  });

  it('debería retornar datos de atletas en orden alfabetico ZA', () => {
    let resultado= sortZA(testData)
    console.log("ESTE", resultado);
    
    expect(resultado[0].name).toBe('Saeid Morad Abdevali');
    expect(resultado[1].name).toBe('Patimat Abakarova');
  });
});
