function solution(s) {
    var answer = 0;
    let index = 0;
    let curindex = 1;
    let samecount = 1;
    let differcount = 0;
    
    while(index<s.length){
        if(curindex>=s.length)
            break;
        
        if(s[index] == s[curindex]){
            samecount++;
        }else{
            differcount++;
        }
        curindex++;
        if(samecount == differcount){
            answer++;
            index = curindex;
            curindex++;
            samecount = 1;
            differcount = 0;
            
            if(index == s.length-1){
                answer++;
            }
        } else if(curindex> s.length-1){
            answer++;
        }
        
    }
    if(s.length=== 1)
        answer++;
    return answer;
}