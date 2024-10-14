function solution(k, tangerine) {
    var answer = 0;
    var tangerineObject = {};
    tangerine.forEach(function(data){
        if(tangerineObject.hasOwnProperty(data)){
            tangerineObject[data]++;
        }
        else{
            tangerineObject[data] = 1;
        }
    });
    tangerineObject = Object.entries(tangerineObject).sort(([, a],[, b]) => b - a);
    tangerineObject.some(function(data){
        answer++;
        k = k - data[1];
        if(k<=0){
            return answer;
        }
    });
    return answer;
}