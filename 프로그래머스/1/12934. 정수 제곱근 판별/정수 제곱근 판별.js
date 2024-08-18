function solution(n) {
    let answer = 0;
    let sqrt = Math.sqrt(n);
    if((sqrt - Math.floor(sqrt)) == 0)
    {
        answer = (sqrt+1) * (sqrt+1);
    }
    else
    {
        answer = -1;
    }
    
    return answer;
}