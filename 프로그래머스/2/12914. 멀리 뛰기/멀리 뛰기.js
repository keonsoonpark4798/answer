function solution(n) {
    var answer = 0;
    if(n === 1) return answer = 1;
    if(n === 2) return answer = 2;
    
    let dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i<=n;i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    answer = dp[n];
    return answer;
}