function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 3;
    if (n === 3) return 5;
    if (n === 4) return 11;
    
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 3;
    dp[2] = 5;
    dp[3] = 11;
    
    for(let i = 4; i<=n;i++){
        dp[i] = (4 * dp[i - 2] - dp[i - 4] + 1000000007) % 1000000007;
    }
    
    return dp[n-1];
}