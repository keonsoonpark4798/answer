function solution(n, m, section) {
    let answer = 1;
    // let maxlength = section[section.length-1] - section[0] + 1;
    // answer = Math.floor(maxlength / m);
    // if(maxlength%m != 0)
    // {
    //     answer++;
    // }
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