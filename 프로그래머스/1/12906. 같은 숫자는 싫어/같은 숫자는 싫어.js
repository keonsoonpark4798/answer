function solution(arr)
{
    var answer = arr.filter((num, idx) => num != arr[idx -1]);
    
    return answer;
}