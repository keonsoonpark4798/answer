function solution(n, m) {
    let answer = [];
    let min = 0;
    let mul = n * m;
    if(n < m)
    {
        let tmp = n;
        n = m;
        m = tmp;
    }
    
    while(m != 0)
    {
        min = n % m;
        n = m;
        m = min;
    }
    answer[0] = n;
    answer[1] = mul / n;
    return answer;
}