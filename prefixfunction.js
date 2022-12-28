function prefixfunction(input,output){
    output[0]=input[0];
    for (let i = 1; i < input.length ; i++) {
        output[i] =output[i -1] +input[i];
     
        
    }
    return output;
}

console.log(prefixfunction([1,2,3,4,5],[]));