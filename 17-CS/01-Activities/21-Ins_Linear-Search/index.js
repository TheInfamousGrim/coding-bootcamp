function linearSearch(arr, element) {
    for (const i in arr) {
        if (arr[i] === element) {
            return arr[i];
        }
    }
    return -1;
}

linearSearch([6, 8, 10, 29, 90, 20], 20);

// O(n) notation
