function bubbleSort(array) {
    let isSwapped;

    for(let i = array.length; i > 0; i--) {
        isSwapped = false;

        for(let j = 0; j < i - 1; j++) {
            if(array[j] > array[j + 1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                isSwapped = true;
            }
        }

        if(!isSwapped) {
            break;
        }
    }
    return array;
}



console.log(bubbleSort([13, 22, 5, 14, 15, 20, 9, 43, 19]))
