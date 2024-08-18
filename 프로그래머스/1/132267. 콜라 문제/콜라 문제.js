function solution(a, b, n) {
    var answer = 0;
    while(n>=a)
    {
        let count = Math.floor(n/a)*b;
        n = count + n%a;
        answer +=count;
        
    }
    return answer;
}