function solution(num) {
    let answer = 0;
    let count = 1;
    while(count<500)
    {
        if(num%2 ==0)
            num = num/2;
        else if(num == 1)
            break;
        else
            num = (num * 3) + 1;
        
        if(num == 1)
        {
            answer = count;
            break;
        }
        count++;
    }
    if(count == 500)
        answer = -1;
    return answer;
}