var merge = function(intervals) {
    if(intervals.length<=1){
        return intervals;
    }
    
    intervals.sort((a,b)=>{
        return (a[0] < b[0]) ? -1 : 1;
    });

    let answer = [];
    let newInterval = intervals[0];
    answer.push(newInterval);

    for(let interval of intervals){
        if(interval[0] <= newInterval[1]){
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
        else{
            newInterval = interval;
            answer.push(newInterval);
        }
    }
    return answer;

};

console.log(merge([[1,3],[8,10],[2,6],[15,18]]));
// console.log(merge([[1,4],[5,6]]));
// console.log(merge([[1,8]]));