import LinkedList from './linkedList.js';

const list = new LinkedList();
const animals = ['dog', 'cat', 'parrot', 'hamster', 'snake', 'turtle'];
animals.forEach((animal) => list.append(animal));

console.log(list.toString());
console.log('Node at index 2:', list.at(2));
console.log('Contains turtle', list.contains('turtle'));
list.pop();
console.log('After pop, contains turtle?', list.contains('turtle'));
console.log(list.toString());
