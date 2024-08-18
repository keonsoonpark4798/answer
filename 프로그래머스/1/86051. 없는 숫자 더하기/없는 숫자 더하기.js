function solution(numbers) {
    let answer = -1;
    let count = 45;
    for(let i = 0;i<numbers.length;i++)
    {
        count -=numbers[i];
    }
    answer = count;
    return answer;
}