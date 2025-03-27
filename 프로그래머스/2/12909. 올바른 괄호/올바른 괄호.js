function solution(s){
    var answer = true;
    let queue = [];
    
    for(str in s){
        if(s[str] == "("){
            queue.push(s[str]);
        }else{
            if(queue.length == 0){
                answer = false;
                break;
            }else{
                queue.pop();
            }
        }
    }
    if(queue.length != 0){
        answer = false;
    }

    return answer;
}