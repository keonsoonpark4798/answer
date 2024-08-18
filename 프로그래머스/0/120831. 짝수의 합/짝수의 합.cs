using System;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        n = Math.Clamp(n,0,1000);
        n=n/2;
        answer = n*n+n;
        return answer;
    }
}