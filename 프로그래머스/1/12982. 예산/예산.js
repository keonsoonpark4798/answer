function solution(d, budget) {
    const len = d.length;
    const dp = new Array(budget+1).fill(0);
    
    for(let i =0;i<len;i++){
        for(let w= budget; w>=d[i];w--){
            dp[w] = Math.max(dp[w],dp[w-d[i]]+1);
        }
    }
    
    return dp[budget];
}