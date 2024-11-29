import LinkedList from './linkedList.js';
// Restrict JS dynamic array property to replicate limited storage size in hash map bucket
const checkIndex = (index, buckets) => {
  if (index < 0 || index >= buckets.length) {
    throw new Error('Trying to access index out of bounds');
  }
};

export default class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    this.entries = []; // [key, value]
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

  set(key, value) {
    const hashcode = this.hash(key);
    checkIndex(hashcode, this.buckets);

    let bucket = this.buckets[hashcode];
    const idx = bucket.find(key);

    // If bucket is not empty,
    if (idx !== null) {
      // If found same key, replace value at that index
      bucket.at(idx).setValue(value);

      // Update records
      const entryIdx = this.entries.findIndex((entry) => entry[0] === key);
      this.entries[entryIdx][1] = value; // Add new entry
    } else {
      this.entries.push([key, value, this.hash(key)]);
      this.size++;

      // Check if adding new entry reaches load factor, if so, double capacity.
      if (this.length() / this.capacity > this.loadFactor) {
        this.growBuckets();
        return;
      }
      // Otherwise, add to end of linked list
      bucket.append(key, value);
    }
  }

  // Helper function
  growBuckets() {
    const entriesCopy = [...this.entries];
    // Clear buckets, double capacity
    this.capacity *= 2;
    this.clear();

    // Copy all nodes back into new buckets
    entriesCopy.forEach((entry) => {
      this.set(entry[0], entry[1]);
    });
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    const idx = bucket.find(key);
    if (idx === null) {
      return idx;
    }
    return bucket.at(idx).value;
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
    const entryIdx = this.entries.findIndex((entry) => entry[0] === key);
    this.entries.splice(entryIdx, 1);
    this.size--;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    this.entries = [];
    this.size = 0;
  }

  getKeys() {
    return this.entries.map((entry) => entry[0]);
  }

  getValues() {
    return this.entries.map((entry) => entry[1]);
  }

  getEntries() {
    return this.entries;
  }
}
