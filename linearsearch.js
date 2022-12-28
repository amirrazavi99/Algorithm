function linearyserch(arr,number){

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==number){
            return `${true} ${number} exists at index ${i}`;
        }
        
    }
}

console.log(linearyserch([13, 22, 5, 14, 15, 20, 9, 43, 19],14))  //3