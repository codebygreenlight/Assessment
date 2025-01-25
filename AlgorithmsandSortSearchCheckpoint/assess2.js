function insertionSort(arr) {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        let current = arr[i];
        // Initialize the index for the sorted portion of the array
        let j = i - 1;
        
        // Move elements of the sorted portion that are greater than current to one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element at the correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage
let numbers = [8, 4, 2, 7, 1, 3];
console.log("Original Array:", numbers);
console.log("Sorted Array:", insertionSort(numbers));
