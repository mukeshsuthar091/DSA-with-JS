// It is a 2n x 2n matrin and n is a dimentions.

let arr = [[112,42,83,119],       
           [56,125,56,49],
           [15,78,101,43],
           [62,98,114,108]];

function flippingTheMatrix(matrix){
    let n = matrix.length/2;   // this is a dimention
    let max = 0;
    let total = 0;

    for(let row=0; row<n; row++){
        for(let col=0; col<n; col++){
            max = Number.MIN_VALUE;
            max = Math.max(matrix[row][col], max);
            max = Math.max(matrix[row][2*n-col-1], max);
            max = Math.max(matrix[2*n-row-1][col], max);
            max = Math.max(matrix[2*n-row-1][2*n-col-1], max);

            total += max;
            // arr[row][col] = max;
        }

    }

    return total;
}

console.log(flippingTheMatrix(arr))