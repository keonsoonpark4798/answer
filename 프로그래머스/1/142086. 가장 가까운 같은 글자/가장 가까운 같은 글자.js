function solution(s) {
    var answer = [-1];
    var store = [s[0]];
    for(let i = 1; i<s.length;i++)
    {
        let isTrue = false;
        count=1;
        let counttrue = 0;
        for(let j = 0; j<store.length;j++)
        {
            if(s[i] == store[j])
            {
                isTrue = true;
                counttrue = i-j; 
            }
            count++;
        }
        if(isTrue)
        {   
            answer.push(counttrue); 
        }
        else
        {
            answer.push(-1); 
        }
        store.push(s[i]);
        
    }
    return answer;
}