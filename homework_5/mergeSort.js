// Суть merge sort:
// Разделяй: разбиваем массив на две части, пока не останутся одиночные элементы.
// Упорядочивай: сливаем эти части в правильном порядке (это ключ).
// Работает рекурсивно.
// Сложность — O(n log n).

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Слияние двух отсортированных массивов
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Добавляем оставшиеся элементы
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// Примеры для проверки
console.log(mergeSort([]));                      // []
console.log(mergeSort([7, 2, 6, 1, 5]));         // [1, 2, 5, 6, 7]
console.log(mergeSort([1, 5, 9, 3]));            // [1, 3, 5, 9]
console.log(mergeSort([13, 2, 2, 3]));           // [2, 2, 3, 13]
console.log(mergeSort([88]));                    // [88]