using System;

public class Solution {
    public int solution(int num1, int num2) {
        int answer = -1;
        num1 = Math.Clamp(num1,-50000,50000);
        num2 = Math.Clamp(num2,-50000,50000);
        return answer = num1 + num2;
    }
}