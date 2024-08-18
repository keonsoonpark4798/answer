function solution(numbers) {
    let answer = [];
    numbers.sort(function (a, b) {
          return a - b;
    });
    
    for(let i = 0; i<numbers.length-1;i++)
    {
        for(let j = i+1;j<numbers.length;j++)
        {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    const set = new Set(answer);
    const uniqueArr = [...set];
    uniqueArr.sort(function (a, b) {
          return a - b;
    });
    return uniqueArr;
}