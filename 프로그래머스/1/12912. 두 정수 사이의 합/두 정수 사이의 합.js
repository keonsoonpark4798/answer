function solution(a, b) {
    let answer = 0;
    let max = 0;
    let min = 0;
    if(b >= a)
    {
        max = b;
        min = a;
    }
    else
    {
        max = a;
        min = b;
    }
    
    for(let i=min;i<=max;i++)
    {
        answer += i;
    }
    return answer;
}