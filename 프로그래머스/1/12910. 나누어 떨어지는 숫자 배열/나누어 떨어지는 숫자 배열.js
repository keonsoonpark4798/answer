function solution(arr, divisor) {
    let answer = [];
    
    for(let i = 0; i<arr.length;i++)
    {
        if(arr[i]%divisor == 0)
            answer.push(arr[i]);
    }
    if(answer.length == 0)
    {
        answer.push(-1);
    }
    //숫자 배열이 제대로 오름차순으로 정렬되기 위해 첫번째 인자에서 두번째 인자를 빼서 양수인지 음수인지 체크
    answer.sort((a, b) => a - b);
    return answer;
}