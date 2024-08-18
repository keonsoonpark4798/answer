using System;
//using System.Linq;
public class Solution {
    public int[] solution(long n) {
        int count = (int)Math.Floor(Math.Log10(n) + 1);
        int[] answer = new int[count];
        int i=0;
        while(n>=1)
        {
            answer[i] = (int)(n%10);
            n = n/10;
            i++;
        }
        return answer;
    }
}