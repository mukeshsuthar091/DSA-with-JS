/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    if (numRows <= 1) {
        return s;
    }

    let i, row = 0;
    let down = true;
    
    let array = new Array(numRows).fill("");

    for(i=0; i<s.length; i++){
        array[row] += s[i];

        if(row==0){
            down = true;
        }

        if(row==numRows-1){
            down = false
        }

        down ? row++ : row--;
    }

    let answer = "";
    // array.map(s=>answer = answer+s);
    for(i=0; i<numRows; i++){
        answer = answer+array[i];
    }

    return answer;
};

console.log(convert("PAYPALISHIRING", 3))