function solution(x) {
    let answer = true;
    let num = x;
    let count = 0;
    while(x>=1)
    {
        count += parseInt(x%10);
        x = x/10;
    }
    console.log(count);
    if(num % count == 0)
        answer = true;
    else
        answer = false;
    return answer;
}