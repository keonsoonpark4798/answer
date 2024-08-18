function solution(n) {
    let answer = 0;
    let count =0;
    let mid = [];
    while(n>0)
    {
        mid[count] = n%3;
        n = Math.floor(n/3);
        count++;
    }
    let placevalue = 0;
    for(let i = mid.length-1; i>=0;i--)
    {
        answer += mid[i]*(3 ** placevalue);
        placevalue++;
    }
    return answer;
}