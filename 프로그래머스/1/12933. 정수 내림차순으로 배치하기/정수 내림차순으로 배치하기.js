function solution(n) {
    let answer = 0;
    let arr = []; 
    let i = 0;
    while(n>=1)
    {
        arr[i] = n%10;
        i++;
        n = parseInt(n/10);
    }
    
    arr.sort().reverse();
    let squ = 1;
    for(let j = arr.length-1;j>=0;j--)
    {
        answer = answer+arr[j]*squ;
        squ = squ*10;
    }
    return answer;
}