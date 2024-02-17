var lengthOfLongestSubstring = function(s){
    let start = -1;
    let max_length = 0;
    let map = new Map();

    for(let e of s){
        if(!map.has(e)){
            map.set(e, -1);
        }
    }

    for(let i=0; i<s.length; i++){
        if(map.get(s[i]) > start){
            start = map.get(s[i]);
        }
        map.set(s[i], i);
        max_length = Math.max(max_length, i-start);
    }

    console.log(max_length);
}

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("bbbb");
