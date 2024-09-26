function solution(n) {
    let answer = 0;
    let F = [];
    F[0] = 0;
    F[1] = 1;
    for(let i =0; i<=n-2;i++){
        F[i+2] = BigInt(F[i]) + BigInt(F[i+1]);
    }
    answer = BigInt(F[n]) % BigInt(1234567);
    return answer;
}