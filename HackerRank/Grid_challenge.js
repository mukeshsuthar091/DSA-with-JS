// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

// -----------------------------------------------------------------------------

let grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
// let grid = ['kc', 'iu'];
// let grid = ['uxf', 'vof', 'hmp'];
// let grid = ['lyivr','jgfew','uweor','qxwyr','uikjd']
// let grid = ['l']

let n = grid.length;

let sortedGrid = grid.map(
    s=>(s.split("").sort().join(""))
);

function gridChallenge(sortedGrid, n){

    let gridSolution = "No";

    for(let i=0; i<n; i++){
        let str = "";
        sortedGrid.forEach((s) => str = str+s[i]);

        let sortStr = str.split("").sort().join("");
        if(str === sortStr){
            gridSolution = "Yes";
        }
        else{
            gridSolution = "No";
            break;
        }
    }

    return gridSolution;
}

console.log(gridChallenge(sortedGrid, n))