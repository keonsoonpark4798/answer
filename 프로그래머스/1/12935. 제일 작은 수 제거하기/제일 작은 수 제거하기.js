function solution(arr) {
    let answer = [];
    let index = 0;
    let min = arr[0];
    for(let i =0; i<arr.length;i++)
    {
        if(arr[i]<=min)
        {
            index = i;
            min = arr[i];
        }
    }
    arr.splice(index, 1);
    console.log(min);
    if(arr.length == 0)
    {
        arr.push(-1);
    }
    answer = arr;
    return answer;
}