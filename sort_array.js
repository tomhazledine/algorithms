/**
 * ----------------------------------------------
 * Bubble Sort
 *
 * Bubble sort, sometimes referred to as sinking
 * sort, is a simple sorting algorithm that works
 * by repeatedly stepping through the list to be
 * sorted, comparing each pair of adjacent items
 * & swapping them if they are in the wrong order
 * ----------------------------------------------
 */
function bubble_sort(array){
    var n = array.length;
    for (var i = n - 1; i >= 0; i--){
        for (var j = 1; j <= i; j++){
            if (array[j - 1] > array[j]){
                var temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

