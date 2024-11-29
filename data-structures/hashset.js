// Same as hashmap, but only stores keys, no values

import LinkedList from './linkedList.js';
// Restrict JS dynamic array property to replicate limited storage size in hashset bucket
const checkIndex = (index, buckets) => {
  if (index < 0 || index >= buckets.length) {
    throw new Error('Trying to access index out of bounds');
  }
};

export default class HashSet {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    this.keys = []; // key
    this.size = 0;
  }

  // For this project, only handle keys of string type
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key) {
    const hashcode = this.hash(key);
    checkIndex(hashcode, this.buckets);

    let bucket = this.buckets[hashcode];
    const idx = bucket.find(key);

    // If bucket is not empty,
    if (idx !== null) {
      // Same key, do nothing
      return;
    } else {
      this.keys.push(key);
      this.size++;

      // Check if adding new entry reaches load factor, if so, double capacity.
      if (this.length() / this.capacity > this.loadFactor) {
        this.growBuckets();
        return;
      }
      // Otherwise, add to end of linked list
      bucket.append(key);
    }
  }

  // Helper function
  growBuckets() {
    const entriesCopy = [...this.keys];
    // Clear buckets, double capacity
    this.capacity *= 2;
    this.clear();

    // Copy all nodes back into new buckets
    entriesCopy.forEach((key) => {
      this.set(key);
    });
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    const idx = bucket.find(key);
    if (idx === null) {
      return idx;
    }
    return idx; // Return index it was found at instead of value?
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];
    return bucket.contains(key);
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    const bucketIdx = bucket.find(key);

    // If key does not exist, return
    if (bucketIdx === null) {
      return;
    }

    // Else, remove from bucket
    bucket.removeAt(bucketIdx);

    // Update records and size
    const entryIdx = this.keys.findIndex((entry) => entry[0] === key);
    this.keys.splice(entryIdx, 1);
    this.size--;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    this.keys = [];
    this.size = 0;
  }

  getEntries() {
    return this.keys;
  }
}
