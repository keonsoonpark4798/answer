function solution(t, p) {
    let answer = 0;
    for(let i=0; i<t.length - p.length+1;i++)
    {
        let s ="";
        let start = i;
        
        for(let j = 0;j<p.length;j++)
        {
            s +=t[start];
            start++;
        }
        
        if(parseInt(s)<=p)
        {
            answer++;
        }
    }
    return answer;
}