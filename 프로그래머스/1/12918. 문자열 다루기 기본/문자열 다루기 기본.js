function solution(s) {
    let answer = true;
    console.log(s.length);
    if(s.length == 4 || s.length == 6)
    {
        answer = true;
    }
    else
    {
        answer = false;
        return answer;
    }
    for(let i = 0; i<s.length;i++)
    {
        if(isNaN(s[i]) || s[i] == null)
        {
            answer = false;
            break;
        }
    }   
    return answer;
}