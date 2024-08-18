function solution(s) {
    let answer = '';
    let count = 1;
    for(let i = 0; i<s.length;i++)
    {
        if(s[i] === ' ')
        {
            console.log("space");
            count = 0;
        }

        if(count%2 == 0)
        {
            answer += s[i].toLowerCase();
        }
        else if(count == 0)
        {
            answer += ' ';
        }
        else
        {
            answer += s[i].toUpperCase();
        }
        count++;
    }
    return answer;
}