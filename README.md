# Odin CS

The Odin Project - JavaScript Course Projects 5-8:

Recursive JavaScript implementations of the Fibonacci sequence, merge sort, and data structures inlcuding linked lists, hash maps + hash sets and binary search trees.

## Linked List Features

- `append(value)` adds a new node containing value to the end of the list

- `prepend(value)` adds a new node containing value to the start of the list

- `size` returns the total number of nodes in the list

- `head` returns the first node in the list

- `tail` returns the last node in the list

- `at(index)` returns the node at the given index

- `pop` removes the last element from the list

- `contains(value)` returns true if the passed
  in value is in the list and otherwise returns false.

- `find(value)` returns the index of the node containing value, or null if not found.

- `toString` represents your LinkedList objects as a string in format: ( value ) -> ( value ) -> ( value ) -> null

- `insertAt(value, index)` that inserts a new node with the provided value at the given index.

- `removeAt(index)` that removes the node at the given index.

## Hash Map Features

- `hash(key)` takes a key and produces a hash code with it.

- `set(key, value)` takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is updated

- `get(key)` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.

- `has(key)` takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

- `remove(key)` takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

- `length()` returns the number of stored keys in the hash map.

- `clear()` removes all entries in the hash map.

- `keys()` returns an array containing all the keys inside the hash map.

- `values()` returns an array containing all the values.

- `entries()` returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

The `HashSet` class behaves the same as a HashMap but only contains keys with no values.

## Binary Search Tree Features

- `buildTree(array)` takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

- `insert(value)` inserts the given value
- `deleteItem(value)` deletes the given value. You’ll have to deal with several cases for delete, such as when a node has children or not.

- `find(value)` returns the node with the given value.

- `levelOrder(callback)` accepts a callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. If no callback function is provided, throw an Error reporting that a callback is required.

- `inOrder(callback)`, `preOrder(callback)`, and `postOrder(callback)` also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.

- `height(node)` returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.

- `depth(node)` returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.

- `isBalanced` checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.

- `rebalance` rebalances an unbalanced tree.

## Links

Assignments:

- 5: https://www.theodinproject.com/lessons/javascript-recursion

- 6: https://www.theodinproject.com/lessons/javascript-linked-lists

- 7: https://www.theodinproject.com/lessons/javascript-hashmap

- 8: https://www.theodinproject.com/lessons/javascript-binary-search-trees
