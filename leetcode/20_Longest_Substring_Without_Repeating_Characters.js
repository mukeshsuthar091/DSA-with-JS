var lengthOfLongestSubstring = function(s) {
    let max_length=0;
    let start= -1;

    let map = new Map();
    for(let i of s){
        if(!map.has(i)){
            map.set(i, -1);
        }
    }

    for(let i=0; i<s.length; i++){
        if(map.get(s[i])>start){
            start = map.get(s[i]);
        }
        map.set(s[i], i);
        max_length = Math.max(max_length, i-start);
    }

    console.log(max_length);
    return;
};

lengthOfLongestSubstring("abcabcbb");
