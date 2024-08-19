function solution(arr) {
    let answer = 1;
    arr.sort((a,b)=>a-b);
    let count = arr[0];
    for(let i = 0; i<arr.length;i++)
    {
        if(arr[i]!=count)
        {
            answer++;
            count = arr[i];
        }
    }
    return answer;
}

let arr = [1,2,1,3,2,1,4,1];
console.log(`정답 : ${solution(arr)}`);