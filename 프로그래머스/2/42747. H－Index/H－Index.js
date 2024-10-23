function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=> a-b);
    citations.forEach(function(count,index){
        var hindex = Math.min(citations.length-index,count);
        if(answer<= hindex){
            answer = hindex;
            console.log(answer);
        }
    });
    return answer;
}