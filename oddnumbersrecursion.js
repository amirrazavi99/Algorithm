function oddArray(arr) {
    let result = [];
    function helperRecursiveFn(arr) {
        if(arr.length === 0) {
            return; 
        } else if(arr[0] % 2 !== 0) {
            result.push(arr[0]);
        }
        helperRecursiveFn(arr.slice(1)); 
    }
    helperRecursiveFn(arr);
    return result;
}

console.log(oddArray([13, 22, 5, 14, 15, 20, 9, 43, 19]));  //[ 13, 5, 15, 9, 43, 19 ]