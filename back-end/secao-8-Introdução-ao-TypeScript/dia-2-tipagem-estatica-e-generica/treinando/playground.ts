// playground.ts

// Exemplo 1 com any
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const persons = ['andre', 'will', 'guima', 'nato'];
const trueOrFalse = [true, false];
const numberAndLetters = ['a', 2, 3, 'd', 'e', 6];

//                          string                 string         string
function getRandomElement<T>(items: T[]): T {
  const item = Math.floor(Math.random() * items.length);

  return items[item];
} 

let sortNumber = getRandomElement<number>(numbers);

const sortPerson = getRandomElement<string>(persons);

const sortBoolean = getRandomElement<boolean>(trueOrFalse);

const sortNumAndStr = getRandomElement<(string | number)>(numberAndLetters);


console.log([sortNumber, sortPerson, sortBoolean, sortNumAndStr]);