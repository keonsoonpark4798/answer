function solution(n, m, section) {
    let answer = 1;
    let count = m-1;
    
    for(let i = 1;i<section.length;i++)
    {
        let interval = section[i] - section[i-1];
        if(count >= interval)
        {
            count -= interval;
        }
        else
        {
            count = m -1;
            answer++;
        }
    }
    return answer;
}