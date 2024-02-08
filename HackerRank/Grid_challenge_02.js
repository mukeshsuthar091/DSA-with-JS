// let grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
let grid = ['lyivr','jgfew','uweor','qxwyr','uikjd'];

function gridChallenge(grid, n){
    let sortedGrid = grid.map(s=>s.split("").sort().join(""));
    let result = "No";

    for(let i=0; i<n; i++){
        let str = "";
        sortedGrid.forEach((s) => str=str+s[i])

        if(str === str.split("").sort().join("")){
            result = "Yes";
        }
    }

    return result;
}

console.log(gridChallenge(grid, grid.length));