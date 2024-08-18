using System;

public class Solution {
    public int solution(int num1, int num2) {
        int answer = 0;
        num1 = Math.Clamp(num1,0,100);
        num2 = Math.Clamp(num2,0,100);
        answer = num1 * 1000 / num2;
        return answer;
    }
}