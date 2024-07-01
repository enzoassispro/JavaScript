const arrays = [[4, 32, 8], [64, 8, 32], [8, 32, 16], [2, 8, 4]];

let numbersArrays = 0;

for(let i = 0; i < arrays.length; i++){
    for( let j = 0; j < arrays[i].length; j++){ 
        numbersArrays += arrays[i][j]
    };
}
console.log("Resultado: " + numbersArrays);

