import {filtroDeportes} from '../src/data.js';

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
  }]



describe('filtroDeportes', () => {
  it('is a function', () => {
    expect(typeof filtroDeportes).toBe('function');
  });

  it('debería retornar solo deportes', () => {
  let resultado= filtroDeportes (testData,'Deportes')

    expect(resultado[0].sport).toBe('Rowing');
    
  });
});



// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
