function solution(left, right) {
    let answer = 0;
    for(let i = left;i<=right;i++)
    {
        if(divisor(i)%2==0)
        {
            answer+=i;
        }
        else
        {
            answer-=i;
        }
    }
    return answer;
}

function divisor(n){
    let count = 0;
    for(let i = 1 ; i <= Math.sqrt(n) ; i++){
        if(n % i === 0) {
            count++;
            if(n / i != i) 
                count++;
        }
    }
    return count;
}