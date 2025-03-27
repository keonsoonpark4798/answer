function solution(progresses, speeds) {
    var answer = [];
    var endlist = [];
    for(index in progresses){
        endlist.push(Math.ceil((100-progresses[index])/speeds[index]))
    }
    
    while(endlist.length>0){
        var count = 0;
        var finished = endlist[0];
        
        while(endlist.length>0){
            if(finished >= endlist[0]){
                count++;
                endlist.shift();
            }else{
                break;
            }
        }
        answer.push(count);
    }
    return answer;
}