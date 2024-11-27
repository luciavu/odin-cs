import LinkedList from './linkedList.js';

const list = new LinkedList();
const animals = ['dog', 'cat', 'parrot', 'hamster', 'snake', 'turtle'];
animals.forEach((animal) => list.append(animal));

// Test contains and value at function
console.log(list.toString());
console.log('\nNode at index 2:', list.at(2));
console.log('\nContains turtle', list.contains('turtle'));

// Test pop
list.pop();
console.log('\nAfter pop, contains turtle?', list.contains('turtle'));
console.log(list.toString());

// Test insert at
list.insertAt('jellyfish', 0);
console.log('\nAfter inserting jellyfish at index 0', list.toString());

list.insertAt('capybara', 5);
console.log('\nAfter inserting capybara at index 5', list.toString());

list.insertAt('dragon', 7);
console.log('\nAfter inserting dragon at index 7', list.toString());

// Test remove at
list.removeAt(0);
console.log('\nAfter removing jellyfish at index 0', list.toString());

list.removeAt(2);
console.log('\nAfter removing parrot at index 2', list.toString());

list.removeAt(5);
console.log('\nAfter removing dragon at index 5', list.toString());
