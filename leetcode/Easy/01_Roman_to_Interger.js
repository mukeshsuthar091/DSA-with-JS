/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let int_value = 0;
    let symbol_value = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);

    let i = 0, j = 1;

    while (j < s.length) {

        if (symbol_value.get(s[i]) >= symbol_value.get(s[j])) {
            int_value += symbol_value.get(s[i]);
        }
        else if (symbol_value.get(s[i]) < symbol_value.get(s[j])) {
            int_value -= symbol_value.get(s[i]);
        }
        i++;
        j++;
    }

    int_value += symbol_value.get(s[i]);

    return int_value;
};


console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("III"));
console.log(romanToInt("LCI"));
console.log(romanToInt("VX"));

