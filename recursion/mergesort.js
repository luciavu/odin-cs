const mergeSort = (array, l, r) => {
  if (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    // Sort halves
    mergeSort(array, l, mid);
    mergeSort(array, mid + 1, r);
    // Merge
    merge(array, l, mid, r);
  }
  return array;
};

const merge = (array, l, mid, r) => {
  // Get array sizes
  const n1 = mid - l + 1;
  const n2 = r - mid;

  // Copy into temp arrays
  const L = [...array.slice(l, mid + 1)];
  const R = [...array.slice(mid + 1, r + 1)];

  // Compare first indexes, append to to array + shift array, repeat
  let i = 0;
  let j = 0;
  let k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k++] = L[i++];
    } else {
      array[k++] = R[j++];
    }
  }

  // Arrays may be uneven, copy remaining elements if any
  while (i < n1) {
    array[k++] = L[i++];
  }
  while (j < n2) {
    array[k++] = R[j++];
  }
};

console.log(mergeSort([1, 3, 4, 2, 5, 9, 8, 6, 7], 0, 8));
