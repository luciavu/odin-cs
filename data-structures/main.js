import LinkedList from './linkedList.js';
import HashMap from './hashMap.js';
import Tree from './balancedBST.js';

const testLinkedList = () => {
  const list = new LinkedList();
  const animals = ['dog', 'cat', 'parrot', 'hamster', 'snake', 'turtle'];

  animals.forEach((animal) => list.append(animal, 'value'));

  // Test contains and value at function
  console.log(list.toString());
  console.log('\nNode at index 2:', list.at(2));
  console.log('\nContains turtle', list.contains('turtle'));

  // Test pop
  list.pop();
  console.log('\nAfter pop, contains turtle?', list.contains('turtle'));
  console.log(list.toString());

  // Test insert at
  list.insertAt('jellyfish', 'blue', 0);
  console.log('\nAfter inserting jellyfish at index 0', list.toString());

  list.insertAt('capybara', 'brown', 5);
  console.log('\nAfter inserting capybara at index 5', list.toString());

  list.insertAt('dragon', 'red', 7);
  console.log('\nAfter inserting dragon at index 7', list.toString());

  // Test remove at
  list.removeAt(0);
  console.log('\nAfter removing jellyfish at index 0', list.toString());

  list.removeAt(2);
  console.log('\nAfter removing parrot at index 2', list.toString());

  list.removeAt(5);
  console.log('\nAfter removing dragon at index 5', list.toString());
};

const hashmapTest = () => {
  const test = new HashMap();

  test.set('apple', 'red');
  test.set('banana', 'yellow');
  test.set('carrot', 'orange');
  test.set('dog', 'brown');
  test.set('elephant', 'gray');
  test.set('frog', 'green');
  test.set('grape', 'purple');
  test.set('hat', 'black');
  test.set('ice cream', 'white');
  test.set('jacket', 'blue');
  test.set('kite', 'pink');
  test.set('lion', 'golden');

  console.log('Initial state:');
  console.log('Length:', test.length());
  console.log('Capacity:', test.capacity);
  console.log('Keys:', test.getKeys());
  console.log('Values:', test.getValues());

  test.set('apple', 'green');
  test.set('banana', 'green');
  test.set('carrot', 'purple');

  console.log('\nAfter overwriting nodes:');
  console.log('Length:', test.length());
  console.log('Capacity:', test.capacity);
  console.log('Keys:', test.getKeys());
  console.log('Values:', test.getValues());

  test.set('moon', 'silver');

  console.log('\nAfter resizing:');
  console.log('Length:', test.length());
  console.log('Capacity:', test.capacity);
  console.log('Keys:', test.getKeys());
  console.log('Values:', test.getValues());

  test.set('apple', 'yellow');
  test.set('carrot', 'red');

  console.log('\nAfter overwriting nodes after resizing:');
  console.log('Length:', test.length());
  console.log('Capacity:', test.capacity);
  console.log('Keys:', test.getKeys());
  console.log('Values:', test.getValues());

  console.log('\nTesting the methods:');
  console.log('Get apple:', test.get('apple'));
  console.log('Has moon:', test.has('moon'));
  console.log('Get non-existent key:', test.get('nonexistent'));
  console.log('Has non-existent key:', test.has('nonexistent'));

  test.remove('carrot');
  console.log('\nAfter removing carrot:');
  console.log('Length:', test.length());
  console.log('Keys:', test.getKeys());
  console.log('Values:', test.getValues());

  test.clear();
  console.log('\nAfter clearing hash map:');
  console.log('Length:', test.length());
  console.log('Capacity:', test.capacity);
  console.log('Keys:', test.getKeys());
  console.log('Values:', test.getValues());
};

const BSTTest = () => {
  let testArr = [];
  for (let i = 0; i <= 10; i++) {
    testArr.push(Math.floor(Math.random() * 100));
  }

  let test = new Tree(testArr);
  console.log('Is balanced:', test.isBalanced());

  const printOrder = () => {
    // Level-order
    let tempStr = '';
    test.levelOrder((data) => {
      tempStr += `${data} `;
    });
    console.log('\nLevel order:', tempStr.trim());

    // Pre-order
    let preOrderStr = '';
    test.preOrder((data) => {
      preOrderStr += `${data} `;
    });
    console.log('Pre-order:', preOrderStr.trim());

    // Post-order
    let postOrderStr = '';
    test.postOrder((data) => {
      postOrderStr += `${data} `;
    });
    console.log('Post-order:', postOrderStr.trim());

    // In-order
    let inOrderStr = '';
    test.inOrder((data) => {
      inOrderStr += `${data} `;
    });
    console.log('In-order:', inOrderStr.trim());
  };

  printOrder();

  // Unbalance tree by adding several numbers > 100
  for (let i = 0; i <= 10; i++) {
    test.insert(100 + Math.floor(Math.random() * 100));
  }
  console.log('\nUnbalancing tree...');
  console.log('Is balanced:', test.isBalanced());
  console.log('\nRebalancing tree...');
  test.rebalance();
  console.log('Is balanced:', test.isBalanced());

  test.prettyPrint();
  printOrder();
};

BSTTest();
